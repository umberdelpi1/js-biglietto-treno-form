
var valoreUtente,valoreKM,valoreEta;

// input nome utente
var nomeUtente = document.getElementById('nome');

// input km utente
var kmUtente = document.getElementById('km');

// input eta utente
var etaUtente = document.getElementById('eta');

// input genera bottone
var bottonClick = document.getElementById('bottone_genera');

// input annulla bottone
var annullaBottone = document.getElementById('annulla');

// input bottone che scompare
var bottoneScompare = document.getElementById('contenitore_form_down_scompari');

// bottone che genera
var bottonClick = document.getElementById('bottone_genera');


// Click del bottone
bottonClick.addEventListener("click",

  function(){

    // Salvo i valori del click all'input
    valoreUtente = nomeUtente.value;
    valoreKM = kmUtente.value;
    valoreEta = etaUtente.value;
    bottoneScompare.style.display = "block";
    // costo biglietto senza sconto
    var bigliettoIntero = 0.21 * valoreKM;

    // variabile costo biglietto sconto Minorenni
    var bigliettoScontoMinorenni = (bigliettoIntero * 80) /100;

    // variabile costo biglietto sconto Anziani
    var bigliettoScontoAnziani = (bigliettoIntero * 60) /100;

    var bigliettoFinale;
    var opzione = "normale";

    // valori calcolo costo km eta biglietto ex precedente
    if (valoreEta == "opzione1"){
      bigliettoFinale = bigliettoScontoMinorenni;
      opzione = "Under18: 20% Sale";
    } else if (valoreEta == "opzione3"){
      bigliettoFinale = bigliettoScontoAnziani;
      opzione = "Over65: 40% Sale";
    } else {
      bigliettoFinale = bigliettoIntero;
      opzione = "Normal";
    }
    // stapa in console
    console.log(valoreUtente, valoreKM,opzione,bigliettoFinale);
    document.getElementById("box1").innerHTML = valoreUtente;
    document.getElementById("box2").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("box3").innerHTML = bigliettoFinale;
    document.getElementById("box4").innerHTML =opzione;
    document.getElementById("box5").innerHTML =Math.floor(Math.random() * 1000) + 1;
  }
)

annullaBottone.addEventListener("click",
  function(){
    valoreKM = "";
    valoreEta = "";
    valoreUtente = "";
    bottoneScompare.style.display = "none";
  }
)
