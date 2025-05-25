import Image from "next/image";

export default function AppStoreIcon() {
  return (
    <Image
      src="/icons/appStoreLogo.svg"
      width={180}
      height={52}
      alt="App Store Icon"
    />
  );
}