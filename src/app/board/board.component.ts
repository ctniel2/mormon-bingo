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
        this.ysaBingo[i] = {active: false, text: ""};
        this.ysaBingo[i].text = this.sourceBingo[i].ysa;
      }
    } else if (option == 2) {
      /*Newly-Married Board*/
      this.board = 'Married';
      for (var i = 0; i < this.marriedBingo.length; i++) {
        this.marriedBingo[i] = {active: false, text: ""};
        this.marriedBingo[i].text = this.sourceBingo[i].married;
      }
    } else if (option == 3) {
      /*Family Board*/
      this.board = 'Family';
      for (var i = 0; i < this.familyBingo.length; i++) {
        this.familyBingo[i] = {active: false, text: ""};
        this.familyBingo[i].text = this.sourceBingo[i].family;
      }
} else {
      /*reset*/
      this.board = '';
    }
  }

  activateSquare(selection) {
    if (this.board == 'YSA') {
      this.ysaBingo[selection].active = true;
      this.checkWinner();
    } else if (this.board == 'Married') {
      this.marriedBingo[selection].active = true;
      this.checkWinner();
    } else if (this.board == 'Family') {
      this.familyBingo[selection].active = true;
      this.checkWinner();
    }
  }

  deactivateSquare(selection) {
    if (this.board == 'YSA') {
      this.ysaBingo[selection].active = false;
    } else if (this.board == 'Married') {
      this.marriedBingo[selection].active = false;
    } else if (this.board == 'Family') {
      this.familyBingo[selection].active = false;
    }
  }

  resetBoard() {
    if (this.board == 'YSA') {
      for (var i = 0; i < this.ysaBingo.length; i++) {
        this.ysaBingo[i].active = false;
      }  
    } else if (this.board == 'Married') {
      for (var i = 0; i < this.marriedBingo.length; i++) {
        this.marriedBingo[i].active = false;
      }  
    } else if (this.board == 'Family') {
      for (var i = 0; i < this.familyBingo.length; i++) {
        this.familyBingo[i].active = false;
      }  
    }
}

checkWinner() {
  var win1 = [0,1,2,3,4];
  var win2 = [5,6,7,8,9];
  var win3 = [10,11,12,13,14];
  var win4 = [15,16,17,18,19];
  var win5 = [20,21,22,23,24];
  var win6 = [0,5,10,15,20];
  var win7 = [1,6,11,16,21];
  var win8 = [2,7,12,17,22];
  var win9 = [3,8,13,18,23];
  var win10 = [4,9,14,19,24];
  var win11 = [0,6,12,18,24];
  var win12 = [4,8,12,16,20];
  var check = [];

  if (this.board =='YSA') {
    for (var i = 0; i < this.ysaBingo.length; i++) {
      if (this.ysaBingo[i].active) {
        check.push(i);
      }
    }
    alert(check);
    alert(win1);
    if (win1 === check) {
      alert("I'm here!");
    }
    if (check === win1 || check == win2 || check == win3 || check == win4 || check == win5 || check == win6 || check == win7 || check == win8 || check == win9 || check == win10 || check == win11 || check == win12) {
      alert("You are winner!");
    }
  }

  if (this.board == 'Married') {
    for (var i = 0; i < this.marriedBingo.length; i++) {
      if (this.marriedBingo[i].active) {
        check.push(i);
      }
    }
    if (check == win1 || check == win2 || check == win3 || check == win4 || check == win5 || check == win6 || check == win7 || check == win8 || check == win9 || check == win10 || check == win11 || check == win12) {
      alert("You are winner!");
    }
  }

  if (this.board == 'Family') {
    for (var i = 0; i < this.familyBingo.length; i++) {
      if (this.familyBingo[i].active) {
        check.push(i);
      }
    }
    if (check == win1 || check == win2 || check == win3 || check == win4 || check == win5 || check == win6 || check == win7 || check == win8 || check == win9 || check == win10 || check == win11 || check == win12) {
      alert("You are winner!");
    }
  }
}

sourceBingo = [
  {
    "ysa": "Odd use of EVEN (\"...thy son EVEN Jesus Christ\")",
    "married": "Odd use of EVEN (\"...thy son EVEN Jesus Christ\")",
    "family": "Odd use of EVEN (\"...thy son EVEN Jesus Christ\")"
  },

  {
    "ysa": "The Moment of Silence (anything over 30 seconds)",
    "married": "The Moment of Silence (anything over 30 seconds)",
    "family": "The Moment of Silence (anything over 30 seconds)"
  },

   {
      "ysa": "Name Dropper (sure to mention a personal connection to a GA)",
      "married": "Name Dropper (sure to mention a personal connection to a GA)",
      "family": "Name Dropper (sure to mention a personal connection to a GA)"
    },

   {
      "ysa": "Mad dash for first place",
      "married": "Mad dash for first place",
      "family": "Mad dash for first place"
    },

   {
      "ysa": "We know you are single, stop mentioning it",
      "married": "The Arrangement (I'll go up if you go up)",
      "family": "The Arrangement (I'll go up if you go up)"
    },

   {
      "ysa": "\"I'm not sure what I'm supposed to say, but I wanted to come up here\"",
      "married": "\"I'm not sure what I'm supposed to say, but I wanted to come up here\"",
      "family": "\"I'm not sure what I'm supposed to say, but I wanted to come up here\""
    },

   {
      "ysa": "Travelogue",
      "married": "Travelogue",
      "family": "Travelogue"
    },

   {
      "ysa": "Bad Joke (usually told at the beginning and doesn't go over very well)",
      "married": "Bad Joke (usually told at the beginning and doesn't go over very well)",
      "family": "Bad Joke (usually told at the beginning and doesn't go over very well)"
    },

   {
      "ysa": "Too Much Information",
      "married": "Too Much Information",
      "family": "Too Much Information"
    },

   {
      "ysa": "\"On MY Mission... \"",
      "married": "\"On MY Mission... \"",
      "family": "\"On MY Mission... \""
    },

   {
      "ysa": "The Ugly Cry",
      "married": "The Ugly Cry",
      "family": "The Ugly Cry"
    },

   {
      "ysa": "\"...fiber of my being...\"",
      "married": "\"...fiber of my being...\"",
      "family": "\"...fiber of my being...\""
    },

   {
      "ysa": "\"I know this/the church is true.\" (FREE SPACE)",
      "married": "\"I know this/the church is true.\" (FREE SPACE)",
      "family": "\"I know this/the church is true.\" (FREE SPACE)"
    },

   {
      "ysa": "What-the-heck-are-you-doing-up-there-we're-already-ten-minutes-over",
      "married": "What-the-heck-are-you-doing-up-there-we're-already-ten-minutes-over",
      "family": "What-the-heck-are-you-doing-up-there-we're-already-ten-minutes-over"
    },

   {
      "ysa": "The Regular (wouldn't be a testimony meeting without them)",
      "married": "The Regular (wouldn't be a testimony meeting without them)",
      "family": "The Regular (wouldn't be a testimony meeting without them)"
    },

   {
      "ysa": "Elaborate Metaphor or Movie Comparison",
      "married": "Elaborate Metaphor or Movie Comparison",
      "family": "Elaborate Metaphor or Movie Comparison"
    },

   {
      "ysa": "The Visitor (although not in the ward, feels compelled to testify)",
      "married": "The Visitor (although not in the ward, feels compelled to testify)",
      "family": "The Visitor (although not in the ward, feels compelled to testify)"
    },

   {
      "ysa": "Surprisingly Good Joke",
      "married": "Surprisingly Good Joke",
      "family": "Surprisingly Good Joke"
    },

   {
      "ysa": "The Long Talker (goes over ten minutes)",
      "married": "The Long Talker (goes over ten minutes)",
      "family": "The Long Talker (goes over ten minutes)"
    },

   {
      "ysa": "Tender Mercies",
      "married": "Tender Mercies",
      "family": "Tender Mercies"
    },

   {
      "ysa": "Talking about getting someone's number",
      "married": "\"Marriage is hard\"",
      "family": "The Unaccompanied Minor"
    },

   {
      "ysa": "\"Exotic Utah\"",
      "married": "\"Exotic Utah\"",
      "family": "\"Exotic Utah\""
    },

   {
      "ysa": "Member of the bishopric falls asleep",
      "married": "Member of the bishopric falls asleep",
      "family": "Member of the bishopric falls asleep"
    },

   {
      "ysa": "\"I am so grateful for my roomates\"",
      "married": "Story of how they met their spouse",
      "family": "Accompanied Minor (prompted by the still small voice of a parent)"
    },

   {
      "ysa": "\"I say these things in the same of THY Son...\"",
      "married": "\"I say these things in the same of THY Son...\"",
      "family": "\"I say these things in the same of THY Son...\""
    }
  
]

}
