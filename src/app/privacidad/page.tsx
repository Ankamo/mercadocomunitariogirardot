import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto text-white space-y-6">
        <h2 className="text-3xl font-bold mb-4">Política de Privacidad</h2>
        <p className="text-gray-300">
          En el Mercado Comunitario Rosa Blanca valoramos tu privacidad. La información personal que compartes
          con nosotros se utiliza exclusivamente para brindarte una mejor experiencia como usuario y facilitar
          los procesos de compra, venta y participación. Nunca compartiremos tus datos con terceros sin tu consentimiento.
        </p>
      </main>

      <Footer />
    </div>
  );
}
