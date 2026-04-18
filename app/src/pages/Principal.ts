import Formulario from "../componentes/Formulario.js";
import Titulo from "../componentes/Titulo.js";

const principal = () => {

    // const titulo = document.createElement('h1');
    // titulo.textContent = 'Titulo do projeto';

    const container = document.createElement('div');
    container.appendChild(Titulo(1, "Titulo do Projeto"));
    container.appendChild(Titulo(2, "Subtitulo do Projeto"));

    container.appendChild(Formulario());

    return container; 
}

export default principal;