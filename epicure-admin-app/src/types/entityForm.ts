import { Dispatch, SetStateAction } from "react";
import {identifiers} from "@/utils/utilsFunctions";

export type FormMode = "create" | "update";

export interface WithId {
  _id: string;
}

export interface EntityFormProps<T extends identifiers> {
  mode?: FormMode;
  entity?: T;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // onEdit?: (entity: T, updatedData: Partial<T>) => Promise<T>;
  // onAdd?: (data: Partial<T>) => Promise<T>;
  // selectItemsMap?: identifiers[];
}

export type EntityForm<T extends identifiers, TValue = any> = (props: EntityFormProps<T>) => React.ReactNode;