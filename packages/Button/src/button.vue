<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->

<template>
  <button>abc{{ size }}</button>
</template>

<script>
export default {
  name: "mButton",
  prop: {
    size: String,
  },
};
</script>
