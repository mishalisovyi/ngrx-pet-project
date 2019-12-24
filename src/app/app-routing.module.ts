import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipListComponent } from './starships/ship-list/ship-list.component';
import { ShipDetailComponent } from 'src/app/starships/ship-detail/ship-detail.component';


const routes: Routes = [
  { path: '', component: ShipListComponent },
  { path: 'detail/:shipId', component: ShipDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
