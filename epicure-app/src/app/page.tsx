import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Card from "@/components/card/Card";
import claroImge from "@public/restaurants/claro.png";
import IconLegend from "@/components/iconLegend/IconLegend";
import Footer from "@/components/Footer/Footer";
import GenImage from "@/components/myImage/GenImage";
import {YossiShitrit} from "@/data/chefImage";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        card={{
          title: "Claro",
          description: "Ran Shmueli",
          imgUrl: claroImge,
        }}
      />
      <IconLegend />
      <Footer />
      <GenImage cardImg={YossiShitrit} />
    </div>
  );
}
