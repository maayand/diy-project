import { Component, OnInit, Input } from '@angular/core';
import { Diy } from '../../diy.model';

@Component({
  selector: 'app-diy-item',
  templateUrl: './diy-item.component.html',
  styleUrls: ['./diy-item.component.css']
})
export class DiyItemComponent implements OnInit {

  @Input() project: Diy;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }
}
