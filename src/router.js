import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Step1Page from '@/components/pages/Step1Page.vue'
import Step2Page from '@/components/pages/Step2Page.vue'
import Step3Page from '@/components/pages/Step3Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'step1',
      component: Step1Page
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2Page
    },
    {
      path: '/',
      name: 'step3',
      component: Step3Page
    }
  ]
})
