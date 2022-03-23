import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  squares: string[]=[];
  xIsNext: boolean=false;
  winner: string='';
  squares_covered:number[]=[];

  constructor(private snackbar:MatSnackBar) {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.squares_covered=[0,1,2,3,4,5,6,7,8];
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    console.log(idx)
    let index=this.squares_covered.indexOf(idx);
    if(index>-1){
      console.log("splice")
    this.squares_covered.splice(index,1);
    }
    console.log("squares_covered")
    console.log(this.squares_covered)
    if(this.winner=='')
    {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    if(this.winner=='')
    {
    this.winner = this.calculateWinner();
    }
  }
    if(this.winner!='')
    {
      this.snackbar.open("Player "+this.winner + " won the game!")._dismissAfter(3000);
    }
    if(this.squares_covered.length==0 && this.winner=='')
    {
      this.snackbar.open("Match Drawn!!")._dismissAfter(3000);
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }
}