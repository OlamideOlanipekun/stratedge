
import { GoogleGenAI, Type } from "@google/genai";

export async function getDiagnosticAdvice(businessType: string, problem: string) {
  // Always use the process.env.API_KEY directly for initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `I have a ${businessType} business and we are struggling with: ${problem}. Provide 3 high-level strategic steps we should take as a consulting recommendation. Keep it professional and concise.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three strategic recommendations"
            },
            summary: {
              type: Type.STRING,
              description: "A professional summary of the problem landscape"
            }
          },
          required: ["advice", "summary"]
        }
      }
    });

    // Extract text directly from the response property
    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return null;
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
}
