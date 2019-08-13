import { LitElement, html, css } from 'lit-element';

export class AppAbout extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div>About app</div>
    `;
  }
}
customElements.define('app-about', AppAbout);
