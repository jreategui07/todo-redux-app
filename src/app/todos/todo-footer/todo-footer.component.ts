import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.FiltrosValidos = 'todos';
  filtros: actions.FiltrosValidos[] = ['todos', 'pendientes', 'completados'];

  pendientes: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      // actualizamos filtro actual
      this.filtroActual = state.filtro;

      // actualizamos conteo de tareas pendientes
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });

  }

  cambiarFiltro(filtro: actions.FiltrosValidos): void {
    this.store.dispatch(actions.setFiltro({
      filtro
    }));
  }

}
