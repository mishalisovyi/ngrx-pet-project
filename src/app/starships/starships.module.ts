import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as fromShips from './store/reducers/ships.reducer';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';
import { ShipModalComponent } from './ship-modal/ship-modal.component';

@NgModule({
  declarations: [ShipListComponent, ShipDetailComponent, ShipModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(fromShips.shipsFeatureKey, fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects])
  ],
  exports: [ShipListComponent]
})
export class StarshipsModule { }
