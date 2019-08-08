import { LitElement, html } from 'lit-element';

export class HelloLit extends LitElement {
  constructor() {
    super();
    this.name = 'rajkumar rai';
  }
  static get properties() {
    return {
      name: { type: String },
    };
  }
  render() {
    return html`
      <div>
        <slot></slot>

        My name is ${this.name}
        <slot @click="${this.handleClick}" name="data"></slot>
      </div>
    `;
  }
  handleClick(e) {
    console.log('clic', e.target.innerHTML);
  }
}
customElements.define('hello-lit', HelloLit);
