interface Iatributos {
    [chave: string]: string | string[] | undefined; 
}


const renderizar = (elemento: HTMLElement): void => {

    // Garantir que possui um elemento HTML
    // HTMLELement
    const root = document.querySelector('#root') as HTMLElement;
    root.appendChild(elemento)
}


const criarElemento = (tag: string, conteudo: string | null = null, atributos?: string[]) => {

    const elemento = document.createElement(tag);
    elemento.textContent = conteudo;

    if (atributos) {
        for (let i = 0; i < atributos.length; i += 2) {
            const nome = atributos[i];
            const valor = atributos[i + 1];
            elemento.setAttribute(nome, valor);
        }
    }

    return elemento;
}


export { criarElemento, renderizar }

