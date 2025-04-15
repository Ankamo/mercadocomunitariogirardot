import { google } from "googleapis";
import fs from "fs";
import path from "path";

// Cargar las credenciales de la API de Google Sheets
const credentials = JSON.parse(fs.readFileSync(path.resolve("path/to/credentials.json"), "utf-8"));
const sheets = google.sheets({ version: "v4", auth: credentials });

// ID de la hoja de cálculo y el rango de las celdas que contienen los productos
const spreadsheetId = "1G3Xfwn-_luFnupMz2BKJL5vDQteD4JfuzOqwzsTdacg";
const range = "Productos!A2:F";  // Rango de la tabla de productos, comenzando desde la fila 2

// Definimos la interfaz para los productos
interface Producto {
    id: string;
    nombre: string;
    imagen: string;
    precioSinDto: string;
    descuento: string;
    precioConDto: string;
}

// Función para obtener los productos desde la hoja de Google Sheets
const obtenerProductos = async (): Promise<Producto[]> => {
    try {
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const productos = res.data.values?.map((row) => ({
            id: row[0],
            nombre: row[1],
            imagen: row[2],
            precioSinDto: row[3],
            descuento: row[4],
            precioConDto: row[5],
        })) || [];

        return productos;
    } catch (error) {
        console.error("Error al obtener productos desde Google Sheets:", error);
        return [];
    }
};

export default obtenerProductos;
