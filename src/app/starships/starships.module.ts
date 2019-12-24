import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import * as fromShips from './store/reducers/ships.reducer';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';

@NgModule({
  declarations: [ShipListComponent, ShipDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromShips.shipsFeatureKey, fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects])
  ],
  exports: [ShipListComponent]
})
export class StarshipsModule { }
