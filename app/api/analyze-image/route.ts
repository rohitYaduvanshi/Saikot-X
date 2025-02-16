import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    const base64Data = image.split(",")[1];

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a clear, concise description`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: "image/jpeg",
        },
      },
    ]);

    const text = await result.response.text();

    // Parse response
    const titleMatch = text.match(/TITLE:\s*(.+)/);
    const typeMatch = text.match(/TYPE:\s*(.+)/);
    const descMatch = text.match(/DESCRIPTION:\s*(.+)/);

    const title = titleMatch?.[1]?.trim() || "";
    const reportType = typeMatch?.[1]?.trim() || "";
    const description = descMatch?.[1]?.trim() || "";

    // **Check if the report is related to violence**
    if (!description.toLowerCase().includes("violence") && reportType.toLowerCase() !== "violence") {
      return NextResponse.json(
        { error: "Report submission is only allowed for violence-related incidents." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      title,
      reportType,
      description,
    });
  } catch (error) {
    console.error("Image analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}
