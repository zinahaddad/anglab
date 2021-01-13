import { Component } from "@angular/core";
export interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent {
  filter: string = "";

  todos: Todo[] = [
    {
      task: "Shopping",
      completed: false,
    },
    {
      task: "Cleaning",
      completed: true,
    },
    {
      task: "Studying",
      completed: false,
    },
    {
      task: "Working Job 1",
      completed: true,
    },
    {
      task: "Working Job 2",
      completed: false,
    },
  ];
  displayedTodos: Todo[] = [...this.todos];

  getFilteredResults(): Todo[] {
    return this.displayedTodos.filter((todo) => {
      const taskLower = todo.task.toLowerCase();
      const filterLower = this.filter.toLowerCase();
      return taskLower.includes(filterLower);
    });
  }
}

