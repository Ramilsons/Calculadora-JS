//valores
const btn0 = document.querySelector(".btn-0")
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector(".btn-3")
const btn4 = document.querySelector(".btn-4")
const btn5 = document.querySelector(".btn-5")
const btn6 = document.querySelector(".btn-6")
const btn7 = document.querySelector(".btn-7")
const btn8 = document.querySelector(".btn-8")
const btn9 = document.querySelector(".btn-9")

//operações 
const soma = document.querySelector(".btn-soma")
const sub = document.querySelector(".btn-sub")
const multiplica = document.querySelector(".btn-multiplica")
const divide = document.querySelector(".btn-divide")

//outros
const clear = document.querySelector(".btn-clear")
const visor = document.querySelector(".visor")
const igual = document.querySelector(".btn-igual")
const btnHistorico = document.querySelector(".historico")
const modal = document.querySelector(".modal")
const btnFecharModal = document.querySelector(".close-modal")
const espacamento_modal = document.querySelector(".espacamento-modal")

visor.value = 0
let segundo_valor;
let operacao;
let arrHistorico = []

//funções
function numeroDigitado(valor){
    let valor_atual = visor.value;
    if(valor_atual == 0){
        visor.value = valor
    }else{
        visor.value = valor_atual+valor;
    }
}
function realizarOperacao(sinal_operacao){
    primeiro_valor = visor.value;
    soma.setAttribute("disabled", "disabled")
    sub.setAttribute("disabled", "disabled")
    multiplica.setAttribute("disabled", "disabled")
    divide.setAttribute("disabled", "disabled")
    visor.value = 0
    operacao = sinal_operacao
}

function historico(){
    espacamento_modal.innerHTML = ''
    arrHistorico.forEach(function(element){
        console.log(`${element.primeiro_valor} ${element.operacao} ${element.segundo_valor} = ${element.resultado}`)
        espacamento_modal.insertAdjacentHTML('beforeend', `<div class="cada_operacao"><p>${element.primeiro_valor}   ${element.operacao}   ${element.segundo_valor} = </p><p class="resultado">${element.resultado}</p></div>`)
        
    })
}
btnFecharModal.addEventListener("click", function(){
    modal.classList.remove('active')
})

btn0.addEventListener("click", function(){
    numeroDigitado(0)
})
btn1.addEventListener("click", function(){
    numeroDigitado(1)
})
btn2.addEventListener("click", function(){
    numeroDigitado(2)
})
btn3.addEventListener("click", function(){
    numeroDigitado(3)
})
btn4.addEventListener("click", function(){
    numeroDigitado(4)
})
btn5.addEventListener("click", function(){
    numeroDigitado(5)
})
btn6.addEventListener("click", function(){
    numeroDigitado(6)
})
btn7.addEventListener("click", function(){
    numeroDigitado(7)
})
btn8.addEventListener("click", function(){
    numeroDigitado(8)
})
btn9.addEventListener("click", function(){
    numeroDigitado(9)
})
soma.addEventListener("click", function(){
    realizarOperacao("+")
})
sub.addEventListener("click", function(){
    realizarOperacao("-")
})
multiplica.addEventListener("click", function(){
    realizarOperacao("x")
})
divide.addEventListener("click", function(){
    realizarOperacao("/")
})


clear.addEventListener("click", function(){
    visor.value = 0
})

btnHistorico.addEventListener("click", function(){
    historico()
    modal.classList.add('active')
})
igual.addEventListener("click", function(){
    segundo_valor = visor.value;
    soma.removeAttribute("disabled", "disabled")
    sub.removeAttribute("disabled", "disabled")
    multiplica.removeAttribute("disabled", "disabled")
    divide.removeAttribute("disabled", "disabled")
    if(operacao == "+"){
        let resultado = parseFloat(primeiro_valor) + parseFloat(segundo_valor);
        visor.value = resultado;
        arrHistorico.push({primeiro_valor, segundo_valor, operacao, resultado})
        console.log(`teste ${primeiro_valor} ${operacao} ${segundo_valor} = ${resultado}`)
        }else if(operacao == "-"){
            let resultado = parseFloat(primeiro_valor) - parseFloat(segundo_valor);
            visor.value = resultado;
            arrHistorico.push({primeiro_valor, segundo_valor, operacao, resultado})
            console.log(`teste ${primeiro_valor} ${operacao} ${segundo_valor} = ${resultado}`)
        }else if(operacao == "x"){
            let resultado = parseFloat(primeiro_valor) * parseFloat(segundo_valor);
            visor.value = resultado;
            arrHistorico.push({primeiro_valor, segundo_valor, operacao, resultado})
            console.log(`teste ${primeiro_valor} ${operacao} ${segundo_valor} = ${resultado}`)
        }else if(operacao == "/"){
            let resultado = parseFloat(primeiro_valor) / parseFloat(segundo_valor);
            visor.value = resultado;
            arrHistorico.push({primeiro_valor, segundo_valor, operacao, resultado})
            console.log(`teste ${primeiro_valor} ${operacao} ${segundo_valor} = ${resultado}`)
        }
})


