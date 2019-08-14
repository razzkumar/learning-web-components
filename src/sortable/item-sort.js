import { LitElement, html, css } from 'lit-element';
import Sortable from 'sortablejs';
export class ItemSort extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .;
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    new Sortable(this);
  }
  clickHandler(e) {
    e.target.parentElement.setAttribute('fas', 'fa');
    console.log('e:', e);
  }

  render() {
    return html`
      <h2>This simple sorting</h2>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('item-sort', ItemSort);
