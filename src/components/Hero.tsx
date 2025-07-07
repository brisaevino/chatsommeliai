"use client";
import React, { useState, useEffect } from "react";
import NewsletterForm from "./NewsletterForm";
import Footer from "./Footer";
import ReactMarkdown from "react-markdown";
import { systemPrompt } from "../lib/prompt";

const PROMPT_INICIAL = `Oi, seja muito bem-vindo(a)! Eu sou o **SommeliAI**, seu sommelier digital, e estou aqui pra deixar sua escolha de vinho mais gostosa do que gole em noite de sexta-feira! 😄
Me conta, como posso te ajudar hoje?

1️⃣ Tô em dúvida entre dois vinhos  
2️⃣ Quero uma sugestão pra uma ocasião especial  
3️⃣ Quero um vinho que combine com o prato que eu escolhi

**Qual dessas é a sua vibe de hoje?**`;

export default function Hero() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", content: PROMPT_INICIAL }]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const assistantMsg = {
        role: "assistant",
        content: data.answer || `Erro: ${data.error || "Erro ao obter resposta."}`,
      };
      setMessages([...newMessages, assistantMsg]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Erro ao conectar à API." }]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const el = document.getElementById("chat-container");
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <section className="hero">
      <h2>
        A inteligência que entende <br /> o seu momento
      </h2>
      <p>SommeliAI te guia nas escolhas de vinho com precisão e simplicidade.</p>

      <NewsletterForm />

      <hr
        style={{
          border: 0,
          borderTop: "2px solid #e0bfae",
          margin: "32px auto 24px auto",
          width: "100%",
          maxWidth: 420,
          opacity: 0.7,
        }}
      />

      <div
        style={{
          margin: "32px auto 16px auto",
          maxWidth: 700,
          textAlign: "center",
          padding: "0 8px",
        }}
      >
        <h3
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#7a2e1e",
            marginBottom: 8,
            letterSpacing: 0.2,
          }}
        >
          Bate-papo com o SommeliAI
        </h3>
        <p style={{ fontSize: 16, color: "#6d4c41", margin: 0, fontWeight: 500 }}>
          Fale com nosso sommelier digital, tire dúvidas e receba recomendações personalizadas de vinho!
        </p>
      </div>

      <div
        style={{
          marginTop: "2rem",
          background: "#fff",
          borderRadius: 22,
          border: "2.5px solid #e0bfae",
          outline: "1.2px solid #b85c1e",
          outlineOffset: "-6px",
          maxWidth: 700,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 520,
        }}
      >
        <div
          id="chat-container"
          style={{
            padding: "1.8rem 1.2rem",
            overflowY: "auto",
            flexGrow: 1,
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  alignItems: "flex-end",
                  gap: 8,
                  width: "100%",
                }}
              >
                {msg.role === "assistant" && (
                  <img
                    src="/bot-avatar.png"
                    alt="Bot"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 1px 4px #eee",
                    }}
                  />
                )}
                <div
                  style={{
                    background: msg.role === "user" ? "#faece4" : "#f3f3f3",
                    color: msg.role === "user" ? "#5b1e1e" : "#444",
                    borderRadius: 16,
                    padding: "0.6rem 1rem",
                    maxWidth: "80%",
                    fontSize: 14,
                    fontWeight: 500,
                    boxShadow: msg.role === "user" ? "0 1px 4px #e5d0c3" : "0 1px 4px #eee",
                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                    wordBreak: "break-word",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown>{msg.content.trim()}</ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔁 Botão de reinício com GA4 */}
        <button
          onClick={() => {
            setMessages([{ role: "assistant", content: PROMPT_INICIAL }]);

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "recomecar_conversa", {
                event_category: "chat",
                event_label: "Botão Recomeçar",
              });
            }
          }}
          style={{
            marginBottom: 12,
            backgroundColor: "#7a2e1e",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 10,
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          🔁 Recomeçar conversa
        </button>

        {/* 📩 Campo de input fixo com charme */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "1rem 1.2rem",
            borderTop: "1px solid #eee",
            background: "#fffaf8",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Sua dúvida sobre vinhos vai aqui..."
            style={{
              padding: "0.8rem 1rem",
              borderRadius: 14,
              border: "1.2px solid #ccc",
              width: "100%",
              fontSize: 14,
              fontWeight: 500,
              flex: 1,
              background: "#fff",
            }}
            disabled={loading}
          />
          <button
            type="submit"
            className="cta-button"
            disabled={loading}
            style={{
              backgroundColor: "#7a2e1e",
              color: "#fff",
              padding: "0.8rem 1rem",
              borderRadius: 14,
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              minWidth: 100,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Enviando..." : "🍷 Enviar"}
          </button>
        </form>
      </div>

      <Footer />
    </section>
  );
}