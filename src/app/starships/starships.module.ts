import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromShips from './store/reducers/ships.reducer';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';

@NgModule({
  declarations: [ShipListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromShips.shipsFeatureKey, fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects])
  ]
})
export class StarshipsModule { }
