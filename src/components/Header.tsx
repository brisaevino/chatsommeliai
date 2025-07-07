"use client";
export default function Header() {
  return (
    <header className="header" style={{ marginBottom: 0, borderRadius: "0 0 0 0", position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, marginBottom: 6 }}>
        {/* Avatar removido */}
        <h1 style={{
          margin: 0,
          fontSize: 36, // 👈 aumentei de 28 para 36
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: 0.5
        }}>
          SommeliAI
        </h1>
      </div>
      <p>Seu sommelier de bolso inteligente</p>
      <div className="header-buttons">
        <button className="button">
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8.5" stroke="#b85c1e" strokeWidth="1.5" fill="#ffe5b4"/>
              <path d="M10 6v4l2.5 2.5" stroke="#b85c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Como funciona?
          </span>
        </button>
        <button className="button">
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.5 3.5 4 5.5 4c1.04 0 2.04.54 2.62 1.38C8.96 4.54 9.96 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.78-2.4 4.86-6.55 8.68L10 17.5z" fill="#e94f37" stroke="#b85c1e" strokeWidth="1.2"/>
            </svg>
            Nossos Preferidos
          </span>
        </button>
        <button className="button" onClick={() => {
          const chatSection = document.querySelector('.hero');
          if (chatSection) {
            chatSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="#b85c1e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Teste o chat!
          </span>
        </button>
      </div>
    </header>
  );
}
