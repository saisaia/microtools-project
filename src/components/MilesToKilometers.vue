<script setup>
import { ref } from "vue";

const miles = ref(null);
const kilometers = ref(null);

const convertToKilometers = () => {
  if (miles.value !== null) {
    kilometers.value = (miles.value * 1.60934).toFixed(2);
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Miles to Kilometers Converter</h2>

        <div class="form-group">
          <label for="miles">Miles:</label>
          <input
            v-model.number="miles"
            id="miles"
            type="number"
            min="0"
            class="form-control"
          />
        </div>

        <button
          @click="convertToKilometers"
          class="btn btn-primary btn-block mt-4"
        >
          Convert
        </button>

        <div
          v-if="kilometers !== null"
          class="alert alert-info mt-3"
          role="alert"
        >
          {{ miles }} miles is equal to {{ kilometers }} kilometers.
        </div>
      </div>
    </div>
  </div>
</template>
