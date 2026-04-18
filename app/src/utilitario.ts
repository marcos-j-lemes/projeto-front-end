export const renderizar = (elemento: HTMLElement): void => {

    // Garantir que possui um elemento HTML
    // HTMLELement
    const root = document.querySelector('#root') as HTMLElement;
    root.appendChild(elemento)
}

export const criarElemento = (tag: string, conteudo = ""): HTMLElement => {

    const elemento = document.createElement(tag);
    elemento.textContent = conteudo;
    return elemento
}









