import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Attributes from '@/components/Attributes'
import Attribute from '@/components/Attribute'

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
    },
    {
      path: '/attribute',
      name: 'Attribute',
      component: Attribute
    }
  ]
})
