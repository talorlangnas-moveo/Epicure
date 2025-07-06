"use client";

import { createContext, useContext, useState } from "react";

interface BreadcrumbsContextType {
    restaurantName: string;
    setRestaurantName: (restaurantName: string) => void;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

export function BreadcrumbsProvider({ children }: { children: React.ReactNode }) {
    const [restaurantName, setRestaurantName] = useState<string>("");

    const contextValue = {
        restaurantName,
        setRestaurantName,
    }

    return (
        <BreadcrumbsContext.Provider value={contextValue}>{children}</BreadcrumbsContext.Provider>
    )
}

export function useBreadcrumbsContext(): BreadcrumbsContextType {
    const context = useContext(BreadcrumbsContext);
    if (!context) {
        throw new Error("useBreadcrumbsContext must be used within a BreadcrumbsProvider");
    }
    return context;
}