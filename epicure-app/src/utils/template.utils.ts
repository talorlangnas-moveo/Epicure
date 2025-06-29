import { Identifiers } from "@/types/interfaces/identifiers";

export function mapIdsToNames<T extends Identifiers>(items: T[]): Map<string, string> {
    const identifiersMap = new Map<string, string>();
  
    items.forEach((item) => {
        identifiersMap.set(item._id, item.name);
    });
    
    return identifiersMap;
}

