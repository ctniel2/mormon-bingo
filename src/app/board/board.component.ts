import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board = '';
  ysaBingo = new Array(25);
  marriedBingo = new Array(25);
  familyBingo = new Array(25);

  constructor() { }

  ngOnInit() {
  }

  determineBoard(option) {
    if (option == 1) {
      /*YSA Board*/
      this.board = 'YSA';
      for (var i = 0; i < this.ysaBingo.length; i++) {
        this.ysaBingo[i] = {active: false};
      }
    } else if (option == 2) {
      /*Newly-Married Board*/
      this.board = 'Married';
      for (var i = 0; i < this.marriedBingo.length; i++) {
        this.marriedBingo[i] = {active: false};
      }
    } else if (option == 3) {
      /*Family Board*/
      this.board = 'Family';
      for (var i = 0; i < this.familyBingo.length; i++) {
        this.familyBingo[i] = {active: false};
      }
} else {
      /*reset*/
      this.board = '';
    }
  }

  activateSquare(selection) {
    this.ysaBingo[selection].active = true;
    this.marriedBingo[selection].active = true;
    this.familyBingo[selection].active = true;
  }

  deactivateSquare(selection) {
    this.ysaBingo[selection].active = false;
    this.marriedBingo[selection].active = false;
    this.familyBingo[selection].active = false;
  }

  resetBoard() {
    for (var i = 0; i < this.ysaBingo.length; i++) {
      this.ysaBingo[i].active = false;
    }
    for (var i = 0; i < this.marriedBingo.length; i++) {
      this.marriedBingo[i].active = false;
    }
    for (var i = 0; i < this.familyBingo.length; i++) {
      this.familyBingo[i].active = false;
    }
}

}
