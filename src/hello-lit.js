import { LitElement, html } from 'lit-element';

export class HelloLit extends LitElement {
  constructor() {
    super();
    this.name = ' rai';
  }
  static get styles() {}
  static get properties() {
    return {
      name: { type: String },
      isTrue: Boolean,
    };
  }
  render() {
    return html`
      <div>
        My name is ${this.name} and ${this.isTrue ? 'yes' : 'no'}
      </div>
    `;
  }
  handleClick(e) {
    console.log('clic', e.target.innerHTML);
  }
}
customElements.define('hello-lit', HelloLit);
