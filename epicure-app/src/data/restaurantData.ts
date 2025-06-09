import { Restaurant } from '@interfaces/restaurant';
import ClaroImage from '@public/restaurantsDesk/claro.png';
import KabKemImage from '@public/restaurantsDesk/kabkem.png';
import MessaImage from '@public/restaurantsDesk/messa.png';
import NitanThaiImage from '@public/restaurantsDesk/nitan_thai.png';
import TigerLillyImage from '@public/restaurantsDesk/tiger_lilly.png';
import YaPanImage from '@public/restaurantsDesk/yapan.png';
import Claro2Image from '@public/restaurantsDesk/claro2.png';
import KabKem2Image from '@public/restaurantsDesk/kabkem2.png';
import Messa2Image from '@public/restaurantsDesk/messa2.png';
import ClaroHomePageImgMobile from '@public/restaurantsHomepage/claro_homepage_mobile.png';
import ClaroHomePageImgDesktop from '@public/restaurantsHomepage/claro_homepage_desktop.png';

import {Stars1Image, Stars2Image, Stars4Image} from '@icons';

export const restaurants: Restaurant[] = [
    {
      id: "1",
      type: "restaurant",
      title: "Claro",
      description: "Ran Shmueli",
      imgUrl: ClaroImage,
      homePageImgUrlMobile: ClaroHomePageImgMobile,
      homePageImgUrlDesktop: ClaroHomePageImgDesktop,
      rating: 4,
      ratingImage: Stars4Image,
      openingTime: "12:00",
      closingTime: "22:00",
      foundedDate: "1995-06-15",
    },
    {
      id: "2",
      type: "restaurant",
      title: "Kab Kem",
      description: "Yariv Malili",
      imgUrl: KabKemImage,
      rating: 1,
      ratingImage: Stars1Image,
      openingTime: "11:00",
      closingTime: "21:30",
      foundedDate: "2005-04-10"
    },
    {
        id: "3",
        type: "restaurant",
        title: "Messa",
        description: "Aviv Moshe",
        imgUrl: MessaImage,
        rating: 1,
        ratingImage: Stars4Image,
        openingTime: "13:00",
        closingTime: "23:00",
        foundedDate: "2010-09-01"
      },
      {
        id: "4",
        type: "restaurant",
        title: "Nitan Thai",
        description: "Shahaf Shabtay",
        imgUrl: NitanThaiImage,
        rating: 1,
        ratingImage: Stars1Image,
        openingTime: "10:30",
        closingTime: "22:30",
        foundedDate: "2008-07-20"
      },
      {
        id: "5",
        type: "restaurant",
        title: "Tiger Lilly",
        description: "Yanir Green",
        imgUrl: TigerLillyImage,
        rating: 4,
        ratingImage: Stars4Image,
        openingTime: "12:30",
        closingTime: "23:30",
        foundedDate: "2012-05-05"
      },
      {
        id: "6",
        type: "restaurant",
        title: "Ya Pan",
        description: "Yuval Ben Moshe",
        imgUrl: YaPanImage,
        rating: 2,
        ratingImage: Stars2Image,
        openingTime: "11:30",
        closingTime: "21:00",
        foundedDate: "2003-11-11"
      },
      {
        id: "7",
        type: "restaurant",
        title: "Claro",
        description: "Ran Shmueli",
        imgUrl: Claro2Image,
        rating: 1,
        ratingImage: Stars1Image,
        openingTime: "12:00",
        closingTime: "22:00",
        foundedDate: "1999-03-22"
      },
      {
        id: "8",
        type: "restaurant",
        title: "Kab Kem",
        description: "Yariv Malili",
        imgUrl: KabKem2Image,
        rating: 2,
        ratingImage: Stars2Image,
        openingTime: "11:00",
        closingTime: "21:30",
        foundedDate: "2007-10-08"
      },
      {
        id: "9",
        type: "restaurant",
        title: "Messa",
        description: "Aviv Moshe",
        imgUrl: Messa2Image,
        rating: 1,
        ratingImage: Stars1Image,
        openingTime: "13:00",
        closingTime: "23:00",
        foundedDate: "2011-02-14"
      }
  ];