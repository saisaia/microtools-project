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
        </nav>
      </div>

      <div class="col mx-auto" style="width: 100%">
        <RouterView />
      </div>
    </div>
  </div>
</template>
