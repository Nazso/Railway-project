import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuyItemService } from 'src/app/service/buy-item.service';

@Component({
  selector: 'app-buy-items',
  templateUrl: './buy-items.component.html',
  styleUrls: ['./buy-items.component.scss']
})
export class BuyItemsComponent implements OnInit {

  public buyItemForm: FormGroup = new FormGroup({
    // id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])    
  })

  constructor(
    private buyItemService: BuyItemService
  ) { }

  ngOnInit(): void {
  }

  buyItem() {

    console.log(this.buyItemForm.value);
    this.buyItemService.saveBuyItem(this.buyItemForm.value).subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {this.buyItemForm.reset()},
    })
    alert('This function has not implemented yet!');

  }

  canselItem() {

    alert('This function has not implemented yet!');
    this.buyItemForm.reset();
    history.back();
  }

}
