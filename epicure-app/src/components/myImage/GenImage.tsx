import Image from "next/image";
// import { StaticImageData } from "next/image";
import { CardImage } from "@/types/interfaces/CardImage";
import ImageFooter from "./ImageFooter";

interface CardImageProps {
    cardImg: CardImage;
}

export default function GenImage({ cardImg }: CardImageProps) {
  return (
    <div className={cardImg.cardClassName}>
      <Image
        className={cardImg.imageClassName}
        src={cardImg.imgUrl}
        alt={`${cardImg.title} image`}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
      {cardImg.children}
      {cardImg.footer && (
        <ImageFooter
          props={cardImg.footer}
        />
      )}
    </div>
  );
}