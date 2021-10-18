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
  <button class="m-button">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
import "../theme-chalk/src/button.scss";
export default {
  name: "mButton",
  prop: {
    size: String,
  },
  created() {
    console.log(this.$slots);
  },
};
</script>

<style></style>
