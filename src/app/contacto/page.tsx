import Image from "next/image";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-56 h-56 relative mb-8">
          <Image
            src="/logo.webp"
            alt="Contacto"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          Contáctanos
        </h2>
        <p className="text-base text-gray-300 mb-8 max-w-xl">
          ¿Tienes dudas o sugerencias? Escríbenos o visítanos.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          Ir al formulario
        </button>
      </main>

      <Footer />
    </div>
  );
}
