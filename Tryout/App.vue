<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <div class="layout">
    <header class="header">
      <h1>Mini-ELEMENT</h1>
    </header>
    <div class="sider">
      <span class="menu--item" v-for="item in menuName" :key="item">
        {{ item }}
      </span>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { components } from "@/index.js";
const menuName = components.map(item => item.name);
export default {
  data() {
    return {
      menuName,
    };
  },
};
</script>

<style scoped>
.header {
  padding-left: 20px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #409eff;
  border-bottom: 2px solid rgba(227, 241, 235, 0.767);
}
.layout {
  width: 1200px;
  height: 97%;
  margin: 0 auto;
}
.sider {
  float: left;
  width: 15%;
  height: 100%;
  overflow: hidden;
}
.sider:hover {
  overflow: auto;
}
.sider::-webkit-scrollbar {
  width: 10px;
}
.sider::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.sider::-webkit-scrollbar-thumb {
  background: #d1d1d1;
  border-radius: 5px;
}
.menu--item {
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  color: #d1d1d1;
}
.menu--item:hover {
  cursor: pointer;
  color: #409eff;
}
.content {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 85%;
  height: 100%;
  padding-top: 20px;
  padding-left: 30px;
}
</style>
