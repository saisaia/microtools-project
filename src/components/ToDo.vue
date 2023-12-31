<script setup>
import { ref } from "vue";

const newTodo = ref("");
const todos = ref([]);

const addTodo = () => {
  if (newTodo.value) {
    todos.value.push({ text: newTodo.value, completed: false });
    newTodo.value = "";
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};

const finishTodo = (index) => {
  todos.value[index].completed = true;
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Todo List</h2>

        <div class="form-group">
          <input
            v-model="newTodo"
            type="text"
            placeholder="Add a todo"
            class="form-control"
          />
        </div>

        <button @click="addTodo" class="btn btn-primary btn-block mt-3">
          Add Todo
        </button>

        <ul class="list-group mt-3">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <div class="d-flex gap-2">
              <button
                @click="finishTodo(index)"
                class="btn btn-success btn-sm float-right ml-2"
              >
                Finish
              </button>
              <button
                @click="removeTodo(index)"
                class="btn btn-danger btn-sm float-right"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
