import { Material } from '../shared/material.model';
import { Subject } from 'rxjs/Subject';

export class MaterialListService{

    materialChanged = new Subject<Material[]>();
    startedEditing = new Subject <number>();
    
    private materials:  Material[] =[];
    
    getMaterials(){
        return this.materials.slice();
    }
    
    getMaterial(index: number){
        return this.materials[index];
    }
    
    addMatirialsToMatirialList(newMaterials: Material[]) {
        for(const newMaterial of newMaterials) {
            let haveExsitingMaterial = false;
            for(const exsitingMaterial of this.materials) {
                if (exsitingMaterial['name'] === newMaterial['name']) {
                    haveExsitingMaterial = true;
                    exsitingMaterial['amount'] += newMaterial.amount;
                }
            }
            if(!haveExsitingMaterial) {
                this.materials.push(newMaterial);
            }
        }
        return this.materials
    }
    addMaterial(newMaterial: Material){
        this.addMatirialsToMatirialList([newMaterial]);
        this.materialChanged.next(this.materials.slice());
    }
    addMaterials(materials: Material[]){
        this.addMatirialsToMatirialList(materials);
        this.materialChanged.next(this.materials.slice());
    }
    updateMaterial(index: number, newMaterial: Material){
        this.materials[index] = newMaterial;
        this.materialChanged.next(this.materials.slice());
    }
    deleteMaterial(index: number){
        this.materials.splice(index, 1);
        this.materialChanged.next(this.materials.slice());
    }
}