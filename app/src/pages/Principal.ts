import Formulario from "../componentes/Formulario.js";
import Titulo from "../componentes/Titulo.js";

const principal = () => {

    const container = document.createElement('div') as HTMLDivElement;

    const titulo = Titulo(2, 'Titulo do projeto') as HTMLHeadingElement;

    container.appendChild(titulo);
    container.appendChild(Formulario());

    return container;
}

export default principal;