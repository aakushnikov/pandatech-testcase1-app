import { IAnimal } from "./animal.interface";

export interface IAnimalsOut
{
    get animals(): IAnimal[];
    get page(): number;
    get limit(): number;
    get total(): number;
}