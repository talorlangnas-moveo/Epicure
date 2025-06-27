export interface identifiers {
    _id: string;
    name: string;
}

export function getSelectItemMap<T extends identifiers>(items: T[]): identifiers[] {
    return items.map((item) => ({
        _id: item._id,
        name: item.name,
    }));
}
