<template>
  <div class="ec-vue-notifi">
    <div role="alert" v-show="isActive">
      <p v-html="message"></p>
    </div>
  </div>
</template>
<script>
// remove element from DOM
const removeElement = el => {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else {
    el.parentNode.removeChild(el);
  }
};

export default {
  name: "Notifi",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    message: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    getContainer: function() {
      // Create the vn-container if they don't exist or return it
      let notificationContainer = document.querySelector(`.ec-vue-notifi-wrap`);
      if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.classList.add("ec-vue-notifi-wrap");
        document.body.appendChild(notificationContainer);
      }
      return notificationContainer;
    }
  },
  beforeMount() {

  },
  mounted() {    let notificationContainer = this.getContainer();
    console.log(this.$el);
    
    notificationContainer.appendChild(this.$el);
    notificationContainer.classList.add("topRight");
    this.isActive = true;
    // Timeout for the animation complete before destroying
    setTimeout(() => {
      this.isActive = false;
      this.$destroy();
      removeElement(this.$el);
    }, 2500);
  }
};
</script>

<style lang="scss">
.ec-vue-notifi-wrap {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  position: fixed;
  width: 300px;
  max-width: 90vw;
  top: 0;
  right: 0;
  z-index: 1000;
  margin: 0 8px;

  &.topRight {
    top: 0;
    right: 0;
    bottom: initial;
    left: initial;
  }
  .ec-vue-notifi {
    background-color: #ffffff;
    color: #1d1d1d;
    padding: 0.5rem;
    margin: 0.25rem;
    border: 1px solid #dfdfdf;
    p {
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>