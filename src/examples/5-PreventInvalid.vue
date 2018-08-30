<template>
  <form @submit.prevent>

    <label>Name:
      <input v-model="name">
      <div v-if="$v.name.$error" class="validation-errors">
        <small v-if="!$v.name.required">Field is required.</small>
      </div>
    </label>

    <label>Email:
      <input v-model="email">
      <div v-if="$v.email.$error" class="validation-errors">
        <small v-if="!$v.email.required">Field is required.</small>
        <small v-if="!$v.email.email">Must be a valid email.</small>
      </div>
    </label>

    <button @click="onSubmit" :disabled="$v.$invalid">Submit</button>
    <br> or
    <br>
    <button v-if="$v.$invalid" @click="$v.$touch()" :style="{ opacity: $v.$invalid ? '0.3' : '' }">Submit (invalid)</button>
    <button v-else @click="onSubmit">Submit (valid)</button>
    <br> or
    <br>
    <button @click="onSubmit" :style="{ opacity: $v.$invalid ? '0.3' : '' }">Submit</button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    email: ""
  }),

  methods: {
    onSubmit() {
      this.$v.$reset();

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      alert("The form was submitted!");
    }
  },

  validations: {
    name: { required },
    email: { required, email }
  }
};
</script>
