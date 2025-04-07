// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Asegúrate de que este archivo importe Tailwind CSS

// Configura la fuente Inter
const inter = Inter({ subsets: ["latin"] });

// Define los metadatos de la página
export const metadata: Metadata = {
  title: "Mercado Comunitario Rosa Blanca",
  description: "Tienda Virtual Mercado Comunitario Rosa Blanca",
};

// Componente RootLayout que envuelve toda la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aplica la fuente Inter y el color de fondo oscuro a todo el body */}
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children} {/* Renderiza el contenido de la página específica */}
      </body>
    </html>
  );
}
