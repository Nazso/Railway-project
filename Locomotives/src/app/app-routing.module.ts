import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { BuyItemsComponent } from './page/buy-items/buy-items.component';
import { CommentsComponent } from './page/comments/comments.component';
import { DieselComponent } from './page/diesel/diesel.component';
import { ElectricComponent } from './page/electric/electric.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dízel', component: DieselComponent },
  { path: 'villamos', component: ElectricComponent },
  { path: 'komment', component: CommentsComponent },
  { path: 'vásárlás', component: BuyItemsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
