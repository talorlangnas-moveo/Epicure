import { columns } from "./columns";
import { ChefColumn } from "@/types/columns/chef.column";
import { DataTable } from "@/components/ui/data-table";
import DataDisplay from "@/components/ui/data-display";

export async function getChefsData(): Promise<ChefColumn[]> {
    return [
    {
      _id: "c1",
      firstName: "Asaf",
      lastName: "Granit",
      description: "World-renowned chef known for his bold flavors and precise techniques.",
      imgUrl: "/chefs/Asaf_Granit.png",
      foundedDate: new Date("2005-04-12"),
      numberOfViews: 12430,
      name: "Asaf Granit",
    },
    {
      _id: "c2",
      firstName: "Aviv",
      lastName: "Moshe",
      description: "Latin fusion expert with a love for street food and modern twists.",
      imgUrl: "/chefs/Aviv_Moshe.png",
      foundedDate: new Date("2012-06-18"),
      numberOfViews: 8740,
      name: "Aviv Moshe"
    },
    {
      _id: "c3",
      firstName: "Eyal",
      lastName: "Shani",
      description: "Japanese chef specializing in tempura and modern ramen fusion.",
      imgUrl: "/chefs/eyal_shani.png",
      foundedDate: new Date("2017-03-22"),
      numberOfViews: 6532,
      name: "Eyal Shani"
    },
    {
      _id: "c4",
      firstName: "Meir",
      lastName: "Adoni",
      description: "Italian vegetarian cuisine specialist with a flair for fresh herbs.",
      imgUrl: "/chefs/meir_adoni.png",
      foundedDate: new Date("2014-11-05"),
      numberOfViews: 4890,
      name: "Meir Adoni"
    },
    {
      _id: "c5",
      firstName: "Nitzan",
      lastName: "Raz",
      description: "Rustic flavors and hearty dishes from a traditional British kitchen.",
      imgUrl: "/chefs/nitzan_raz.png",
      foundedDate: new Date("2010-08-09"),
      numberOfViews: 5321,
      name: "Nitzan Raz"
    },
    {
      _id: "c6",
      firstName: "Omer",
      lastName: "Miller",
      description: "Contemporary Asian cuisine with bold spices and vibrant flavors.",
      imgUrl: "/chefs/omer_miller.png",
      foundedDate: new Date("2016-01-17"),
      numberOfViews: 7394,
      name: "Omer Miller"
    },
    {
      _id: "c7",
      firstName: "Shahaf",
      lastName: "Shabaty",
      description: "Modern Israeli cuisine with Mediterranean influences and precision.",
      imgUrl: "/chefs/shahaf_shabaty.png",
      foundedDate: new Date("2018-07-24"),
      numberOfViews: 3240,
      name: "Shahaf Shabaty"
    },
    {
      _id: "c8",
      firstName: "Yossi",
      lastName: "Shitrit",
      description: "Fresh, plant-based dishes inspired by South American traditions.",
      imgUrl: "/chefs/yossi_shitrit2.png",
      foundedDate: new Date("2019-05-13"),
      numberOfViews: 4105,
      name: "Yossi Shitrit",
    },
    {
      _id: "c9",
      firstName: "Noam",
      lastName: "Levi",
      description: "Minimalist approach to cooking with a focus on local ingredients.",
      imgUrl: "/chefs/yuval_ben_neriah.png",
      foundedDate: new Date("2020-10-02"),
      numberOfViews: 2850,
      name: "Yuval Ben Neriah",
    },
  ];
}
  
  export default async function ChefsPage() {
    const data = await getChefsData();
    return (
      <div>
        <DataDisplay title="Chefs">
          <DataTable columns={columns} data={data} />
        </DataDisplay>
      </div>
    );
  }