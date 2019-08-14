import { LitElement, html, css } from 'lit-element';
import './item-sort';

export class Sort extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .list-item {
        background-color: #fff;
        padding: 10px;
      }
      .list-item:nth-child(even) {
        background-color: gray;
        color: #fff;
      }
      .;
    `;
  }
  render() {
    return html`
      <item-sort class="sort-ls">
        <div class="list-item">Item 1</div>
        <div class="list-item">Item 2</div>
        <div class="list-item">Item 3</div>
        <div class="list-item">Item 4</div>
        <div class="list-item">Item 5</div>
        <div class="list-item">Item 6</div>
      </item-sort>
    `;
  }
}
customElements.define('sortable-list', Sort);
