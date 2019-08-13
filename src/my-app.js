import { LitElement, html } from 'lit-element';
import { routerMixin } from 'lit-element-router';

class MyApp extends routerMixin(LitElement) {
  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
      },
      {
        name: 'info',
        pattern: 'info',
      },
      {
        name: 'user',
        pattern: 'user/:id',
      },
      {
        name: 'not-found',
        pattern: '*',
      },
    ];
  }

  onRoute(route, params, query, data) {
    cthis.route = route;
    this.params = params;
  }

  render() {
    return html`
      <router-wrapper currentRoute="${this.route}">
        <div route="home">Home any-arbitary-lit-element</div>
        <div route="info">mY Info any-arbitary-lit-element</div>
        <div route="user">
          User ${this.params && this.params.id} any-arbitary-lit-element
        </div>
        <div route="not-authorized">
          Not Authorized any-arbitary-lit-element
        </div>
        <div route="not-found">Not Found any-arbitary-lit-element</div>
      </router-wrapper>
    `;
  }
}

customElements.define('my-app', MyApp);
