var rollButton = document.getElementById("roll");
rollButton.addEventListener("click", function() {
  var player1Image = document.querySelector(".mini-con1 img");
  var player2Image = document.querySelector(".mini-con2 img");
  var player1Number = Math.floor(Math.random() * 6) + 1;
  var player2Number = Math.floor(Math.random() * 6) + 1;
  var h2Element = document.querySelector("h2.h2");


  player1Image.src = "image/" + player1Number + ".png";
  player2Image.src = "image/" + player2Number + ".png";

  if (player1Number < player2Number) {
    document.querySelector('.h1.').textContent = "🎉Player 1 wins! 🎉";
    document.querySelector('.mini-con2 .heading').textContent = "Player 1";
  } else if (player2Number > player1Number) {
    document.querySelector('.h1').textContent = "🎉Player 2 wins! 🎉";
    document.querySelector('.mini-con1 .heading').textContent = "Player 2";
  } else {
    document.querySelector('.h1').textContent = "🎈 Oops!It's a draw! 🎈";
    document.querySelector('.mini-con2 .heading').textContent = "Player 2";
  }
  var h2Element = document.querySelector("h2.h2");

  h2Element.textContent = "🙆It's ok! 🙆";
  
 
});


var x= document.getElementById("roll");
x.addEventListener("click",makesound);
function makesound()
{

    var audio=new Audio('a.mp3');
    audio.play();
}
