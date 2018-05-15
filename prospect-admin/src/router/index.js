import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Attributes from '@/components/Attributes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/attributes',
      name: 'Attributes',
      component: Attributes
    }
  ]
})
