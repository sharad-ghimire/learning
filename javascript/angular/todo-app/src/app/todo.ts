export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

/*
let todo = new Todo({
  title: 'D',
  complete: false
});
*/
