import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { isNumber } from 'util';

import { editShip, createShip } from 'src/app/starships/store/actions/ships.actions';
import * as fromStore from 'src/app/starships/store';

@Component({
  selector: 'app-ship-modal',
  templateUrl: './ship-modal.component.html',
  styleUrls: ['./ship-modal.component.css']
})
export class ShipModalComponent implements OnInit, OnDestroy {

  @Input() shipId: number;
  @Output() closeWindow = new EventEmitter();

  private subscription: Subscription;

  shipName = '';
  shipModel = '';

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    if (isNumber(this.shipId)) {
      this.subscription = this.store.select(fromStore.getShipById, { shipId: this.shipId }).subscribe(res => {
        this.shipName = res.name;
        this.shipModel = res.model;
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private editShip() {
    this.store.dispatch(editShip({
      id: this.shipId,
      name: this.shipName,
      model: this.shipModel
    }));
    this.closeWindowHandler();
  }

  private createShip() {
    console.log('create ship');
    this.store.dispatch(createShip({
      name: this.shipName,
      model: this.shipModel
    }));
    this.closeWindowHandler();
  }

  closeWindowHandler() {
    this.closeWindow.emit();
  }

  saveButtonHadlerFactory() {
    isNumber(this.shipId) ? this.editShip() : this.createShip();
  }
}
