// pulsante
var invia = document.getElementById("invia");

// array
var valide = ['gigietto12@gmail.com', 'gianpierpaolino@marta.dr', 'nome@mail.it', 'franco@libero.it'];
document.getElementById("valide").innerHTML = valide;

// evento
invia.addEventListener("click", function () {

  // input email
  var email = document.getElementById("email").value;
  var risposta;
  
  // verifica corrispondenza della mail
  for (var i = 0; i < valide.length; i++) {
    if (email === valide[i]) {
      risposta = "L'email inserita corrisponde!";
    }
  }

  if (!risposta) {
    risposta = "L'email inserita è sbagliata";
  }

  document.getElementById("risposta").innerHTML = risposta;
});
