import { columns } from "./columns";
import { RestaurantColumn } from "@/types/columns/restaurant.column";
import { DataTable } from "@/components/ui/data-table";
import DataDisplay from "@/components/ui/data-display";

async function getData(): Promise<RestaurantColumn[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      image: "/restaurantsDesk/claro.png",
      name: "The Golden Spoon",
      chefName: "Gordon Ramsay",
      rating: 4.8,
      openingTime: "10:00",
      closingTime: "22:00",
      foundedDate: new Date("2010-05-20"),
    },
    {
      id: "01JY1FXADNPS7HHC1Y6X3SPZXM",
      image: "/restaurantsDesk/messa.png",
      name: "Urban Tastes",
      chefName: "Ana Martinez",
      rating: 4.5,
      openingTime: "09:00",
      closingTime: "23:00",
      foundedDate: new Date("2015-08-12"),
    },
    {
      id: "01JY1FXADQAPPTPQBPS565XBW5",
      image: "/restaurantsDesk/kabkem.png",
      name: "Sea Breeze",
      chefName: "Yamato Sato",
      rating: 4.6,
      openingTime: "11:30",
      closingTime: "21:30",
      foundedDate: new Date("2012-03-03"),
    },
    {
      id: "01JY1FXADQTEJ8J8ZQWAKZRSW8",
      image: "/restaurantsDesk/nitan_thai.png",
      name: "Savory Garden",
      chefName: "Lucia Bianchi",
      rating: 4.7,
      openingTime: "10:00",
      closingTime: "20:00",
      foundedDate: new Date("2018-11-01"),
    },
    {
      id: "01JY1FXADRVNKXGAKH9KAVWYCA",
      image: "/restaurantsDesk/tiger_lilly.png",
      name: "The Rustic Fork",
      chefName: "James Thornton",
      rating: 4.4,
      openingTime: "08:00",
      closingTime: "22:00",
      foundedDate: new Date("2008-06-18"),
    },
    {
      id: "01JY1FXADSYZ1MKMRC3V9RZZWN",
      image: "/restaurantsDesk/yapan.png",
      name: "Fusion Point",
      chefName: "Mina Zhang",
      rating: 4.9,
      openingTime: "12:00",
      closingTime: "23:00",
      foundedDate: new Date("2017-02-10"),
    },
  ];
}

export default async function RestaurantsPage() {
  const data = await getData();
  return (
    <div>
      <DataDisplay title="Restaurants">
        <DataTable columns={columns} data={data} />
      </DataDisplay>
    </div>
  );
}
