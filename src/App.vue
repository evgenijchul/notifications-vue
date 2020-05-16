<template>
  <div id="app">
    <button @click="open()">Open notifications!</button>
  </div>
</template>
<script>
function randomInteger(min, max) {
  // random number from (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export default {
  name: "App",

  methods: {
    open() {

this.$notifi.new("randomString");

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          let randomString = json[randomInteger(0, json.length - 1)]["title"];
          this.$notifi.new(randomString);
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
