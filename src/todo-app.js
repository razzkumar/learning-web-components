import { LitElement, html } from 'lit-element';

const Visibilityfilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String },
    };
  }

  constructor() {
    super();
    this.todos = [];
    this.filter = Visibilityfilters.SHOW_ALL;
    this.task = '';
  }

  addTodo() {
    if (this.task) {
      this.todos = [
        ...this.todos,
        {
          task: this.task,
          complete: false,
        },
      ];
      this.task = '';
    }
  }

  updateTodo(e) {
    this.task = e.target.value;
  }

  submit(e) {
    console.log(e);
    e.preventDefault();
  }

  eListener(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  render() {
    return html`
      <div class="input-layout" @keyup="${this.eListener}">
      <input type="text" placeholder="Add TODO" .value="${this.task ||
        ''}" @input="${this.updateTodo}"></input>
      <button type="submit" @click ="${this.addTodo}" >Submit</button>
    </div>
​
    <ul class="todos-list">
      ${this.todos.map(
        todo => html`
          <li class="todo-item">
            ${todo.task}
          </li>
        `
      )}
      </ul>
    `;
  }
}

customElements.define('todo-app', TodoApp);
