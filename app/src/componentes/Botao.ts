
import { criarElemento } from "../utilitario/utilitario.js";

class Botao {
    private _elemento:  HTMLButtonElement;

    constructor(conteudo: string, tipo?: "button" | "submit" | "reset") {
        this._elemento = criarElemento('button', conteudo) as HTMLButtonElement;
        this._elemento.textContent = conteudo;
        this._elemento.setAttribute('type', tipo || 'button');
    }

    get elemento() {
        return this._elemento;
    }


}