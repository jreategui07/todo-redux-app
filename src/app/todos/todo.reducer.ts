import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
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
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
