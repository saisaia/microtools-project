<script setup>
import { ref } from "vue";

const birthdate = ref(null);
const age = ref(null);

const calculateAge = () => {
  if (birthdate.value) {
    let birthdateDate = new Date(birthdate.value);
    let ageDate = new Date(Date.now() - birthdateDate.getTime());
    age.value = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Age Calculator</h2>

        <div class="form-group">
          <label for="birthdate">Birthdate:</label>
          <input
            v-model="birthdate"
            id="birthdate"
            type="date"
            class="form-control"
          />
        </div>

        <button @click="calculateAge" class="btn btn-primary btn-block mt-3">
          Calculate Age
        </button>

        <div v-if="age !== null" class="alert alert-info mt-3" role="alert">
          Your age is: {{ age }} years
        </div>
      </div>
    </div>
  </div>
</template>
