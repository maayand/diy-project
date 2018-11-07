import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

import { DiyService } from '../diy/diy.service';
import { Diy } from '../diy/diy.model';

@Injectable()

export class DataStorageService{
    
    constructor(private httpClient: HttpClient,
                private diyService: DiyService){}

    storeDiyProjects(){
        return this.httpClient.put('https://ng-diy-project.firebaseio.com/diys.json', this.diyService.getDiyProjects(), { observe: 'body'});
    }

    getDiyProjects(){
        this.httpClient.get<Diy[]>('https://ng-diy-project.firebaseio.com/diys.json')
           .map(
               (diys)=>{
                    for( let diy of diys){
                        if( !diy['materials']){
                            // console.log(diy);
                            diy['materials'] = [];
                        }
                    }
                    return diys;
                }
           )
            .subscribe(
                (diys: Diy[])=>{
                    this.diyService.setDiys(diys);
                }
            );
    }
}