<template>
  <div id="app">
    <h1>Vuelidate Examples:</h1>
    <ul class="nav">
      <li>
        <router-link to="basic">Basic</router-link>
      </li>
      <li>
        <router-link to="extended">Extended</router-link>
      </li>
      <li>
        <router-link to="errors">Display Errors</router-link>
      </li>
      <li>
        <router-link to="delayed">Delayed Errors</router-link>
      </li>
      <li>
        <router-link to="prevent">Prevent Invalid</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}
#app {
  max-width: 500px;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    display: block;
    padding: 10px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
fieldset,
label > :last-child {
  margin: 0 0 20px;
}
input,
fieldset {
  width: 100%;
}
input[type="radio"] {
  width: auto;
}
pre {
  text-align: initial;
}
.router-link-exact-active {
  color: inherit;
}
.validation-errors {
  border: 1px solid;
  color: #b00000;
  background: #f8cccc;
}
</style>
