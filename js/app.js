let arraySorteio = []

function adicionar(){
    let nomes = document.getElementById('nome-amigo').value;
    if(nomes == ''){
        alert('Informe um nome!!')
        return;
    }
    if(arraySorteio.includes(nomes)){
        alert('Nome ja adicionado!!')
        return;
    }
   
    let lista = document.getElementById('lista-amigos')
    arraySorteio.push(nomes)
   
   if (lista.textContent == '') {
    lista.textContent = nomes
   } else {
    lista.textContent = lista.textContent + `, ${nomes} `
   }
   document.getElementById('nome-amigo').value = '';
}



function sortear() {
    if(arraySorteio.length < 4){
        alert('Adicione pelo menos 4 amigos!')
        return;
    }
    embaralha(arraySorteio)
    let sorteio = document.getElementById('lista-sorteio')
    for(let i = 0; i < arraySorteio.length ; i++ )

    if( i == arraySorteio.length -1 ) {
        sorteio.innerHTML =sorteio.innerHTML + arraySorteio[i] + '-->' + arraySorteio[0] + '<br>';
    } else {
        sorteio.innerHTML =sorteio.innerHTML + arraySorteio[i] + '-->' + arraySorteio[i + 1] + '<br>';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    arraySorteio = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}