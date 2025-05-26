import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Card from "@/components/card/Card";
import claroImge from "@public/restaurants/claro.png";
import IconLegend from "@/components/iconLegend/IconLegend";
import Footer from "@/components/Footer/Footer";
import { chefInfo } from "@/data/chefInfo";
import Chef from "@components/Chef/Chef";

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
      <Chef chef={chefInfo} />
      <Footer />
    </div>
  );
}
