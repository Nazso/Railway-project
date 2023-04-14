import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { BuyItemsComponent } from './page/buy-items/buy-items.component';
import { CommentsComponent } from './page/comments/comments.component';
import { DetailsComponent } from './page/details/details.component';
import { DieselComponent } from './page/diesel/diesel.component';
import { ElectricComponent } from './page/electric/electric.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CanActivateGuardService } from './service/can-activate-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dízel', component: DieselComponent, canActivate: [CanActivateGuardService] },
  { path: 'villamos', component: ElectricComponent, canActivate: [CanActivateGuardService] },
  { path: 'komment', component: CommentsComponent },
  { path: 'vásárlás', component: BuyItemsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'részletek/:id', component: DetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
