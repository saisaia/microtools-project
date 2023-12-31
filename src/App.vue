<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const currentPath = ref("/");
const setCurrentPath = (path) => {
  currentPath.value = path;
};
</script>

<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="row">
      <div class="col-md-4">
        <nav class="sticky-md-top" style="width: 18rem">
          <RouterLink
            to="/"
            class="text-decoration-none"
            @click="setCurrentPath('/')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="currentPath === '/' && 'bg-dark text-white'"
              >
                <h5 class="card-title">Flexbox</h5>
                <p class="card-text">A CSS layout module.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink
            to="/to-do"
            class="text-decoration-none"
            @click="setCurrentPath('/to-do')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="currentPath === '/to-do' && 'bg-dark text-white'"
              >
                <h5 class="card-title">To Do List</h5>
                <p class="card-text">A to do list module.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink
            to="/miles-to-kilometers"
            class="text-decoration-none"
            @click="setCurrentPath('/miles-to-kilometers')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="
                  currentPath === '/miles-to-kilometers' && 'bg-dark text-white'
                "
              >
                <h5 class="card-title">Miles to Kilometers Converter</h5>
                <p class="card-text">A distance converter module.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink
            to="/age-calculator"
            class="text-decoration-none"
            @click="setCurrentPath('/age-calculator')"
          >
            <div class="card mt-3">
              <div
                class="card-body"
                :class="
                  currentPath === '/age-calculator' && 'bg-dark text-white'
                "
              >
                <h5 class="card-title">Age Calculator</h5>
                <p class="card-text">An age calculator module.</p>
              </div>
            </div>
          </RouterLink>
        </nav>
      </div>

      <div class="col mx-auto" style="width: 100%">
        <RouterView />
      </div>
    </div>
  </div>
</template>
