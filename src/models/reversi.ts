//ここに処理をまとめて書く
export class Board {
  rows: Row[];
  //初期値は黒のターン
  turn: ChangeState = ChangeState.Black;
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i))
    this.rows[3].cells[3].state = ChangeState.White;
    this.rows[4].cells[4].state = ChangeState.White;
    this.rows[3].cells[4].state = ChangeState.Black;
    this.rows[4].cells[3].state = ChangeState.Black;
  }

  put(x: number, y: number) {
    //すでに石をおいてあるところには何もしない
    if (!this.rows[y].cells[x].isNone) {
      return
    }
    this.rows[y].cells[x].state = this.turn;
    if(this.turn === ChangeState.Black) {
      this.turn = ChangeState.White
    } else {
      this.turn = ChangeState.Black
    }
  }
}
export class Row {
  cells: Cell[];
  number: number;
  constructor(rowNumber: number) {
    this.number = rowNumber
    this.cells = [...Array(8).keys()].map(i => new Cell(i, rowNumber))
  }
}
export class Cell {
  x: number;
  y: number;
  state: ChangeState = ChangeState.None;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get isBlack(): boolean {
    return this.state === ChangeState.Black;
  }

  get isWhite(): boolean {
    return this.state === ChangeState.White;
  }

  get isNone(): boolean {
    return this.state === ChangeState.None;
  }
}
export enum ChangeState {
  White = 'white',
  Black = 'black',
  None = 'none'
}