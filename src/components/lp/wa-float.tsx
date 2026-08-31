import { WhatsAppFilled } from "./icons";
import { whatsAppUrl, WHATSAPP_MSG_DIAGNOSTICO } from "@/lib/contact";

export function WaFloat() {
  return (
    <a
      className="wa-float"
      href={whatsAppUrl(WHATSAPP_MSG_DIAGNOSTICO)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <WhatsAppFilled />
    </a>
  );
}
