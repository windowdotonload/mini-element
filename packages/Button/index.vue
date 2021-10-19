<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <button
    @click="handleClick"
    class="m-button"
    :class="[type ? `m-button--${type}` : '']"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
import "../theme-chalk/src/button.scss";
export default {
  name: "mButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  created() {
    console.log(this.$slots);
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style></style>
