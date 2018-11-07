import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Diy } from '../diy.model';
import { DiyService } from '../diy.service';

@Component({
  selector: 'app-diy-list',
  templateUrl: './diy-list.component.html',
  styleUrls: ['./diy-list.component.css']
})
export class DiyListComponent implements OnInit, OnDestroy {
  diyProjects: Diy[];
  subscription: Subscription;
  filteredCategory = '';

  constructor( private diyService : DiyService,
               private router: Router,
               private route : ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.diyService.diyPojectsChanged
      .subscribe(
        (diyProjects: Diy[])=>{
          this.diyProjects = diyProjects;
        }
      );
      this.diyProjects = this.diyService.getDiyProjects();
  }
  onNewDiy(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
