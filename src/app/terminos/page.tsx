import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function TerminosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto text-white space-y-6">
        <h2 className="text-3xl font-bold mb-4">Términos y Condiciones</h2>
        <p className="text-gray-300">
          Al acceder a la plataforma del Mercado Comunitario Rosa Blanca, aceptas las condiciones
          de uso, que incluyen el respeto a las normas de convivencia, la protección de datos personales
          y el compromiso con una economía solidaria. Nos reservamos el derecho de modificar estos
          términos en cualquier momento para adaptarnos a los cambios tecnológicos y sociales.
        </p>
      </main>

      <Footer />
    </div>
  );
}
