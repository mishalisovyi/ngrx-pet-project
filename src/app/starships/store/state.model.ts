export interface State {
  allShips: Array<any>;
}

export interface StarShip {
  [key: string]: any;
}

export interface CreateShipModel {
  name: string;
  model: string;
}

export type EditShipModel = CreateShipModel & { id: number };
