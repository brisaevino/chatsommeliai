import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SommeliAI",
  description: "Seu sommelier de bolso inteligente",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QKKQF64KX1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QKKQF64KX1');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
