import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Card from "@/components/card/card";
import claroImge from "@public/restaurants/claro.png";
import IconLegend from "@components/iconLegend/IconLegend";
import Footer from "@components/footer/Footer";
import { chefInfo } from "@/data/chefInfo";
import Chef from "@components/chef/Chef";
import Carousel from '@components/carousel/carousel';
import { restaurantsCards } from "@/data/restaurantsCards";

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
      <Carousel cards={restaurantsCards}/>
    </div>
  );
}
