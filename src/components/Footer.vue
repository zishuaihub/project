<template>
  <div id="footer">
    <tabbar>
      <tabbar-item :link="{path:'/'}"><img slot="icon" src="../assets/demo/icon_nav_button.png" alt="">
        <span slot="label">首页</span></tabbar-item>
      <tabbar-item :link="{path:'/seek'}"><img slot="icon" src="../assets/demo/icon_nav_article.png" alt="">
        <span slot="label">栏目1</span></tabbar-item>
      <tabbar-item :link="{path:'/shoppingcart'}"><img slot="icon" src="../assets/demo/icon_nav_msg.png" alt="">
        <span slot="label">栏目2</span></tabbar-item>
      <tabbar-item :link="{path:'/own'}"><img slot="icon" src="../assets/demo/icon_nav_cell.png" alt="">
        <span slot="label">栏目3</span></tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Group, Cell, Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
