import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CommentsComponent } from '../page/comments/comments.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentDeactivateGuardService implements CanDeactivate<CommentsComponent> {

  constructor() { }

  canDeactivate(component: CommentsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(component.commentForm.dirty && component.commentForm.value) {

      return confirm('Would you like to live this page?') ? true : false;

    }

    return true;
  }
}
