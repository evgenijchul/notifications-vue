<template>
  <div class="ec-vue-notifi-wrap__notifi" :class="'ec-vue-notifi-wrap__notifi_'+type">
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
      default: "default"
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
      let notificationContainer = document.querySelector(`.ec-vue-notifi-wrap`);
      if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.classList.add("ec-vue-notifi-wrap");
        document.body.appendChild(notificationContainer);
      }
      return notificationContainer;
    }
  },
  mounted() {
    let notificationContainer = this.getContainer();

    notificationContainer.appendChild(this.$el);
    notificationContainer.classList.add("topRight");
    this.isActive = true;
    // Timeout for the animation complete before destroying

    // reading speed of countWordPerMinute words per minute.
    const countWordPerMinute = 160;
    const countWord = this.message.split(" ").filter(e => e.length > 3).length;

    let timer = (1000 * (countWord * 60)) / countWordPerMinute;
    if (timer < 1000) timer = 1000;

    setTimeout(() => {
      this.isActive = false;
      this.$destroy();
      removeElement(this.$el);
    }, timer);
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
  &__notifi {
    background-color: #ffffff;
    color: #1d1d1d;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px #d9d9d9 solid;
    box-shadow: 0 0 0 3px rgba(228, 228, 228, 0.45);
    p {
      margin: 0;
      font-size: 14px;
    }
    &_error {
      box-shadow: 0 0 0 3px rgba(206, 53, 44, 0.45);
      border-color: #ce352c;
    }
    &_warning {
      box-shadow: 0 0 0 3px rgba(255, 148, 71, 0.45);
      border-color: #ff9447;
    }
    &_success {
      box-shadow: 0 0 0 3px rgba(96, 169, 23, 0.45);
      border-color: #60a917;
    }
  }
}
</style>