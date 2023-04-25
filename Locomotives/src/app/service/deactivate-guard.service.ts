import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from '../page/login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<LoginComponent> {

  constructor() { }

  canDeactivate (component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(component.loginForm.dirty && component.loginForm.value) {

      return confirm('Would you like to live this page?') ? true : false;

    }

    return true;
  }
  

}
