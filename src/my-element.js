import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  render() {
    let data = html`
      <div>
        <p>My name is ${this.name}</p>
      </div>
    `;
    return data;
  }
}
customElements.define('my-element', MyElement);
