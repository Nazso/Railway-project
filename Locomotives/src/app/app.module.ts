import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

//Material components
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { DieselComponent } from './page/diesel/diesel.component';
import { ElectricComponent } from './page/electric/electric.component';
import { CommentsComponent } from './page/comments/comments.component';
import { BuyItemsComponent } from './page/buy-items/buy-items.component';
import { AdminComponent } from './page/admin/admin.component';
import { CommentListComponent } from './page/admin/comment-list/comment-list.component';
import { BuyItemListComponent } from './page/admin/buy-item-list/buy-item-list.component';
import { UserListComponent } from './page/admin/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BuyItemsComponent,
    CommentsComponent,
    DieselComponent,
    ElectricComponent,
    HomeComponent,
    CommentListComponent,
    BuyItemListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
