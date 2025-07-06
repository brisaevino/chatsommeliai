"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        setNewsletterMsg("");
        if (email && email.includes("@")) {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });
          const data = await res.json();
          if (data.success) {
            setNewsletterMsg("Pronto! Você receberá novidades do SommeliAI em breve.");
            setEmail("");
          } else {
            setNewsletterMsg(data.error || "Erro ao cadastrar e-mail.");
          }
        } else {
          setNewsletterMsg("Digite um e-mail válido.");
        }
      }}
      style={{ marginTop: 24, marginBottom: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}
    >
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        style={{
          padding: "0.7rem 1rem",
          borderRadius: 16,
          border: "1.2px solid #ccc",
          width: "100%",
          fontSize: 15,
          marginBottom: 4
        }}
        required
      />
      <button type="submit" className="cta-button" style={{ borderRadius: 16, fontSize: 15, padding: "0.7rem 1.2rem", width: "100%" }}>
        Quero receber a newsletter do SommeliAI
      </button>
      {newsletterMsg && (
        <div style={{ color: newsletterMsg.startsWith("Pronto") ? "#2e7d32" : "#b71c1c", fontSize: 14, marginTop: 4, textAlign: "center" }}>{newsletterMsg}</div>
      )}
    </form>
  );
}
