import { criarElemento } from "../utilitario.js";

//const Titulo = criarElemento('h1', 'Titulo do Projeto')

const Titulo = (nivel: number, conteudo: string): HTMLHeadingElement => {
    const titulo = criarElemento(`h${nivel}`, conteudo) as HTMLHeadingElement;

    return titulo;
}

export default Titulo