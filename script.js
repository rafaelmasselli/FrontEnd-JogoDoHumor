const botao = document.querySelector("#humor");
const enu = document.querySelector("#nucia");
let imagem = document.querySelector("#imagem1");

botao.addEventListener("click",function(){
    
    if (enu.innerHTML == "Morty puto") {
       imagem.src= "midia/A2.png";
       enu.innerHTML = "Morty Triste"


} else if(enu.innerHTML == "Morty Triste"){

        imagem.src = "midia/A3.png"
        enu.innerHTML = 'Morty besta'


} else if (enu.innerHTML == "Morty besta"){

        imagem.src= "midia/A4.png"
        enu.innerHTML ='Morty mafioso'



 }else if (enu.innerHTML == "Morty mafioso"){
        imagem.src = "midia/A1.png"
        enu.innerHTML ='Morty puto'
}});

