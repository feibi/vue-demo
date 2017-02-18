<template>
<div class="menu">
  <router-link to="/foo">Foo</router-link>
  <router-link to="/user/list">User</router-link>
  <router-link to="/bar">Bar</router-link>
  <router-link to="/test">Test</router-link>
</div>
</template>

<script>
import Vue from 'vue'
const menu = new Vue({
  name: 'menu',
  created: function () {
    // `this` 指向 vm 实例
    // console.log('a is: ' + this.$options.name)
    // console.log('a is: ' + this.$root)
  }
})

export default menu
</script>

<style>
.menu {
  line-height: 45px;
  background: #3385ff;
}

.menu a {
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
}
</style>
