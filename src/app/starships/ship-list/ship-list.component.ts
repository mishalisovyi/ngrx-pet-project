import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromRoot from 'src/app/store/reducers/index';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { loadShips, deleteShip } from '../store/actions/ships.actions';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  starships$: Observable<string[]>;
  user$: Observable<string>;
  showWindow = false;
  shipIdForEdit: number;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.starships$ = this.store.select(fromStore.getAllShips)
      .pipe(
        tap(ships => {
          if (!ships.length) {
            this.store.dispatch(loadShips());
          }
        }),
        filter(ships => ships !== null)
      );
    this.user$ = this.store.select(fromRoot.getFriendlyName);
  }

  deleteShip(id: number) {
    this.store.dispatch(deleteShip({ id }));
  }

  handleCloseWindow() {
    this.showWindow = false;
    this.shipIdForEdit = null;
  }

  editShip(id: number) {
    this.shipIdForEdit = id;
    this.showWindow = true;
  }

  addShip() {
    this.showWindow = true;
  }

  loadShips() {
    this.store.dispatch(loadShips());
  }
}
