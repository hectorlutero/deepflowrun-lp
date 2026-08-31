/** Contato comercial DeepFlowRun — fonte única para CTAs do site. */

export const WHATSAPP_E164 = "5531993443134";

export const GOOGLE_BOOKING_URL =
  "https://calendar.app.google/5AjyAUS5teYskhgm6";

export function whatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

/** Mensagem padrão — diagnóstico consultoria (home). */
export const WHATSAPP_MSG_DIAGNOSTICO =
  "Olá! Vim pelo site deepflowrun.com e quero falar sobre um diagnóstico.";

/** Mensagem padrão — demo BI Agent (LP /bi-agent). */
export const WHATSAPP_MSG_BI_AGENT_DEMO =
  "Olá! Quero uma demo de 15 min do BI Agent.";
