import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

export default function SobreMercadoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto text-white space-y-6">
        <h2 className="text-3xl font-bold mb-4">Sobre el Mercado Comunitario</h2>
        <p className="text-gray-300">
          El Mercado Comunitario Rosa Blanca es una plataforma digital creada para impulsar la economía local,
          promover la sostenibilidad y conectar a productores y consumidores de forma directa. Este espacio
          busca fortalecer el tejido social mediante el comercio justo, la participación ciudadana y la
          innovación tecnológica al servicio de la comunidad.
        </p>
      </main>

      <Footer />
    </div>
  );
}
