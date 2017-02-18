<template>
  <div id="test">
    <input v-focus v-model="msg" placeholder="edit me">
    <div v-html="html">sddd</div>
    <p>{{msg}}</p>
    <button v-on:click="show = !show">
    Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'test',
  data: function () {
    return {
      msg: 'ss',
      html: '<h3>this is a h3 tag</h3>',
      show: true
    }
  },
  directives: {
    focus: {
      // 指令的定义---
    }
  }
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>