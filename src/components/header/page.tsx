"use client";
import Image from "next/image";
import Link from "next/link";
import headerData from "@/datos/header.json";

export default function Header() {
  const { LogoMercado, LogoCorporacion, Titulo, Eslogan } = headerData;

  return (
    <header className="bg-blue-950 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center px-4 relative">
        <div className="flex items-center justify-between w-full md:w-4/5">
          {/* Logo izquierdo con enlace a la página principal */}
          <Link href="/" className="w-24 h-24 flex-shrink-0 relative block">
            <Image
              src={LogoMercado}
              alt="Logo Izquierdo"
              fill
              className="object-contain rounded-full"
            />
          </Link>

          {/* Texto centrado */}
          <div className="text-center text-white flex-grow px-4">
            <h1 className="text-xl sm:text-2xl font-bold">{Titulo}</h1>
            <p className="text-sm sm:text-base text-gray-300">{Eslogan}</p>
          </div>

          {/* Logo derecho */}
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image
              src={LogoCorporacion}
              alt="Logo Derecho"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
