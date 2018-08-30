import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board = '';

  constructor() { }

  ngOnInit() {
  }

  determineBoard(option) {
    if (option == 1) {
      /*YSA Board*/
      this.board = 'YSA';
    } else if (option == 2) {
      /*Newly-Married Board*/
      this.board = 'Married';
    } else if (option == 3) {
      /*Family Board*/
      this.board = 'Family';
    } else {
      /*reset*/
      this.board = '';
    }
  }

}
