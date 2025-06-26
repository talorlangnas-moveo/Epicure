import { StaticImageData } from 'next/image';
import AsafGranitImg from '@public/chefs/Asaf_Granit.png';
import AvivMosheImg from '@public/chefs/Aviv_Moshe.png';
import YossiShitritImg from '@public/chefs/yossi_shitrit2.png';
import EyalShaniImg from '@public/chefs/eyal_shani.png';
import MeirAdoniImg from '@public/chefs/meir_adoni.png';
import OmerMillerImg from '@public/chefs/omer_miller.png';
import ShahafShabatyImg from '@public/chefs/shahaf_shabaty.png';
import NitzanRazImg from '@public/chefs/nitzan_raz.png';
import YuvalBenNeriahImg from '@public/chefs/yuval_ben_neriah.png';
import chefPlaceholderImage from '@public/chefPlaceholder.png';

export const chefImagesMap: { [key: string]: StaticImageData } = {
    "/chefs/Asaf_Granit.png": AsafGranitImg,
    "/chefs/Aviv_Moshe.png": AvivMosheImg,
    "/chefs/yossi_shitrit2.png": YossiShitritImg,
    "/chefs/eyal_shani.png": EyalShaniImg,
    "/chefs/meir_adoni.png": MeirAdoniImg,
    "/chefs/omer_miller.png": OmerMillerImg,
    "/chefs/shahaf_shabaty.png": ShahafShabatyImg,
    "/chefs/nitzan_raz.png": NitzanRazImg,
    "/chefs/yuval_ben_neriah.png": YuvalBenNeriahImg,
}

export const getChefImage = (imgUrl: string): StaticImageData => {
    return chefImagesMap[imgUrl] || chefPlaceholderImage;
}