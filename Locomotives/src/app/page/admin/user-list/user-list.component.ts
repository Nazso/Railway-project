import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  userSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  userColumns: string[] = [
    'username',
    'email',
    'role',
  ];

  pageSizeUser: number[] = [5, 10];
  userSubscription: Subscription = new Subscription;

  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userSource.paginator = this.paginator;
    this.userSubscription = this.userService.getUser().subscribe(
      users => this.userSource.data = (users as unknown as User[])
    );
  };

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  };


}
