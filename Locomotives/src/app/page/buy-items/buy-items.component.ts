import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buy-items',
  templateUrl: './buy-items.component.html',
  styleUrls: ['./buy-items.component.scss']
})
export class BuyItemsComponent implements OnInit {

  public buyItemForm: FormGroup = new FormGroup({
    
  })

  constructor() { }

  ngOnInit(): void {
  }

  buyItem() {

  }

  canselItem() {

  }

}
