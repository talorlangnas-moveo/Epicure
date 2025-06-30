import restaurantPlaceholderImage from '@public/restaurantsDesk/claro.png';

export async function getUploadedImage(imagePath: string): Promise<File> {
    try {
        const image = await import(`@public/${imagePath}`);
        return image.default as File;
    } catch (error) {
        console.error(`Failed to load image: ${imagePath}`, error);
        return restaurantPlaceholderImage as unknown as File;
    }
} 