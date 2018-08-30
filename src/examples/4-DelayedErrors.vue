<template>
	<form @submit.prevent="onSubmit">

		<label>Name (validate on blur):
			<input v-model="name" @blur="$v.name.$touch()">
			<div v-if="$v.name.$error" class="validation-errors">
				<small v-if="!$v.name.required">Field is required.</small>
			</div>
		</label>

		<label>Email (validate on submit):
			<input v-model="email">
			<div v-if="$v.email.$error" class="validation-errors">
				<small v-if="!$v.email.required">Field is required.</small>
				<small v-if="!$v.email.email">Must be a valid email.</small>
			</div>
		</label>

		<button type="submit">Submit</button>
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
      this.$v.$touch();
    }
  },

  validations: {
    name: { required },
    email: { required, email }
  }
};
</script>
