import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { BuyItemService } from 'src/app/service/buy-item.service';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnDestroy {

  commentSource: MatTableDataSource<Comment> = new MatTableDataSource<Comment>();

  commentColumns: string[] = [
    'username',
    'date',
    'engine',
    'type',
    'Functions',
  ];

  pageSizeComment: number[] = [5, 10, 15];
  commentSubscription: Subscription = new Subscription;

  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;

  constructor(
    private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    this.commentSource.paginator = this.paginator;
    this.commentSubscription = this.commentService.getComment().subscribe(
      comments => this.commentSource.data = (comments as unknown as Comment[])
    );
  }

  ngOnDestroy(): void {
    this.commentSubscription.unsubscribe();
  };

}
