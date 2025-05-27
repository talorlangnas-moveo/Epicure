
export type CardType = 'restaurant' | 'dish' | 'chef';

export function getTitle(type: CardType | undefined): string {
    switch (type) {
        case "restaurant":
            return "Popular restaurant in Epicure:";

        case "dish":
            return "Signature Dish Of:";

        case "chef":
            return "";
        
            default:
            return "";
    }
}