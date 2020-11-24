//ここに処理をまとめて書く
//TODO 後でpublicをprivateに変える
export class ChangeBoard {
  public rows: ChangeRow[];
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new ChangeRow(i))
    this.rows[3].cells[3].state = ChangeState.White;
    this.rows[4].cells[4].state = ChangeState.White;
    this.rows[3].cells[4].state = ChangeState.Black;
    this.rows[4].cells[3].state = ChangeState.Black;
  }
}
export class ChangeRow {
  public cells: ChangeCell[];
  public number: number;
  constructor(rowNumber: number) {
    this.number = rowNumber
    this.cells = [...Array(8).keys()].map(i => new ChangeCell(i, rowNumber))
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

  public get isBlack() {
    return this.state === ChangeState.Black;
  }

  public get isWhite() {
    return this.state === ChangeState.White;
  }
}
export enum ChangeState {
  White = 'white',
  Black = 'black',
  None = 'none'
}