import { criarElemento } from "../utilitario/utilitario.js";

const Formulario = (): HTMLFormElement => {
    const formulario = document.createElement('form') as HTMLFormElement;

    const rotuloNome = document.createElement('label') as HTMLLabelElement;
    rotuloNome.setAttribute('for', 'nome');
    rotuloNome.textContent = 'Nome:';
    const nome = document.createElement('input') as HTMLInputElement;
    nome.setAttribute('id', 'nome');
    nome.setAttribute('name', 'nome');
    nome.setAttribute('type', 'text');
    nome.setAttribute('placeholder', 'Digite seu nome');

    const rotuloEmail = document.createElement('label') as HTMLLabelElement;
    rotuloEmail.setAttribute('for', 'email');
    rotuloEmail.textContent = 'Email:';
    const email = document.createElement('input') as HTMLInputElement;
    email.setAttribute('id', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Digite seu email');

    const rotuloSenha = document.createElement('label') as HTMLLabelElement;
    rotuloSenha.setAttribute('for', 'senha');
    rotuloSenha.textContent = 'Senha:';
    const senha = document.createElement('input') as HTMLInputElement;
    senha.setAttribute('id', 'senha');
    senha.setAttribute('name', 'senha');
    senha.setAttribute('type', 'password');
    senha.setAttribute('placeholder', 'Digite sua senha');

    const botao = document.createElement('button') as HTMLButtonElement;
    botao.setAttribute('type', 'submit');
    botao.textContent = 'Enviar';

    formulario.append(rotuloNome, nome, rotuloEmail, email, rotuloSenha, senha, botao);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nomeValue = nome.value.trim() || 'visitante';
        alert(`Obrigado, ${nomeValue}!`);
    });

    return formulario;
}

export default Formulario;