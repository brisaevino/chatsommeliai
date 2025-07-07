
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnuncieBar from "@/components/AnuncieBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AnuncieBar />
      <main>
        <Hero />
      </main>
    </>
  );
}