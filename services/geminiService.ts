
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDentalConsultation = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `You are a helpful and professional AI Dental Assistant for 'Lake Worth Dental Studio'. 
        Your goal is to answer patient questions about dentistry (implants, veneers, Invisalign, hygiene) and financing. 
        Always be professional, reassuring, and clear. 
        If asked about financing, mention that we offer CareCredit and LendingClub. 
        If asked about pricing, explain that costs vary by patient and a consultation is needed.
        Encourage users to book an appointment.
        Keep responses concise and friendly.
        Include a disclaimer that you are an AI and not a doctor.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please call our office at (561) 555-0123 for immediate assistance.";
  }
};
