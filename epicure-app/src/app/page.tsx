import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Card from "@/components/card/card";
import claroImge from "@public/restaurants/claro.png";
import IconLegend from "@/components/iconLegend/iconLegend";
import Footer from "@/components/footer/footer";
import { chefInfo } from "@/data/chefInfo";
import Chef from "@/components/chef/chef";

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
