const Horas = document.getElementById('horas')
const Minutos = document.getElementById('minutos')
const Segundos = document.getElementById('segundos')
const bdia = document.querySelector('.ola')
const meses = document.querySelector('.tempomes')
const hescrita = document.querySelector('.horas')
const mescrita = document.querySelector('.minutos')
const sescrita = document.querySelector('.segundos')

let nome = window.prompt('Qual seu nome?')


const Relogio = setInterval(function tempo(){
let relogiodigital = new Date ();
let hr = relogiodigital.getHours();
let mn = relogiodigital.getMinutes();
let seg = relogiodigital.getSeconds();

if (hr <10) hr = '0' + hr;
if (mn <10) mn = '0' + mn;
if (seg <10) seg = '0' + seg;

Horas.textContent = hr;
Minutos.textContent = mn;
Segundos.textContent = seg;

if (hr <= 1){
    hescrita.textContent="Hora"
}
else{
    hescrita.textContent="Horas"
}

if (mn <= 1){
    mescrita.textContent="Minuto"
}
else{
    mescrita.textContent="Minutos"
}
if (seg <= 1){
    sescrita.textContent="Segundo"
}
else{
    sescrita.textContent="Segundos"
}

})

const cumprimento = setInterval(function boasvindas(){
    let tempo = new Date()
    let hora = tempo.getHours();

    if (hora >=0 && hora <=11){
        bdia.textContent = `Bom dia, ${nome}!`
    }
    if (hora >=12 && hora <=18 ){
        bdia.textContent = `Boa tarde, ${nome}!`
    }
    if (hora >=19){
        bdia.textContent = `Boa noite, ${nome}!`
    }
})

const dataCompleta = setInterval(function datas (){
    let data = new Date()
    let ano = data.getFullYear();
    let diaNumero = data.getDate();

    const diaSemana =["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira", "Sábado",]
    let diasDaSemana = diaSemana[data.getDay()]

    const mesesAno = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    let mesEscrito = mesesAno[data.getMonth()]


    meses.textContent = `${diasDaSemana}, ${diaNumero} de ${mesEscrito} de ${ano}`

})

