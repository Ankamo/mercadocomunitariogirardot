"use client";
import Image from "next/image";
import Header from "@/components/header/page";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";
import productosData from "@/datos/productos.json";

export default function TiendaVirtualPage() {
  const productos = productosData.productos;
  const productosDescuento = productos.filter(p => p.descuento > 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-grow px-4 py-12 max-w-screen-xl mx-auto text-white">
        {/* Barra de productos en descuento */}
        {productosDescuento.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">🔥 En Descuento</h2>
            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {productosDescuento.map(producto => (
                <div
                  key={producto.id}
                  className="min-w-[200px] bg-white text-black rounded-lg shadow-md p-4 flex-shrink-0"
                >
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={200}
                    height={200}
                    className="rounded mb-2 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 line-through">
                    ${producto.precio.toFixed(2)}
                  </p>
                  <p className="text-red-600 font-bold">
                    ${producto.precioConDescuento.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lista general de productos */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Todos los Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productos.map(producto => (
              <div
                key={producto.id}
                className="bg-white text-black rounded-lg shadow-md p-4"
              >
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={300}
                  height={300}
                  className="rounded mb-3 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{producto.nombre}</h3>
                <p className="text-sm mb-1">{producto.descripcion}</p>
                <p className="text-sm mb-1">Local: {producto.local}</p>
                <p className="text-sm mb-1">Proveedor: {producto.proveedor}</p>
                {producto.descuento > 0 ? (
                  <>
                    <p className="text-sm text-gray-500 line-through">
                      ${producto.precio.toFixed(2)}
                    </p>
                    <p className="text-red-600 font-bold">
                      ${producto.precioConDescuento.toFixed(2)}
                    </p>
                  </>
                ) : (
                  <p className="font-bold text-blue-700">
                    ${producto.precio.toFixed(2)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
