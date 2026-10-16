
//partie du CHOISISSEZ VOTRE FORMAT
let boutonPlus = document.getElementById("btnPlus");
let boutonMoins = document.getElementById("btnMoin");

let value = 1;

// plus 
boutonPlus.onclick = function() {
    value++;
    document.getElementById("quantite").textContent = value;
};

// moins
boutonMoins.onclick = function() {
    value--;
    document.getElementById("quantite").textContent = value;
};
