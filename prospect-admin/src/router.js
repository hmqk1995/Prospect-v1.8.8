import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Attributes from '@/views/Attributes'
import Attribute from '@/components/Attribute'
import Records from '@/views/Records'
import Record from '@/components/Record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/attributes',
      name: 'Attributes',
      component: Attributes
    },
    {
      path: '/attribute/:id',
      name: 'Attribute',
      component: Attribute
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    }
  ]
})
