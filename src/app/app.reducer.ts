import { Todo } from './todos/models/todo.model';
// ngrx
import { ActionReducerMap } from '@ngrx/store';
// reducers
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
// modelos
import { FiltrosValidos } from './filtro/filtro.actions';

export interface AppState {
  todos: Todo[];
  filtro: FiltrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
