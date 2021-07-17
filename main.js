const app = new Vue({
    el: '#app',
    data: {
      todos: [],
      newtodo: ''
    },
    mounted() {
      if (localStorage.getItem('todos')) {
        try {
          this.todos = JSON.parse(localStorage.getItem('todos'));
        } catch(e) {
          localStorage.removeItem('todos');
        }
      }
    },
    methods: {
      addtodo() {
        // ensure they actually typed something
        if (!this.newtodo) {
          return;
        }
  
        this.todos.push(this.newtodo);
        this.newtodo = '';
        this.savetodos();
      },
      removetodo(x) {
        this.todos.splice(x, 1);
        this.savetodos();
      },
      savetodos() {
        var parsed = JSON.stringify(this.todos);
        localStorage.setItem('todos', parsed);
      }
    }
  })