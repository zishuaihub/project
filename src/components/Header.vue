<template>
  <div>
    <x-header>This is the page title.</x-header>

  </div>
</template>

<script>
  import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    }
  }
</script>

<style>
  .overwrite-title-demo {
    margin-top: 5px;
  }
</style>
