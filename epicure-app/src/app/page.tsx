import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import IconLegend from "@/components/iconLegend/iconLegend";
import Footer from "@/components/footer/footer";
import { chefInfo } from "@/data/chefInfo";
import Chef from '@/components/chef/chef';
import PopularRestaurants from '@components/popularRestaurants/popularRestaurants';
import { restaurantsCards } from "@/data/restaurantsCards";
import { dishCards } from '@/data/dishCards';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularRestaurants cards={restaurantsCards} type="restaurant" />
      <PopularRestaurants cards={dishCards} type="dish" />
      <IconLegend />
      <Chef chef={chefInfo} />
      <Footer />
    </div>
  );
}
