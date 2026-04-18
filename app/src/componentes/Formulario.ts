import { criarElemento } from "../utilitario/utilitario.js";



const Formulario = () => {
    const formulario = document.createElement('form') as HTMLFormElement;

    const rotuloNome = criarElemento('label) as HTMLLabelElement;
    rotuloNome.textContent = 'Nome:';
    const nome = criarElemento('input') as HTMLInputElement;


    const email = criarElemento('input') as HTMLInputElement;
    const fone = criarElemento('input') as HTMLInputElement;
    const senha = criarElemento('input') as HTMLInputElement;

    formulario.append(rotuloNome, nome, email, fone, senha);


    return formulario;

}


// const Formulario = document.createElement("form");
// Formulario.innerHTML = `
//     <label for="nome">Nome:</label>
//     <input type="text" id="nome" name="nome" required>
//     <button type="submit">Enviar</button>
// `;

// Formulario.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const nomeInput = document.getElementById("nome") as HTMLInputElement;
//     alert(`Olá, ${nomeInput.value}!`);
// });

export default Formulario;