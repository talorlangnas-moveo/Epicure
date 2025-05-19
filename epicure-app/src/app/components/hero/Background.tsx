import Image from 'next/image'
import heroImageUrl from '../../../../public/hero-picture1.png'

 
export default function Background() {
  return (
    <Image
      alt="heroImageUrl"
      src={heroImageUrl}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}