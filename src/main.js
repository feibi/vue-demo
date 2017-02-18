// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Test from './components/Test'

import Foo from './router/Foo'
import UserList from './router/user/List'
import UserCreate from './router/user/Create'
Vue.use(VueRouter)

const Index = {
  template: '<div class="user-router"><router-view></router-view></div>'
}
const routes = [
  {
    path: '/foo',
    component: Foo
  }, {
    path: '/user',
    component: Index,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'list',
        component: UserList
      }, {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'create',
        component: UserCreate
      }
    ]
  }, {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App: App
  }
})
