import { Chef } from "@interfaces/chef";
import AsafGranitImg from '@public/chefs/Asaf_Granit.png';
import AvivMosheImg from '@public/chefs/Aviv_Moshe.png';
import YossiShitritImg from '@public/chefs/yossi_shitrit2.png';
import EyalShaniImg from '@public/chefs/eyal_shani.png';
import MeirAdoniImg from '@public/chefs/meir_adoni.png';
import OmerMillerImg from '@public/chefs/omer_miller.png';
import ShahafShabatyImg from '@public/chefs/shahaf_shabaty.png';
import NitzanRazImg from '@public/chefs/nitzan_raz.png';
import YuvalBenNeriahImg from '@public/chefs/yuval_ben_neriah.png';

export const chefs: Chef[] = [
    {
        id: "1",
        firstName: "Asaf",
        lastName: "Granit",
        imgUrl: AsafGranitImg,
        numberOfViews: 200,
        foundedDate: "2008-06-15",
    },
    {
        id: "2",
        firstName: "Aviv",
        lastName: "Moshe",
        imgUrl: AvivMosheImg,
        numberOfViews: 190,
        foundedDate: "2001-06-15",
    },
    {
        id: "3",
        firstName: "Yossi",
        lastName: "Shitrit",
        imgUrl: YossiShitritImg,
        numberOfViews: 180,
        foundedDate: "2010-06-15",
    },
    {
        id: "4",
        firstName: "Eyal",
        lastName: "Shani",
        imgUrl: EyalShaniImg,
        numberOfViews: 50,
        foundedDate: "2010-06-15",
    },
    {
        id: "5",
        firstName: "Meir",
        lastName: "Adoni",
        imgUrl: MeirAdoniImg,
        numberOfViews: 75,
        foundedDate: "2001-06-15",
    },
    {
        id: "6",
        firstName: "Omer",
        lastName: "Miller",
        imgUrl: OmerMillerImg,
        numberOfViews: 120,
        foundedDate: "2015-06-15",
    },
    {
        id: "7",
        firstName: "Shahaf",
        lastName: "Shabaty",
        imgUrl: ShahafShabatyImg,
        numberOfViews: 110,
        foundedDate: "2020-06-15",
    },
    {
        id: "8",
        firstName: "Nitzan",
        lastName: "Raz",
        imgUrl: NitzanRazImg,
        numberOfViews: 105,
        foundedDate: "2024-06-15",
    },
    {
        id: "9",
        firstName: "Yuval",
        lastName: "Ben Neriah",
        imgUrl: YuvalBenNeriahImg,
        numberOfViews: 102,
        foundedDate: "2025-01-01",
    },
]