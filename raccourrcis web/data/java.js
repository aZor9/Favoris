
//couleur


function couleurRandom() {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    let text = document.querySelector('#code');
    text.innerText = "#" + randomColor;
}

let couleurR = document.getElementById('buttonCouleurRandom');
couleurR.addEventListener ('click', couleurRandom);


function couleurBlanc() {
    document.body.style.backgroundColor = "#" + "FFFFFF";
    document.body.style.color = "#" + "191919";    
}

let couleurB = document.getElementById('buttonCouleurBlanc');
couleurB.addEventListener ('click', couleurBlanc);


function couleurNoir() {
    document.body.style.backgroundColor = "#" + "151515";
    document.body.style.color = "#" + "EEEEEE";    
}

let couleurN = document.getElementById('buttonCouleurNoir');
couleurN.addEventListener ('click', couleurNoir);


// document.body.style.color = "#" + "FFFFFF";

function openAdd() {
  document.getElementById("popupAdd").style.display="block";
}
function closeAdd() {
  document.getElementById("popupAdd").style.display="none";
}