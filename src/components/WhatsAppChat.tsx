import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/27762193552?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/25 text-white"
          size="icon"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppChat;