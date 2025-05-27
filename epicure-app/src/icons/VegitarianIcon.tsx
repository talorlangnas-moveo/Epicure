import Image from "next/image";
import iconImage from './iconsImages/vegitarianIcon-mobile.svg';

export default function VegitarianIcon() {
  return (
      <Image
        src={iconImage}
        alt="vegitarian Icon"
        width={56} 
        height={56}
      />
  );
}