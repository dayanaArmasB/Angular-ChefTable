import { Categoria } from "./Categoria";

export class Producto{
    id!: number;
    nombre!: string;
    precio!: number;
    cantidad!:number;
    categoria!: Categoria;
}