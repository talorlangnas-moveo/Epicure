import { CardImage } from '@/types/interfaces/CardImage';
import YossiShitritImage from '@public/chefs/Yossi_Shitrit.png'
import ShahafShabtayImage from '@public/chefs/Shahaf_Shabtay.jpg'
import OmerMillerImage from '@public/chefs/Omer_Miller.jpg'
import styles from '@components/Chef/chef.module.scss';

export const chefImages: CardImage[] = [
  {
    title: 'Yossi Shitrit',
    description: 'Chef and owner of Ouzeria, Taizu, and more.',
    imgUrl: YossiShitritImage,
    height: 300,
    width: 300,
    cardClassName: styles.imageWrapper,
    imageClassName: 'chef-image',
  },
  {
    title: 'Shahaf Shabtay',
    description: 'Chef and owner of Shabtay.',
    imgUrl: ShahafShabtayImage,
    height: 300,
    width: 300,
    cardClassName: 'chef-card',
    imageClassName: 'chef-image',
  },
  {
    title: 'Omer Miller',
    description: 'Chef and owner of Ouzeria, Taizu, and more.',
    imgUrl: OmerMillerImage,
    height: 300,
    width: 300,
    cardClassName: 'chef-card',
    imageClassName: 'chef-image',
  },
];

export const YossiShitritCard: CardImage = {
    title: 'Yossi Shitrit',
    description: 'Chef and owner of Ouzeria, Taizu, and more.',
    imgUrl: YossiShitritImage,
    cardClassName: styles.imageWrapper,
    imageClassName: styles.chefImage,
    footer: {
      content: 'Yossi Shitrit',
      className: styles.footerOverlay,
    },
  };