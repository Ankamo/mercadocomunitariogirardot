import { google } from "googleapis";
import path from "path";
import fs from "fs";

const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    credentials: JSON.parse(
        fs.readFileSync(path.resolve("credenciales.json"), "utf8")
    ),
});

export async function obtenerProductosDesdeSheet() {
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1G3Xfwn-_luFnupMz2BKJL5vDQteD4JfuzOqwzsTdacg"; // remplázalo con el ID real
    const range = "Productos!A2:F"; // Asumiendo que tu hoja se llama "Productos"

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const rows = res.data.values;

    if (!rows || rows.length === 0) return [];

    return rows.map((row) => ({
        id: row[0],
        nombre: row[1],
        descripcion: row[2],
        imagen: row[3],
        precio: parseFloat(row[4]),
        descuento: parseFloat(row[5]),
        precioConDescuento: parseFloat(row[4]) * (1 - parseFloat(row[5]) / 100),
    }));
}
