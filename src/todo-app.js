import { LitElement, html } from 'lit-element';
import store from './redux/store';
import { connect } from 'pwa-helpers';

import todoReducer, { VisibilityFilters } from './redux/reducers/todoReducer';
import {
  addTodo,
  updateFilter,
  clearCompleted,
  updateTodoStatus,
} from './redux/actions/todoActions';

class TodoApp extends connect(store)(LitElement) {
  constructor() {
    super();
    store.addReducers({
      todos: todoReducer,
    });
    this.task = '';
    this.filter = VisibilityFilters.SHOW_ALL;
    this.todos = [];
  }

  stateChanged(state) {
    this.todos = state.todos.todos;
    this.filter = state.todos.filter;
  }

  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String },
    };
  }

  addTodo() {
    if (this.task) {
      store.dispatch(addTodo(this.task));
      this.task = '';
      store.dispatch(updateFilter(this.filter));
    }
  }

  updateTodo(e) {
    this.task = e.target.value;
  }

  eListener(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  updateTodoStatus(updatedTodo, complete) {
    store.dispatch(updateTodoStatus(updatedTodo, complete));
  }

  filterChanged(e) {
    store.dispatch(updateFilter(e.target.value));
    this.applyFilter();
  }

  clearCompleted(e) {
    e.preventDefault();

    store.dispatch(clearCompleted());
  }

  applyFilter() {
    if (this.filter === VisibilityFilters.SHOW_ACTIVE) {
      this.todos = this.todos.filter(d => !d.isComplete);
    } else if (this.filter === VisibilityFilters.SHOW_COMPLETED) {
      this.todos = this.todos.filter(d => d.isComplete);
    } else {
      this.todos = this.todos;
    }
  }
  render() {
    return html`
      <h2>Todo app</h2>
      <div class="input-layout" @keyup="${this.eListener}">
        <input
          type="text"
          placeholder="Add TODO"
          .value="${this.task}"
          @input="${this.updateTodo}"
        />
        <button type="submit" @click="${this.addTodo}">Submit</button>
      </div>
      ​
      <ul class="todos-list">
        ${this.todos &&
          this.todos.map(
            todo => html`
              <li class="todo-item">
                <input
                  type="checkbox"
                  @change="${e => {
                    this.updateTodoStatus(todo.id, e.target.checked);
                  }}"
                  id="${todo.id}"
                  ?checked="${todo.isComplete}"
                />
                ${todo.task}
              </li>
            `
          )}
      </ul>
      <form
        class="visibility-filter"
        value=${this.filter}
        @submit="${this.clearCompleted}"
      >
        ${Object.values(VisibilityFilters).map(
          filter => html`
            <input
              type="radio"
              name="filter"
              @change=${this.filterChanged}
              value=${filter}
              ?checked=${filter === VisibilityFilters.SHOW_ALL
                ? true
                : undefined}
            />${filter}
          `
        )}
        <button type="submit">
          Clear Completeds
        </button>
      </form>
    `;
  }
}

customElements.define('todo-app', TodoApp);
