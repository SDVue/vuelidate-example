<template>
  <form>
    <p>{{ $v.$invalid ? "Uh oh. This form is invalid 😢" : "Yay! This form is valid 😁" }}</p>

    <div>
      <label>Name:
        <input v-model="name">
      </label>
    </div>

    <div>
      <label>Email:
        <input v-model="email">
      </label>
    </div>

    <div>
      <label>Password:
        <input v-model="password">
      </label>
    </div>

    <div>
      <label>Repeat Password:
        <input v-model="repeat">
      </label>
    </div>

    <fieldset>
      <legend>Address:</legend>
      <div>
        <label>Street:
          <input v-model="address.street">
        </label>
      </div>

      <div>
        <label>State:
          <input v-model="address.state">
        </label>
      </div>

      <div>
        <label>ZIP:
          <input v-model="address.zip">
        </label>
      </div>
    </fieldset>

    <label>Favorite Food (no hotdogs!):
      <input v-model="food">
    </label>
  </form>
</template>

<script>
// Built in Validators: https://monterail.github.io/vuelidate/#sub-builtin-validators
import {
  required,
  alpha,
  email,
  minLength,
  maxLength,
  sameAs,
  integer,
  between
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "Austin",
    email: "me@example.com",
    password: "pass123",
    repeat: "pass123",
    address: {
      street: "123 some st",
      state: "CA",
      zip: "92101"
    },
    food: "pizza",
    forbidden: "hotdog"
  }),

  validations: {
    name: { required, alpha },
    email: { required, email },
    password: {
      required,
      min: minLength(6),
      max: maxLength(10)
    },
    repeat: { matches: sameAs("password") },
    address: {
      street: { required },
      state: { required },
      zip: {
        required,
        between: between(10000, 99999)
      }
    },
    food: {
      required,
      // notHotdog: function(input) { ... }
      notHotdog(input) {
        return input.trim().toLowerCase() !== this.forbidden;
      }
    }
  }
};
</script>
