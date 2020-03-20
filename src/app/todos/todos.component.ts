import { Component, OnInit} from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading = true;
  private searchString = '';
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
      this.todosService.onToggle(id);
  }

  remoteTodo(id: number) {
    this.todosService.remoteTodo(id);
  }
}
