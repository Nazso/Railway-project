import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BuyItemsComponent } from '../page/buy-items/buy-items.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyitemDeactivateGuardService implements CanDeactivate<BuyItemsComponent> {

  constructor() { }

  canDeactivate(component: BuyItemsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(component.buyItemForm.dirty && component.buyItemForm.value) {

      return confirm('Would you like to live this page?') ? true : false;

    }

    return true;
  }

}
