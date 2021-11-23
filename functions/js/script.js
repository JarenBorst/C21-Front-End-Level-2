let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  __je wilt het duidelijk maken dat het om een tekst gaat__ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype __integer__ waarom? __om het uidelijk maken dat het om getallen gaat__ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? __in javascript moet je een variable eerst declareren__ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen __17__ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de __onclick__ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde __pointing device__ de waarde noemen we een __Any__ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __melding__ op het scherm met de tekst __Je naam__ deze tekst staan op regel __17__ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? __Nope__ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? __ze verstoppen de foto__ en waar wordt deze in je HTML aangeroepen? __23__ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML __25__ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? __Returns a reference to the first object with the specified value of the ID attribute__ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___als je op de foto klikt wod er een foto aangetoond__ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen __32__ en wanneer wordt deze aangeroepen __als je op de button klikt__ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan __integer__ en waar komt de waarde van getal vandaan? __3__ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? __Returns the first element that is a descendant of node that matches selectors.__  Wat is antwoord hier? 8 vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __er word plus 3 gedaan__ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __dan word het niet meer plus 3 maar min het getal dat jij hebt gekozen__ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen __44__ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan __setColor__ en waar komt de waarde van kleur vandaan? __styleColor__ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? __Style.FontSize__ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? __de kleur en grote van de tekst word veranderd__ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven __je geeft aan dat het een tekst is__ en wanneer gebeurt dat __als je op de button klikt__ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? __er gebeurt helemaal niks__ vul je antwoord in op de lijn.