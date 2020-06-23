
document.getElementById("btn").addEventListener("click", function () {

  var giocatore = Math.floor(Math.random() * 6);
  var cpu = Math.floor(Math.random() * 6);

  document.getElementById("d-giocatore").innerHTML = giocatore;
  document.getElementById("d-cpu").innerHTML = cpu;
  var risposta;

  if (giocatore > cpu) {
    risposta = "Hai vinto! Il tuo numero è piu' alto";
  } else if (cpu > giocatore) {
    risposta = "Ha vinto il pc :("
  } else if (giocatore = cpu){
    risposta = "Pareggio!"
  }

  document.getElementById("winner").innerHTML = risposta;

});
