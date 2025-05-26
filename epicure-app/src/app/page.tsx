import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import IconLegend from "@components/iconLegend/IconLegend";
import Footer from "@components/footer/Footer";
import { chefInfo } from "@/data/chefInfo";
import Chef from "@components/chef/Chef";
import PopularRestaurants from '@components/popularRestaurants/popularRestaurants';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularRestaurants />
      <IconLegend />
      <Chef chef={chefInfo} />
      <Footer />
      
    </div>
  );
}
