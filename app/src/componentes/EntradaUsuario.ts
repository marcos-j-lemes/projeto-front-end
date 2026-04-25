

const EntradaUsuario = (conteudo: string, tipo = 'text'): HTMLDivElement => {

    const box = document.createElement('div', null, {'id':}) as HTMLDivElement;

    const entrada = document.createElement('input') as HTMLInputElement;
    entrada.setAttribute('id', conteudo);
    entrada.setAttribute('type', tipo);
    entrada.setAttribute('placeholder', 'Digite algo...');

    const rotulo = document.createElement('label') as HTMLLabelElement;
    rotulo.setAttribute('for', conteudo);
    rotulo.textContent = `${conteudo}:`;

    box.append(rotulo, entrada);

    return box;
}


export default EntradaUsuario;
