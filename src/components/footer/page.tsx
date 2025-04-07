import {
    Mail, Phone, MapPin, Building2,
    Facebook, Instagram, Youtube,
} from "lucide-react";

import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-sm text-center gap-10 md:flex-row md:justify-center md:text-center">

                {/* Enlaces Rápidos */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Enlaces Rápidos</h3>
                    <ul className="space-y-2 text-blue-400">
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Sobre el Mercado Comunitario</a></li>
                        <li><a href="#">Sobre la Corporación</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>

                {/* Información de Contacto */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Contacto</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 justify-center">
                            <Mail size={16} /> mercadocomunitariorosablanca@gmail.com
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <Phone size={16} /> (304) 347 0984
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <MapPin size={16} /> Diagonal 33 con Carrera 12 A Esquina
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <MapPin size={16} /> Barrio Rosa Blanca 1er sector
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <Building2 size={16} /> Girardot - Cundinamarca
                        </li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-lg mb-3">Redes Sociales</h3>
                    <ul className="space-y-2 text-blue-400">
                        <li className="flex items-center gap-2 justify-center">
                            <FaWhatsapp size={16} /> WhatsApp
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <Facebook size={16} /> Facebook
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <Instagram size={16} /> Instagram
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <FaXTwitter size={16} /> X
                        </li>
                        <li className="flex items-center gap-2 justify-center">
                            <Youtube size={16} /> Youtube
                        </li>
                    </ul>
                </div>
            </div>

            {/* Créditos abajo */}
            <div className="text-center text-xs text-gray-400 mt-10 space-y-1">
                <p>
                    Desarrollado por <span className="text-blue-400">NextCode-Labs</span>
                </p>
                <p>
                    Administrado por <span className="text-blue-400">Corporación Rosa Blanca</span>
                </p>
                <p>© 2025 Mercado Comunitario Rosa Blanca. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
