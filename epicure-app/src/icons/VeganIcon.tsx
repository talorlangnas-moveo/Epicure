import Image from "next/image";
import iconImage from "./iconsImages/veganIcon-mobile.svg";

export default function VeganIcon() {
  return (
      <Image
        src={iconImage}
        alt="Icon for Dropdown Menu"
        width={56} 
        height={56}
      />
  );
}