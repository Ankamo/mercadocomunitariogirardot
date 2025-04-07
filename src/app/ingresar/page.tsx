import Image from "next/image";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function IngresarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-56 h-56 relative mb-8">
          <Image
            src="/logo.webp"
            alt="Ingresar"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          Acceso a la WebApp
        </h2>
        <p className="text-base text-gray-300 mb-8 max-w-xl">
          Inicia sesión para acceder a funciones exclusivas.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
          Ingresar
        </button>
      </main>

      <Footer />
    </div>
  );
}
