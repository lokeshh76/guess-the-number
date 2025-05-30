// let a = Math.round(Math.random() * 50);
let a = Math.round(Math.random() * 10);
let b = prompt("enter your guess (0 to 10): ");
if (b == null) {
  alert("you cancelled the game");
} else {
  for (let i = 4; i >= 0; i--) {
    if (i < 1) {
      alert("No attempts left");
      break;
    } else if (isNaN(Number(b))) {
      b = prompt(
        "your guess isnot valid. enter a new guess (0 to 10) " +
          "[attempts left :" +
          i +
          "]"
      );
    } else if (b == a) {
      alert("you won the game.");
      break;
    } else if (b == null) {
      alert("you cancelled the game");
      break;
    } else if (b < a) {
      b = prompt("guess higher (0 to 10)" + " [attempts left: " + i + "]");
    } else if (b > a) {
      b = prompt("guess lower (0 to 10)" + "[attempts left: " + i + "]");
    }
  }
}
