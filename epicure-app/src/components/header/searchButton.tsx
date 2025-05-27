import Image from "next/image";
import { SearchIcon } from "@icons/index"; 

export default function SearchButton() {
  return (
      <Image
        src={SearchIcon}
        width={20} 
        height={20} 
        alt="Search Icon" />
  );
}
