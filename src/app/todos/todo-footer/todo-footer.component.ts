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

  filtroActual: actions.FiltrosValidos = 'Todos';
  filtros: actions.FiltrosValidos[] = ['Todos', 'Pendientes', 'Completados'];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro => {
      this.filtroActual = filtro;
    });
  }

  cambiarFiltro(filtro: actions.FiltrosValidos): void {
    this.store.dispatch(actions.setFiltro({
      filtro
    }));
  }

}
