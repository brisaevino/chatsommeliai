import { cartaDeVinhos } from "@/data/cartaDeVinhos";

export function formatarCartaComoTexto(): string {
  const porPais: Record<string, string[]> = {};

  cartaDeVinhos.forEach(vinho => {
    if (!porPais[vinho.origem]) porPais[vinho.origem] = [];
    porPais[vinho.origem].push(`- ${vinho.nome} (${vinho.tipo})`);
  });

  let texto = "Carta de vinhos do restaurante Lilló:\n\n";
  for (const pais in porPais) {
    texto += `• ${pais}:\n${porPais[pais].join("\n")}\n\n`;
  }

  return texto.trim();
}
