import Image from "next/image";
import iconImage from "./iconsImages/Group.svg";

export default function SearchIcon() {
  return (
      <Image
        src={iconImage}
        width={20} 
        height={20} 
        alt="Search Icon" />
  );
}
