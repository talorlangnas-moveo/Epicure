import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import IconLegend from "@/components/iconLegend/iconLegend";
import Footer from "@/components/footer/footer";
import { chefInfo } from "@/data/chefInfo";
import ChefCard from "@/components/chefCard/chefCard";
import InfoPanel from "@/components/infoPanel/infoPanel";
import { restaurantsCards } from "@/data/restaurantsCards";
import { dishCards } from "@/data/dishCards";
import Carousel from "@components/carousel/carousel";
import Card from "@components/card/card";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <InfoPanel title="Popular restaurant in Epicure:">
        <Carousel>
          {restaurantsCards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </Carousel>
      </InfoPanel>

      <InfoPanel title="Signature Dish Of:">
        <Carousel>
          {dishCards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </Carousel>
      </InfoPanel>

      <IconLegend />
      <ChefCard chef={chefInfo}>
        <InfoPanel title="Popular restaurant in Epicure:">
          <Carousel>
            {restaurantsCards.map((c) => (
              <Card key={c.id} card={c} />
            ))}
          </Carousel>
        </InfoPanel>
      </ChefCard>
      
      <Footer />
    
    </div>
  );
}
