//ここに処理をまとめて書く
//TODO 後でpublicをprivateに変える
export class ChangeBoard {
  public rows: ChangeRow[];
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new ChangeRow(i))
  }
}
export class ChangeRow {
  public cells: ChangeCell[];
  constructor(number: number) {
    this.cells = [...Array(8).keys()].map(i => new ChangeCell(i, number))
  }
}
export class ChangeCell {
  public x: number;
  public y: number;
  public state: ChangeState = ChangeState.None;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
export enum ChangeState {
  White = 'white',
  Black = 'black',
  None = 'none'
}