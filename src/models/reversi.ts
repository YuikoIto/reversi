//ここに処理をまとめて書く
export class Board {
  rows: Row[];
  //初期値は黒のターン
  turn: CellState = CellState.Black;
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i))
    this.rows[3].columns[3].state = CellState.White;
    this.rows[4].columns[4].state = CellState.White;
    this.rows[3].columns[4].state = CellState.Black;
    this.rows[4].columns[3].state = CellState.Black;
  }

  put(x: number, y: number) {
    //すでに石をおいてあるところには何もしない
    if (!this.rows[y].columns[x].isNone) {
      return
    }
    this.rows[y].columns[x].state = this.turn;
    if(this.turn === CellState.Black) {
      this.turn = CellState.White
    } else {
      this.turn = CellState.Black
    }
  }

  //参照するcellの座標を返す
  reference(p: Point): Cell {
    return this.rows[p.y].columns[p.x]
  }

  search(p: Point): Point[] {
    const now = this;
    const _search = (_p: Point, next: (pre: Point) => Point, list: Point[]): Point[] => {
      const _next = next(_p);
      if (!_next.inBoard || now.reference(_next).isNone) {
        return [];
      }
      //自分の色とは違うとき
      if (now.reference(_next).state !== now.turn) {
        list.push(_next);
        return _search(_next, next, list);
      }
      return list; 
    }
    let result: Point[] = [];
    result = result.concat(_search(p, p => new Point(p.x, p.y + 1), []));
    result = result.concat(_search(p, p => new Point(p.x, p.y - 1), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y + 1), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y - 1), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y + 1), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y - 1), []));
    return result; 
  }
}

//座標をまとめたもの
export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  //盤の中に座標があることを確認する
  get inBoard() {
    return 0 <= this.x && this.x <= 7 && this.y && this.y <= 7
  }
}
export class Row {
  columns: Cell[];
  number: number;
  constructor(rowNumber: number) {
    this.number = rowNumber
    this.columns = [...Array(8).keys()].map(i => new Cell(i, rowNumber))
  }
}
export class Cell {
  x: number;
  y: number;
  state: CellState = CellState.None;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get isBlack(): boolean {
    return this.state === CellState.Black;
  }

  get isWhite(): boolean {
    return this.state === CellState.White;
  }

  get isNone(): boolean {
    return this.state === CellState.None;
  }
}
export enum CellState {
  White = 'white',
  Black = 'black',
  None = 'none'
}