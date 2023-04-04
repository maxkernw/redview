import { createTemplate } from "../utils/helper";
import markup from './app.html?raw';

export class App extends HTMLElement {
    private _shadowRoot: ShadowRoot;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(createTemplate(markup).content.cloneNode(true));

    }

    async connectedCallback(): Promise<void> {


    }
    disconnectedCallback(): void {
    }

}
