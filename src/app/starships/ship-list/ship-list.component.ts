import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromRoot from 'src/app/store/reducers/index';
import { Observable } from 'rxjs';
import { loadShips } from '../store/actions/ships.actions';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  starships$: Observable<string[]>;
  user$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.starships$ = this.store.select(fromStore.getAllShips);
    this.user$ = this.store.select(fromRoot.getFriendlyName);

    this.store.dispatch(loadShips());
  }
}
