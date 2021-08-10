let tabela = document.getElementById('tabela')
//Função de criação da tabela : 
function criarTabela(t,c){
    for(let i=0; i < t; i ++){
        let torre = document.createElement('div')
        torre.classList.add('torre')
        tabela.appendChild(torre)
        for(let n=0; n < c; n ++){
            let celula = document.createElement('div')
            celula.classList.add('celula')
            torre.appendChild(celula)
            celula.setAttribute('dataaddress',`${i},${n}`)
        }
    }
    
}

criarTabela(7,6)

let torrePreta = document.getElementById('torreCorPreta')
let torreVermelha = document.getElementById('torreCorVermelha')
let bolaPreta
let bolaVermelha
for(let i=0;i<21;i++){
    bolaPreta = document.createElement('div')
    bolaPreta.classList.add('horizontal','black')
    torrePreta.appendChild(bolaPreta)
}

for(let i=0;i<21;i++){
    bolaVermelha = document.createElement('div')
    bolaVermelha.classList.add('horizontal','red')        
    torreVermelha.appendChild(bolaVermelha)
}


let primeiroJogador = true;
let segundoJogador = false;

//Movimento:
tabela.addEventListener('click',function(e){
    
    let filhos = e.target.parentElement.children
    
    let vago = Array.from(filhos).filter((e)=>e.innerHTML==="")
    console.log(vago[0].classList[0])
    let cont = vago.length
    if(primeiroJogador===true && vago[0].classList[0]==="celula") {
        
        let bolap = torrePreta.lastElementChild
        bolap.classList.remove('horizontal');
        bolap.classList.add('vertical');
        vago[vago.length-1].appendChild(bolap);
        
    }
    if(segundoJogador===true  && vago[0].classList[0]==="celula"){
       
        let bolav = torreVermelha.lastElementChild
        bolav.classList.remove('horizontal');
        bolav.classList.add('vertical');
        vago[vago.length-1].appendChild(bolav);
        
    }
    
    if(primeiroJogador===true){

        primeiroJogador=false;
        segundoJogador=true;

    } else {

        primeiroJogador=true;
        segundoJogador=false;

    }
    
    console.log(vago.length)
})



