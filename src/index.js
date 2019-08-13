import { LitElement, html } from 'lit-element';
import { connectRouter, navigate } from 'lit-redux-router';
import store from './redux/store';

import './todo-app';
import './pie-chart';
import './app-about';
import './styles.css';
import './bar-diagram';

connectRouter(store);
class MyApp extends LitElement {
  goToAbout() {
    store.dispatch(navigate('/about'));
  }
  render() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          font-weight: 300;
          background: gray;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          text-decoration: underline;
        }

        h1 {
          margin-top: 0;
          margin-bottom: 16px;
        }

        .app-content {
          padding: 16px;
        }

        .nav-bar {
          background-color: gray;
          text-align: center;
        }

        .nav-bar a {
          display: inline-block;
          padding: 16px;
          color: #fff;
        }
        .spacer {
          height: 1600px;
        }

        .scrollLink {
          color: blue;
        }

        .scrollLink:hover {
          color: red;
        }
      </style>
      <nav class="nav-bar">
        <a href="/learning-web-components/">home</a>
        <a href="/learning-web-components/pie-chart">Pie Chart</a>
        <a href="/learning-web-components/bar-diagram">Bar diagram</a>
        <a href="/learning-web-components/about">about</a>
      </nav>

      <div class="app-content">
        <lit-route><h1>404</h1></lit-route>
        <lit-route path="/learning-web-components/" component="todo-app">
        </lit-route>
        <lit-route
          path="/learning-web-components/pie-chart"
          component="pie-chart"
        ></lit-route>
        <lit-route
          path="/learning-web-components/bar-diagram"
          component="bar-diagram"
        ></lit-route>
        <lit-route
          path="/learning-web-components/about"
          component="app-about"
        ></lit-route>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);
