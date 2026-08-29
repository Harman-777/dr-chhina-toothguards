"use client";

import { CLINIC } from "@/lib/constants";
import { formatWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFAB() {
  return (
    <a
      href={formatWhatsAppLink(
        CLINIC.whatsapp,
        "Hello Dr. Chhina's Tooth Guards! I would like to book a dental appointment."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 pulse-ring w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 2c-5.514 0-9.999 4.486-9.999 10 0 1.763.459 3.479 1.33 4.996l-1.362 4.978 5.093-1.336c1.472.802 3.136 1.226 4.84 1.226 5.514 0 10-4.486 10-10 0-5.514-4.486-10-9.902-10zm.098 17.511c-1.503 0-2.981-.403-4.276-1.168l-.307-.181-3.178.834.848-3.096-.199-.317c-.838-1.339-1.282-2.898-1.282-4.485 0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8 0 4.411-3.589 8.013-7.906 8.013zm4.356-5.962c-.239-.12-1.416-.699-1.636-.779-.22-.08-.38-.12-.54.12-.16.24-.619.779-.759.939-.14.16-.279.18-.519.06-.24-.12-1.014-.374-1.932-1.192-.714-.637-1.196-1.424-1.336-1.664-.14-.24-.015-.37.105-.489.108-.107.239-.279.359-.419.12-.14.16-.24.24-.4.08-.16.04-.299-.02-.419s-.54-1.301-.74-1.781c-.195-.467-.394-.403-.54-.411l-.46-.008c-.16 0-.419.06-.639.3-.22.24-.839.82-.839 2 0 1.18.859 2.32.979 2.48.12.16 1.691 2.582 4.097 3.621.572.247 1.019.395 1.368.506.574.182 1.096.156 1.509.095.461-.069 1.416-.579 1.616-1.139.2-.56.2-.1.14-.22-.06-.12-.22-.199-.459-.319z" />
      </svg>
    </a>
  );
}
