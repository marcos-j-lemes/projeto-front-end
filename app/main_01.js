// const { renderizar } = require("./src/utilitario")
import { renderizar, criarElemento } from "./dist/js/app/src/utilitario.js"

// Criar elementos no html
const titulo = document.createElement('h1')
titulo.textContent = "Titulo do projeto!"

// Pegar um elemento do html
// const root = document.querySelector('#root')

// adiciona o titulo no html
// root.appendChild(titulo)

renderizar(titulo)


// Criar um paragrafo
const paragrafo = document.createElement('p')
paragrafo.textContent = "Esse é o primeiro paragrafo do site";
renderizar(paragrafo)


// criar um hr
const linha = document.createElement('hr');
renderizar(linha)


// Todas as funções no ts
const segundo_titulo = criarElemento('h1', "Sou o segundo titulo da página")
renderizar(segundo_titulo)


