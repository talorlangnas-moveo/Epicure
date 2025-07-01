import { Chef } from "../interfaces/chef";

export type ChefColumn = Chef & {
    name: string;
    imgFile?: File;
}