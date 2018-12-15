import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '医院'
      },
      component: (resolve) => require(['../components/home/home.vue'], resolve)
    },
    {
      path: '/members',
      name: 'members',
      meta: {
        title: '全部人员'
      },
      component: (resolve) => require(['../components/members/members.vue'], resolve)
    },
    {
      path: '/assessment/:id',
      name: 'assessment',
      meta: {
        title: '医院'
      },
      component: (resolve) => require(['../components/assessment/assessment.vue'], resolve)
    }
  ]
})
