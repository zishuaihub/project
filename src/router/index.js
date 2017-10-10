import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Groupon from '../pages/Groupon.vue'
import Own from '../pages/Own.vue'
import Seek from '../pages/Seek.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/groupon',
      children:[
        {
          path:'/groupon',
          name:'Groupon',
          component:Groupon
        },
        {
          path:'/own',
          name:'Own',
          component: Own
        },
        {
          path:'/seek',
          name:'Seek',
          component: Seek
        },
        {
          path:'/shoppingcart',
          name:'ShoppingCart',
          component: ShoppingCart
        },
      ]
    }

  ]
})
