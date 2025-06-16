import { StaticImageData } from 'next/image';

export async function getImageFromPublic(path: string): Promise<StaticImageData> {
    try {
        const image = await import(`../../public/${path}`);
        return image.default;
    } catch (error) {
        console.error(`Failed to load image from path: ${path}`, error);
        const defaultImage = await import('../../public/hero-picture1.png');
        return defaultImage.default;
    }
}


    
