import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'Todos' | 'Completados' | 'Pendientes';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: FiltrosValidos }>()
);
