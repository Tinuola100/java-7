window.onload = rollTheDice;

function rollTheDice(){
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;
  const firstDiceImage = `images/dice${firstRandomNum}.png`;

  const secondRandomNum = Math.floor(Math.random() * 6) + 1;
  const secondDiceImage = `images/dice${secondRandomNum}.png`;

  document.getElementsByClassName("img1")[0].setAttribute('src', firstDiceImage);
  document.getElementsByClassName("img2")[0].setAttribute('src', secondDiceImage);


if (firstDiceImage > secondDiceImage) {
  document.getElementsByTagName("h1")[0].textContent = "Player 1 wins";
}

else if (firstDiceImage < secondDiceImage) {
  document.getElementsByTagName("h1")[0].textContent = "Player 2 wins";
}

else {
  document.getElementsByTagName("h1")[0].textContent = "It's a draw";

}
}