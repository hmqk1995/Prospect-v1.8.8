import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Attributes from '@/views/Attributes'
import Attribute from '@/components/Attribute'
import Records from '@/views/Records'
import Record from '@/components/Record'
import Templates from '@/views/Templates'
import Template from '@/components/Template'

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
    },
    {
      path: '/record/:id',
      name: 'Record',
      component: Record
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/template/:id',
      name: 'Template',
      component: Template
    }
  ]
})
