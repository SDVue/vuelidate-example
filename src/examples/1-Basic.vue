<template>
  <form>
    <label>Name:
      <input v-model="$v.name.$model">
    </label>

    <pre>{{ $v }}</pre>
  </form>
</template>

<script>
// import { validationMixin } from 'vuelidate' // NOTE: if you don't import the library globally, you must import locally.
import { required } from "vuelidate/lib/validators";

export default {
  // mixins: [validationMixin], // NOTE: if you don't import the library globally, you must import locally.

  data: () => ({
    name: ""
  }),

  validations: {
    name: { required }
  }
};
</script>
