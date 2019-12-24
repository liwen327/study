import vue from 'vue'
import VueRouter from 'vue-router'

import parent from '@/components/parent'

vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/parent',
    component: parent,
    // props: (route) => ({ groupId: route.query.groupId, resourceId: route.query.resourceId }),
    meta: {
      title: '父组件'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})

export default router




