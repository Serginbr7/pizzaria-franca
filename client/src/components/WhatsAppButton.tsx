import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "5516999999999",
  message = "Olá! Gostaria de fazer um pedido.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-xs bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fade-in-up"
    >
      <MessageCircle className="w-5 h-5" />
      <span>
        <span className="block text-sm">🛒 Ver Carrinho</span>
        <span className="text-xs opacity-90">Enviar Pedido</span>
      </span>
    </a>
  );
}
