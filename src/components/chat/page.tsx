"use client";
import { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa";

interface FormData {
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correo: string;
    whatsapp: string;
}

interface Producto {
    nombre: string;
    descripcion: string;
    precio: string;
}

export default function Chat() {
    const [chatAbierto, setChatAbierto] = useState(false);
    const [mostrarChat, setMostrarChat] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correo: "",
        whatsapp: "",
    });

    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState<{ de: string; texto: string }[]>([]);
    const [productos, setProductos] = useState<Producto[]>([]);

    // Cargar productos desde Google Sheets
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch("/api/productos"); // endpoint donde obtienes los datos del Sheet
                const data = await response.json();
                setProductos(data); // suponiendo que `data` ya es un array de productos
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        obtenerProductos();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEnviarFormulario = () => {
        console.log("Datos del usuario:", formData);
        setMostrarChat(true);
    };

    const handleEnviarMensaje = () => {
        if (!mensaje.trim()) return;

        const nuevoMensajeUsuario = { de: "usuario", texto: mensaje };

        let respuestaAsistente = {
            de: "asistente",
            texto: `Hola ${formData.nombre}, gracias por comunicarte. ¿En qué puedo ayudarte?`,
        };

        if (
            mensaje.toLowerCase().includes("productos") ||
            mensaje.toLowerCase().includes("qué productos vendes")
        ) {
            respuestaAsistente = {
                de: "asistente",
                texto: "Estos son los productos que vendemos:",
            };

            productos.forEach((producto) => {
                respuestaAsistente.texto += `\n- ${producto.nombre}: ${producto.descripcion}, Precio: ${producto.precio}`;
            });
        }

        setMensajes((prev) => [...prev, nuevoMensajeUsuario, respuestaAsistente]);
        setMensaje("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {chatAbierto && (
                <div className="mb-2 w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4 space-y-3 max-h-[90vh] overflow-y-auto border border-gray-700 transition-all duration-300">
                    {!mostrarChat ? (
                        <>
                            <h3 className="text-lg font-semibold mb-2 text-white">Formulario de contacto</h3>

                            <input
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                type="text"
                                placeholder="Nombre completo"
                                className="w-full px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white placeholder-gray-400"
                            />

                            <select
                                name="tipoDocumento"
                                value={formData.tipoDocumento}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white"
                            >
                                <option value="">Tipo de documento</option>
                                <option value="CC">Cédula de Ciudadanía</option>
                                <option value="TI">Tarjeta de Identidad</option>
                                <option value="CE">Cédula de Extranjería</option>
                            </select>

                            <input
                                name="numeroDocumento"
                                value={formData.numeroDocumento}
                                onChange={handleChange}
                                type="text"
                                placeholder="Número de documento"
                                className="w-full px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white placeholder-gray-400"
                            />

                            <input
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white placeholder-gray-400"
                            />

                            <input
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                type="text"
                                placeholder="Número de WhatsApp"
                                className="w-full px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white placeholder-gray-400"
                            />

                            <button
                                onClick={handleEnviarFormulario}
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                            >
                                Conversar
                            </button>
                        </>
                    ) : (
                        <>
                            <h3 className="text-lg font-semibold mb-2 text-white">Asistente Virtual</h3>
                            <div className="h-52 overflow-y-auto space-y-2 text-sm flex flex-col">
                                {mensajes.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-2 rounded-lg max-w-[80%] ${m.de === "usuario"
                                                ? "bg-blue-600 text-white self-end ml-auto"
                                                : "bg-gray-700 text-white self-start"
                                            }`}
                                    >
                                        {m.texto}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-2 flex gap-2">
                                <input
                                    type="text"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    className="flex-grow px-3 py-2 border border-gray-600 rounded text-sm bg-gray-800 text-white placeholder-gray-400"
                                    placeholder="Escribe tu mensaje..."
                                />
                                <button
                                    onClick={handleEnviarMensaje}
                                    className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                                >
                                    Enviar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}

            <button
                className="bg-green-600 text-white rounded-full shadow-lg p-3 hover:bg-green-700 transition-colors duration-300"
                onClick={() => setChatAbierto(!chatAbierto)}
            >
                <FaComments className="h-6 w-6" />
            </button>
        </div>
    );
}
