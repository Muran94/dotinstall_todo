var vm = new Vue({
  el: "#myapp",
  data: {
    new_task: '',
    todos: [
      { task: "Javascript極める！", done: false },
      { task: "Java極める！", done: true },
      { task: "Androidやる！", done: false },
      { task: "人工知能勉強する！", done: false }
    ]
  },
  computed: {
    remaining: function() {
      var count = 0;
      for (var i = 0, j = this.todos.length; i < j; i++) {
        if (this.todos[i].done) {
          count++;
        }
      }
      return count;
    }
  },
  methods: {
    del: function(index) {
      this.todos.splice(index, 1);
    },
    add: function() {
      this.todos.push({
        task: this.new_task,
        done: false
      })
      this.new_task = '';
    },
    purge: function() {
      var num_of_todos = this.todos.length;
      while (num_of_todos--) {
        if (this.todos[num_of_todos].done) {
          this.todos.splice(num_of_todos, 1);
        }
      }
    }
  }
})
