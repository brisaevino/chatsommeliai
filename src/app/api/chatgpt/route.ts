import { systemPrompt } from "@/lib/prompt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return Response.json({ error: "Mensagens não enviadas corretamente." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "API key não encontrada no backend." }, { status: 500 });
    }

    const systemMessage = {
      role: "system",
      content: systemPrompt, // ✅ usa o prompt completo do prompt.ts
    };

    const fullMessages = [systemMessage, ...messages];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 700,
        messages: fullMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data.error?.message || "Erro na API OpenAI." }, { status: 500 });
    }

    const resposta = data.choices?.[0]?.message?.content?.trim();
    return Response.json({ answer: resposta });
  } catch (err) {
    console.error("Erro inesperado:", err);
    return Response.json({ error: "Erro inesperado no backend." }, { status: 500 });
  }
}
