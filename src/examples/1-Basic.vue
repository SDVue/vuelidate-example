<template>
	<div>
		<label>Name:
			<input v-model="input">
		</label>

		<pre>{{ $v }}</pre>
	</div>
</template>

<script>
// import { validationMixin } from 'vuelidate' // NOTE: if you don't import the library globally, you must import locally.
import { required } from "vuelidate/lib/validators";

export default {
  // mixins: [validationMixin], // NOTE: if you don't import the library globally, you must import locally.

  data: () => ({
    input: ""
  }),

  validations: {
    input: { required }
  }
};
</script>
