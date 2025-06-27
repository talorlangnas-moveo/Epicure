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
}

export type EntityForm<T extends identifiers> = (props: EntityFormProps<T>) => React.ReactNode;