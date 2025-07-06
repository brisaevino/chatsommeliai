"use client";

const steps = [
  {
    icon: "🍽️",
    title: "Harmonize com pratos",
    text: "Descubra qual vinho combina perfeitamente com o seu prato, seja ele simples ou sofisticado."
  },
  {
    icon: "⚡",
    title: "Respostas Rápidas",
    text: "Receba sugestões e dicas de vinho em segundos, direto no chat."
  },
  {
    icon: "💸",
    title: "Todas as faixas de preços",
    text: "Encontre opções de vinhos para todos os bolsos, do acessível ao especial."
  }
];

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComoFunciona() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
        padding: "32px 12px 48px 12px"
      }}>
        <h2 className="title-font" style={{ fontSize: 28, color: "#7a2e1e", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>
          Como funciona o SommeliAI?
        </h2>
        {/* Fluxo explicativo do SommeliAI */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          margin: "0 auto 38px auto",
          maxWidth: 900,
          flexWrap: "wrap"
        }}>
          {/* Passo 1 */}
          <div style={{ flex: 1, minWidth: 220, maxWidth: 300, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#e0bfae",
              color: "#7a2e1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 22,
              margin: "0 auto 18px auto"
            }}>1</div>
            <div style={{ fontWeight: 700, color: "#7a2e1e", fontSize: 17, marginBottom: 4 }}>Converse</div>
            <div style={{ color: "#6d4c41", fontSize: 15 }}>Diga ao SommeliAI suas preferências, dúvidas ou ocasião.</div>
          </div>
          {/* Seta 1-2 */}
          <div style={{ alignSelf: "center", margin: "0 0px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 32, color: "#b85c1e", margin: "0 8px" }}>→</span>
          </div>
          {/* Passo 2 */}
          <div style={{ flex: 1, minWidth: 220, maxWidth: 300, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#e0bfae",
              color: "#7a2e1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 22,
              margin: "0 auto 18px auto"
            }}>2</div>
            <div style={{ fontWeight: 700, color: "#7a2e1e", fontSize: 17, marginBottom: 4 }}>A IA analisa</div>
            <div style={{ color: "#6d4c41", fontSize: 15 }}>O SommeliAI entende seu perfil e analisa seus gostos.
            A humana avalia cada resposta.</div>
          </div>
          {/* Seta 2-3 */}
          <div style={{ alignSelf: "center", margin: "0 0px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 32, color: "#b85c1e", margin: "0 8px" }}>→</span>
          </div>
          {/* Passo 3 */}
          <div style={{ flex: 1, minWidth: 220, maxWidth: 300, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#e0bfae",
              color: "#7a2e1e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 22,
              margin: "0 auto 18px auto"
            }}>3</div>
            <div style={{ fontWeight: 700, color: "#7a2e1e", fontSize: 17, marginBottom: 4 }}>Recomendações</div>
            <div style={{ color: "#6d4c41", fontSize: 15 }}>Receba sugestões de vinhos personalizadas para você.</div>
          </div>
        </div>

        {/* Sessão Por que utilizar? */}
        <section style={{
          margin: "56px auto 38px auto",
          maxWidth: 800,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 6px 32px 0 #e0bfae, 0 1.5px 8px 0 #b85c1e22",
          padding: "20px 14px 18px 14px",
          textAlign: "center"
        }}>
          <h3 className="title-font" style={{ color: "#7a2e1e", fontSize: 24, fontWeight: 800, marginBottom: 18 }}>
            Por que utilizar?
          </h3>
          <p style={{ color: "#6d4c41", fontSize: 16, margin: 0, lineHeight: 1.7 }}>
            Muitas vezes nos deparamos com milhares de rótulos e não sabemos qual o melhor vinho escolher. O SommeliAI facilita esse momento, tornando a escolha mais simples, divertida e personalizada. Seja para harmonizar com pratos, encontrar opções para todos os bolsos ou receber respostas rápidas, você tem um sommelier digital sempre à disposição.<br /><br />
            Experimente e descubra como a inteligência artificial pode transformar sua experiência com vinhos!
          </p>
        </section>

        {/* Três quadrados de funcionalidades */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 28,
          width: "100%",
          maxWidth: 900,
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#f5e5db",
              borderRadius: 18,
              boxShadow: "0 2px 12px #f3e0d6",
              padding: "32px 18px 24px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 220,
            }}>
              <div style={{ marginBottom: 18, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#f3edea',
                }}>
                {i === 0 && (
                  // Prato de macarrão com contorno igual ao cifrão
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="23" rx="20" ry="20" fill="#f3edea" stroke="#b85c1e" strokeWidth="2" />
                    <ellipse cx="23" cy="27" rx="14" ry="5.5" fill="#fff7e6" stroke="#e0bfae" strokeWidth="1.5" />
                    <ellipse cx="23" cy="27" rx="10" ry="3.5" fill="#ffe5b4" stroke="#f7b267" strokeWidth="1" />
                    <path d="M15 27 Q18 25 23 27 T31 27" stroke="#f7b267" strokeWidth="1.5" fill="none" />
                    <path d="M17 29 Q22 30 29 28" stroke="#f7b267" strokeWidth="1.2" fill="none" />
                    <path d="M20 25 Q24 24 26 27" stroke="#f7b267" strokeWidth="1" fill="none" />
                    <circle cx="27" cy="27" r="1.2" fill="#e94f37" />
                    <circle cx="19" cy="27" r="1" fill="#e94f37" />
                    <circle cx="23" cy="29" r="1" fill="#e94f37" />
                  </svg>
                )}
                  {i === 1 && (
                    // Raio estilizado, centralizado e mais "gordinho" para combinar com o prato
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="23" cy="23" rx="20" ry="20" fill="#f3edea" stroke="#b85c1e" strokeWidth="2" />
                      <path d="M25 7 L13 27 H23 L21 39 L33 19 H23 L25 7 Z" fill="#ffe5b4" stroke="#b85c1e" strokeWidth="2.2" />
                      <path d="M23 27 L23 19" stroke="#f7b267" strokeWidth="2" />
                    </svg>
                  )}
                {i === 2 && (
                  // Cifrão estilizado, centralizado e "gordinho" para combinar com o prato
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="23" rx="20" ry="20" fill="#f3edea" stroke="#b85c1e" strokeWidth="2" />
                    <path d="M23 13v20" stroke="#b85c1e" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M28 17c0-3-2.5-5-5-5s-5 2-5 5c0 3 2.5 5 5 5s5 2 5 5c0 3-2.5 5-5 5s-5-2-5-5" stroke="#b85c1e" strokeWidth="2.2" fill="none" />
                  </svg>
                )}
                </span>
              </div>
              <div className="title-font" style={{ fontWeight: 700, fontSize: 18, color: "#7a2e1e", marginBottom: 10, textAlign: "center" }}>{step.title}</div>
              <div style={{ fontSize: 15, color: "#6d4c41", textAlign: "center" }}>{step.text}</div>
            </div>
          ))}
        </div>

        {/* CTA para o chat */}
        <section style={{
          margin: "48px auto 0 auto",
          maxWidth: 1200,
          background: "#7a2e1e",
          borderRadius: 18,
          boxShadow: "0 6px 32px 0 #e0bfae, 0 1.5px 8px 0 #b85c1e22",
          padding: "38px 18px 32px 18px",
          textAlign: "center",
          color: "#fff"
        }}>
          <h3 className="title-font" style={{ fontSize: 26, fontWeight: 800, marginBottom: 14, color: "#fff" }}>
            Pronto para começar?
          </h3>
          <p className="title-font" style={{ fontSize: 17, margin: 0, marginBottom: 22, color: "#ffe5d0", fontWeight: 500 }}>
            Teste nosso chat gratuito e descubra seu próximo vinho favorito
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                const chatSection = document.querySelector('.hero');
                if (chatSection) {
                  chatSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            style={{
              background: "#fff",
              color: "#7a2e1e",
              border: "none",
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 17,
              padding: "0.9rem 2.2rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px #b85c1e22",
              transition: "background 0.2s, color 0.2s"
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#e0bfae';
              e.currentTarget.style.color = '#7a2e1e';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#7a2e1e';
            }}
          >
            Ir para o chat
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
