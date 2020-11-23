//ここに処理をまとめて書く
//TODO 後でpublicをprivateに変える
export class Board {
  public rows: Row[];
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i))
  }
}
export class Row {
  public cells: Cell[];
  constructor(number: number) {
    this.cells = [...Array(8).keys()].map(i => new Cell(i, number))
  }
}
export class Cell {
  public x: number;
  public y: number;
  public state: State = State.None;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
export enum State {
  White = 'white',
  Black = 'black',
  None = 'none'
}