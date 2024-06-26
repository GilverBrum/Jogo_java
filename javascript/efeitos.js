var findnumber = null;
var jogadas = 0;

function sortearNumero() {
    findnumber = parseInt(Math.random()*100);
    
    console.log(findnumber);
}

function checarnumero() {
    var tentativa = document.getElementById('tentativa').value;

    if (tentativa < 1 || tentativa > 100){
        alert('Tentativa Inválida!');
        return
    }

    else if (tentativa > findnumber){
        
        jogadas++;
        alert('Tente um valor menor!');

    }

    else if (tentativa < findnumber){
        
        jogadas++;
        alert('Tente um valor maior!');
    }

    else{ 
        alert('Acertou Mizeravi! Depois de '+jogadas+' erros');

    }


}

function updategame(){
    sortearNumero()
}


