let tilte = document.querySelector(".title");

let turn = "X";
let squares = [];
let WinnerChanges = (s1, s2, s3) => {
  tilte.innerHTML = `${squares[s1]} Is The WINNER`;
  document.getElementById("item" + s1).style.background = "#4f5b6d";
  document.getElementById("item" + s2).style.background = "#4f5b6d";
  document.getElementById("item" + s3).style.background = "#4f5b6d";

  setInterval(() => {
    tilte.innerHTML += ".";
  }, 1000);

  setTimeout(() => {
    location.reload();
  }, 4000);
};
let winner = () => {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  //   First Row
  if (
    squares[1] === squares[2] &&
    squares[2] === squares[3] &&
    squares[1] !== ""
  ) {
    WinnerChanges(1, 2, 3);
  }

  //   Secand Row
  if (
    squares[4] === squares[5] &&
    squares[5] === squares[6] &&
    squares[4] !== ""
  ) {
    WinnerChanges(4, 5, 6);
  }
  //   third Row

  if (
    squares[7] === squares[8] &&
    squares[8] === squares[9] &&
    squares[7] !== ""
  ) {
    WinnerChanges(7, 8, 9);
  }

  //   First column
  if (
    squares[1] === squares[4] &&
    squares[4] === squares[7] &&
    squares[1] !== ""
  ) {
    WinnerChanges(1, 4, 7);
  }

  //   Secand column
  if (
    squares[2] === squares[5] &&
    squares[5] === squares[8] &&
    squares[2] !== ""
  ) {
    WinnerChanges(2, 5, 8);
  }
  //   third column

  if (
    squares[3] === squares[6] &&
    squares[6] === squares[9] &&
    squares[3] !== ""
  ) {
    WinnerChanges(3, 6, 9);
  }

  //   First corss
  if (
    squares[1] === squares[5] &&
    squares[5] === squares[9] &&
    squares[1] !== ""
  ) {
    WinnerChanges(1, 5, 9);
  }

  //   Secand cross
  if (
    squares[3] === squares[5] &&
    squares[5] === squares[7] &&
    squares[3] !== ""
  ) {
    WinnerChanges(3, 5, 7);
  }
};

let game = (id) => {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    tilte.innerHTML = "It's O Turn";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    tilte.innerHTML = "It's X Turn";
  }
  winner();
};
