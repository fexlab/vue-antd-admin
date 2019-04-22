<template>
  <a-layout-sider
    v-model="collapsed"
    :class="[theme, 'sider', isFixed, isMobile ? null : 'shadow']"
    width="256px"
    :collapsible="collapsible"
    :trigger="null">
    <div :class="['logo', theme]">
      <router-link to="/dashboard/workplace">
        <img src="../../assets/logo.svg">
        <h1>{{ title }}</h1>
      </router-link>
    </div>
    <i-menu
      :theme="theme"
      :collapsed="collapsed"
      :menu-data="menuData"
      @select="onSelect" />
  </a-layout-sider>
</template>

<script>
import IMenu from './menu'
export default {
  name: 'SiderMenu',
  components: { IMenu },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menuData: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    isFixed () {
      return this.$store.state.setting.fixedSidebar ? 'is-fixed' : null
    },
    title () {
      return this.$store.state.setting.title
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>

<style lang="less" scoped>
  .shadow{
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
  }
  .sider{
    position: relative;
    z-index: 10;
    min-height: 100vh;
    &.light {
      background-color: #fff;
    }
    &.dark {
      background-color: #001529;
    }
    &.is-fixed {
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
    }
    .logo{
      height: 64px;
      position: relative;
      line-height: 64px;
      padding-left: 24px;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      &.light{
        background-color: #fff;
        h1{
          color: #1890ff;
        }
      }
      &.dark{
        background-color: #002140;
        h1{
          color: #fff;
        }
      }
      h1{
        color: #fff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
        font-weight: 600;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        vertical-align: middle;
      }
      img{
        width: 32px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>
