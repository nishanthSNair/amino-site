// Placeholder: replace with the Amino WhatsApp Business number, digits only,
// country code first (for example 9715XXXXXXXX).
export const WHATSAPP_NUMBER = "971500000000";
export const WHATSAPP_IS_PLACEHOLDER = WHATSAPP_NUMBER === "971500000000";

export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
