

export const createTemplate = (markup: string) => {
    const template = document.createElement("template");
    template.innerHTML = markup;

    return template;
}

export const defineElement = (name: string, element: CustomElementConstructor) => {
    window.customElements.define(name, element);
}