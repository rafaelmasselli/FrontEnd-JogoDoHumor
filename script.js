const botao = document.querySelector("#humor");
const enu = document.querySelector("#nucia");
let imagem = document.querySelector("#imagem1");
var contador = 0;

botao.addEventListener("click",function(){
    
 if (contador === 10){
 
     imagem.src = "midia/Evil.png"
     enu.innerHTML = 'Morty Evil'

contador ++  

}
    if (enu.innerHTML == "Morty puto") {
       imagem.src= "midia/A2.png";
       enu.innerHTML = "Morty Triste"

contador++


} else if(enu.innerHTML == "Morty Triste"){

        imagem.src = "midia/A3.png"
        enu.innerHTML = 'Morty besta'

 contador++


} else if (enu.innerHTML == "Morty besta"){

        imagem.src= "midia/A4.png"
        enu.innerHTML ='Morty mafioso'

contador++


 }else if (enu.innerHTML == "Morty mafioso"){

        imagem.src = "midia/A1.png"
        enu.innerHTML ='Morty puto'

contador++

}else if (contador == 11){

        imagem.src = "midia/Evil.png"
        enu.innerHTML = 'Morty Triste'
}
});

