import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.css']
})
export class DiyComponent implements OnInit {
  hasId = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.hasId = !isNaN(+params['id']);
      }
    );
  }

}
