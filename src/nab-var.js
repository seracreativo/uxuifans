const template = document.createElement('div');
template.innerHTML = `
    <h1>Hola mundo</h1>
    <p>Este es un párrafo super cool</p>
`;


class myElement extends HTMLElement {
    constructor() {
        super();
        
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Hola mundo!!";
        this.appendChild(this.p);
        this.appendChild(template)
    }
}

customElements.define('nav-bar', myElement)