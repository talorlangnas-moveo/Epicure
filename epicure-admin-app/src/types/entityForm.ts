import { SelectItemOptions } from "@/utils/utilsFunctions";
import { Dispatch, SetStateAction } from "react";

export type FormMode = "create" | "update";

export interface WithId {
  _id: string;
}

export interface EntityFormProps<T extends WithId> {
  mode?: FormMode;
  entity?: T;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onEdit?: (entity: T, updatedData: Partial<T>) => Promise<T>;
  onAdd?: (data: Partial<T>) => Promise<T>;
  selectItemsMap?: SelectItemOptions[];
}

export type EntityForm<T extends WithId, TValue = any> = (props: EntityFormProps<T>) => React.ReactNode;