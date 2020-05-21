import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Salvar al mundo 2'),
  new Todo('Salvar al mundo 3'),
  new Todo('Salvar al mundo 4'),
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completado }) => state.map(todo => {
    return {
      ...todo,
      completado
    };
  })),

  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
