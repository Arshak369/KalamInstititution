import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePhysicsMCQs(topic: string, count: number = 3) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate ${count} high-quality, NEET/JEE level physics multiple choice questions about "${topic}". They should test conceptual understanding and numerical application, just like real competitive exams.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            question: { 
              type: Type.STRING,
              description: "The physics question text."
            },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 4 options for the MCQ."
            },
            correctAnswerIndex: {
              type: Type.INTEGER,
              description: "The index (0-3) of the correct option."
            },
            explanation: {
              type: Type.STRING,
              description: "A brief step-by-step explanation of the solution."
            }
          },
          required: ["id", "question", "options", "correctAnswerIndex", "explanation"]
        }
      }
    }
  });

  const text = response.text || "[]";
  return JSON.parse(text);
}
