import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  visible: string = '';

  userVisibility():void {
    this.visible = 'user'
  };

  commentVisibility(): void {
    this.visible = 'comment'
  };

  buyItemVisibility(): void {
    this.visible = 'buyItem'
  };

  allVisibility(): void {
    this.visible = 'all'
  };

  constructor() { }

  ngOnInit(): void {
    
  };
}
