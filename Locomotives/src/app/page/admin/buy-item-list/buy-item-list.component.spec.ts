import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemListComponent } from './buy-item-list.component';

describe('BuyItemListComponent', () => {
  let component: BuyItemListComponent;
  let fixture: ComponentFixture<BuyItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
