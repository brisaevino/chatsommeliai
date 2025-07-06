"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

const vinhos = [
  {
    nome: "Casal Garcia Vinho Verde",
    imagem: "https://cdn.shopify.com/s/files/1/0551/9241/0843/products/casal-garcia-vinho-verde_750ml.jpg?v=1679948123",
    descricao: "Branco leve, fresco e levemente frisante. Ideal para animar encontros e petiscos com amigos. Eu juro que nunca ouvi ninguém falar que não gosta desse vinho.",
    tags: ["#Branco", "#Coringa", "#Português"],
    ocasiao: "Reunião com Amigos",
  },
  {
    nome: "Alamos Cabernet Sauvignon",
    imagem: "https://cdn.shopify.com/s/files/1/0551/9241/0843/products/alamos-cabernet-sauvignon_750ml.jpg?v=1679948123",
    descricao: "Tinto argentino encorpado, com notas de frutas vermelhas e especiarias. Perfeito para acompanhar massas e pizzas. É um tinto que não amarga, recomendo para quem está começando.",
    tags: ["#Tinto", "#Argentino", "#Encorpado"],
    ocasiao: "Massas & Pizzas",
  },
  {
    nome: "Adobe Rosé",
    imagem: "https://cdn.shopify.com/s/files/1/0551/9241/0843/products/adobe-rose_750ml.jpg?v=1679948123",
    descricao: "Rosé orgânico chileno, delicado e aromático. Ótimo para tardes ensolaradas e fofoca com as amigas. Para quem é de São Paulo, esse vinho para mim tem jeito de tarde de sol em Pinheiros.",
    tags: ["#Leve", "#Orgânico", "#Chileno"],
    ocasiao: "Tardes & Piqueniques",
  },
];

export default function Preferidos() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "70vh",
          background: "#fff",
          padding: "38px 12px 48px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 📢 Bloco de anúncio */}
        <div
  style={{
    backgroundColor: "#fff8f5",
    border: "2px dashed #d5b7a5",
    borderRadius: 14,
    margin: "40px auto",
    padding: "24px",
    maxWidth: 460,
    width: "100%",
    textAlign: "center",
    color: "#7a2e1e",
    fontWeight: 600,
    fontSize: "1.2rem",
    boxShadow: "0 2px 12px #f0e1d8",
  }}
>
  📢 Você pode anunciar aqui
</div>

<div
  style={{
    marginTop: "-24px",
    marginBottom: "40px",
    textAlign: "center",
  }}
>
  <a
    href="mailto:brisaevino@gmail.com?subject=Quero anunciar no SommeliAI"
    style={{
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#7a2e1e",
      color: "#fff",
      borderRadius: 8,
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "1rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
    }}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
    }}
  >
    📮 Quero anunciar
  </a>
</div>

        <h2
          className="title-font"
          style={{
            fontSize: 28,
            color: "#7a2e1e",
            fontWeight: 800,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Nossos Preferidos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 32,
            width: "100%",
            maxWidth: 1000,
          }}
        >
          {vinhos.map((vinho, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 18,
                border: "2px solid #e0bfae",
                boxShadow: "0 2px 12px #f3e0d6",
                padding: 22,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 340,
              }}
            >
              <img
                src={vinho.imagem}
                alt={vinho.nome}
                loading="lazy"
                style={{
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "1.5px solid #e0bfae",
                  backgroundColor: "#f3edea",
                  marginBottom: "18px",
                }}
              />

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#7a2e1e",
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                {vinho.nome}
              </div>

              <div
                style={{
                  fontSize: 15,
                  color: "#6d4c41",
                  marginBottom: 14,
                  textAlign: "center",
                }}
              >
                {vinho.descricao}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                {vinho.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      background: "#e0bfae",
                      color: "#7a2e1e",
                      borderRadius: 8,
                      padding: "2px 10px",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {tag.replace("#", "")}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  background: "#7a2e1e",
                  color: "#fff",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "0.5rem 1.2rem",
                  display: "inline-block",
                  letterSpacing: 0.2,
                }}
              >
                {vinho.ocasiao}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            margin: "48px auto 0 auto",
            maxWidth: 420,
            width: "100%",
          }}
        >
          <h3
            style={{
              color: "#7a2e1e",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Receba novidades e dicas de vinho!
          </h3>
          <NewsletterForm />
        </div>
      </main>
      <Footer />
    </>
  );
}