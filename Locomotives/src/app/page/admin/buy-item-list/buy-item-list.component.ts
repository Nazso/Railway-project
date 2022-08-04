import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BuyItem } from 'src/app/models/buyItem.model';
import { BuyItemService } from 'src/app/service/buy-item.service';

@Component({
  selector: 'app-buy-item-list',
  templateUrl: './buy-item-list.component.html',
  styleUrls: ['./buy-item-list.component.scss']
})
export class BuyItemListComponent implements OnInit, OnDestroy {

  itemSource: MatTableDataSource<BuyItem> = new MatTableDataSource<BuyItem>();

  buyItemColumns: string[] = [
    'username',
    'type',
    'little',
    'middle',
    'big',
    'price',
  ];

  pageSizeBuyItem: number[] = [5, 10, 15];
  buyItemSubscription: Subscription = new Subscription;

  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;

  constructor(
    private buyItemService: BuyItemService
  ) { }

  ngOnInit(): void {
    this.itemSource.paginator = this.paginator;
    this.buyItemSubscription = this.buyItemService.getItems().subscribe(
      items => this.itemSource.data = (items as unknown as BuyItem[])
    );
  }

  ngOnDestroy(): void {
    this.buyItemSubscription.unsubscribe();
  };

}
