"use client";

import { createContext, useContext, useState, useMemo } from "react";
import { identifiers } from "@/utils/utilsFunctions";
import { toast } from "sonner";

interface EntityState<T extends identifiers, P> {
  data: T[];
  selectItemMap: identifiers[];

  onDelete: (
    entity: T,
    deleteCallback: (id: string) => Promise<P>
  ) => Promise<void>;

  onEdit: (
    entity: T,
    dataToUpdate: Partial<T>,
    updateCallback: (id: string, data: Partial<T>) => Promise<P>,
    convertToColumnCallback: (data: P) => Promise<T>
  ) => Promise<T>;

  onAdd: (
    newEntity: Partial<T>,
    createCallback: (data: Partial<T>) => Promise<P>,
    convertToColumnCallback: (data: P) => Promise<T>
  ) => Promise<T>;
}

const EntityContext = createContext<EntityState<any, any> | undefined>(
  undefined
);

interface EntityProviderProps<T extends identifiers, P> {
  data: T[];
  items: identifiers[];
  children: React.ReactNode;
}

export function EntityProvider<T extends identifiers, P>({
  children,
  items,
  data: initialData,
}: EntityProviderProps<T, P>) {
  const [selectItemMap, setSelectItemMap] = useState<identifiers[]>(items);
  const [data, setData] = useState<T[]>(initialData);

  const handleDelete = async (
    entity: T,
    deleteCallback: (id: string) => Promise<P>
  ) => {
    console.log("Deleting:", entity);
    try {
      await deleteCallback(entity._id);
      setData((prev) => prev.filter((e) => e._id !== entity._id));
      toast.success(`${entity.name} restaurant deleted successfully`);
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error(`Failed to delete ${entity.name} restaurant`);
    }
  };

  const handleEdit = async (
    entity: T,
    dataToUpdate: Partial<T>,
    updateCallback: (id: string, data: Partial<T>) => Promise<P>,
    convertToColumnCallback: (data: P) => Promise<T>
  ) => {
    try {
      const updatedEntity = await updateCallback(entity._id, dataToUpdate);
      const updatedEntityAsColumn = await convertToColumnCallback(
        updatedEntity
      );
      setData((prev) =>
        prev.map((e) => (e._id === entity._id ? updatedEntityAsColumn : e))
      );
      return updatedEntityAsColumn;
    } catch (error) {
      throw error;
    }
  };

  const handleAdd = async (
    newEntity: Partial<T>,
    createCallback: (data: Partial<T>) => Promise<P>,
    convertToColumnCallback: (data: P) => Promise<T>
  ) => {
    try {
      const res = await createCallback(newEntity);
      const newEntityAsColumn = await convertToColumnCallback(res);
      setData((prev) => [...prev, newEntityAsColumn]);
      return newEntityAsColumn;
    } catch (error) {
      throw error;
    }
  };

  const value = useMemo<EntityState<T, P>>(
    () => ({
      data,
      selectItemMap,
      onDelete: handleDelete,
      onEdit: handleEdit,
      onAdd: handleAdd,
    }),
    [data, selectItemMap]
  );

  return (
    <EntityContext.Provider value={value}>{children}</EntityContext.Provider>
  );
}

export function useEntityContext<T extends identifiers, P >(): EntityState<
  T,
  P
> {
  const context = useContext(EntityContext);

  if (context === undefined) {
    throw new Error("useEntityContext must be used within an EntityProvider");
  }

  return context as EntityState<T, P>;
}
