import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipModalComponent } from './ship-modal.component';

describe('ShipModalComponent', () => {
  let component: ShipModalComponent;
  let fixture: ComponentFixture<ShipModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
