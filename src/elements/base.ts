import { createTemplate } from "../utils/helper";

class BaseElement extends HTMLElement {
    constructor(template: string) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.appendChild(createTemplate(template).cloneNode(true));
    }
}
export default BaseElement;