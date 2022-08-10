import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, firstValueFrom, Subscription } from 'rxjs';
import { CommentsService } from 'src/app/service/comments.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment$?: Observable<Comment | Comment[]>;
  engines: string[] = ['Dízel', 'Villamos'];
  private saveCommentSubscription?: Subscription;

  public commentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    usercomment: new FormControl('', [Validators.required])
  });

  constructor(
    private commentsService: CommentsService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.comment$ = this.ar.params.pipe(
      switchMap(params => (this.commentsService.get(params['id']) as unknown as Observable<Comment>))
    )
  }

  // async onSubmit(ngForm: NgForm, comment: Comment): Promise<any> {
  //   console.log(ngForm.value)
  //   await this.commentsService.put(comment._id, ngForm.value).toPromise();
  //   return history.back();
  // }

  public saveComment() {
    console.log(this.commentForm.value)
    const observable = this.commentsService.saveComment(this.commentForm.value);
    this.saveCommentSubscription = observable.subscribe({
      next: (data) => {console.log(data)},
      error: (err) => {console.log(err)},
      complete: () => {
        this.commentForm.reset()
      }
    })
  };

  public cancelComment() {
    this.commentForm.reset()
    history.back()
  };

}
