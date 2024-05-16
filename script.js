let br = document.querySelector("#brl");
let us = document.querySelector("#usd");

let cambio = 5.15; // taxa  de cambio.
let real; //value campo real.
let dolar;

let realFormated = '';
let dolarFormated; //armazena o valor convertido em dolar.

br.addEventListener("keyup", ()=>{
    conversorBrl();
})

us.addEventListener("keyup", ()=>{
    conversorUsd();
})

const conversorBrl = () => {
    real = parseInt(br.value);

    if(real) {
        dolarFormated = (real / cambio);

        dolarFormated = dolarFormated.toLocaleString('en-US', { // toLocalString para formatar o price.
            style: 'currency',
            currency: 'USD'
        });
        
        us.value = dolarFormated;
    } else {
        us.value = "";
    }
}


const conversorUsd = () => {
    dolar = parseInt(us.value);

    if(dolar) {
        realFormated = (dolar  * cambio);
 
        br.value = realFormated.toLocaleString('pt-BR', { // toLocalString para formatar o price.
            style: 'currency',
            currency: 'BRL'
        });
    } else {
        br.value = "";
    }
}

