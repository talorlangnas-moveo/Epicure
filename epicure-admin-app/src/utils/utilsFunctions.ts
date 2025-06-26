export interface identifier {
    _id: string;
    name: string;
}

export interface SelectItemOptions {
    value: string;
    label: string;
}

export function getSelectItemMap<T extends identifier>(items: T[]): SelectItemOptions[] {
    return items.map((item) => ({
        value: item._id,
        label: item.name,
    }));
}

