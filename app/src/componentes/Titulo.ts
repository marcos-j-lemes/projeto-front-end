import { criarElemento } from "../utilitario/utilitario";

//const Titulo = criarElemento('h1', 'Titulo do Projeto')

const Titulo = (nivel: number, conteudo: string): HTMLHeadingElement => {
    const titulo = document.createElement(`h${nivel}`) as HTMLHeadingElement;
    titulo.textContent = conteudo;
    return titulo;
}

export default Titulo