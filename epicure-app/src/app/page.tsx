import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Card from "@/components/card/Card";
import claroImge from "@public/restaurants/claro.png";

                                
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card
        card={{
          title: "Claro",
          description: "Ran Shmueli",
          imgUrl: claroImge,
        }}
      />
    </>
  );
}
