"use client";

import { createContext, useContext, useState } from "react";
import { identifiers } from "@/utils/utilsFunctions";

interface RestaurantState {
    selectItemMap: identifiers[];
}

const RestaurantContext = createContext<RestaurantState>({
    selectItemMap: [],
});

interface RestaurantProviderProps {
    children: React.ReactNode;
    items: identifiers[];
}

export function RestaurantProvider({children, items}: RestaurantProviderProps){
    const [selectItemMap, setSelectItemMap] = useState<identifiers[]>(items);

    const value: RestaurantState = {
        selectItemMap,
    }

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    )
}

export function useRestaurantContext(){
    return useContext(RestaurantContext);
}