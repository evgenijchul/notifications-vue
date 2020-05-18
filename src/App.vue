<template>
  <div id="app">
    <button @click="open()">Default</button>
    <button @click="success()">Success</button>
    <button @click="warning()">Warning</button>
    <button @click="error()">Error</button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    open() {
      this.$notifi.new("Default message");
      // this.$notifi.message("Default message");
    },
    success() {
      this.$notifi.success(
        "Thanks for contacting us! We will be in touch with you shortly."
      );
    },
    warning() {
      this.$notifi.warning(
        "A cookie associated with a cross-site resource at http://googleadservices.com/ was set without the `SameSite` attribute."
      );
    },
    error() {
      this.$notifi.error(
        "<b>Error Invalid Number</b>. Please re-send using a valid 10 digit mobile number or valid short code error message."
      );
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>