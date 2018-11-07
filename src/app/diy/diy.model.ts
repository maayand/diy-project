import { Material } from '../shared/material.model';
export class Diy{
    constructor( public name: string, public description: string, public imgPath: string, public materials: Material[], public instructions: string){}
}