import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import CardRestaurant from "@/components/card/Card";
import claroImge from "@public/restaurants/claro.png";
                                
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardRestaurant
        restaurant={{
          name: "Claro",
          chef: "Ran Shmueli",
          imgUrl: claroImge,
        }}
      />
    </>
  );
}
