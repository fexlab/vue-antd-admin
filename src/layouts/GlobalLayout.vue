<template>
  <a-layout>
    <a-drawer
      v-if="isMobile"
      placement="left"
      width="256"
      :closable="false"
      @close="toggleCollapse"
      :visible="collapsed"
      wrapClassName="drawer-sidemenu">
      <sider-menu
        :theme="theme"
        :menu-data="menuData"
        :collapsed="isMobile ? false : collapsed"
        :collapsible="false"
        @menuSelect="onMenuSelect"/>
    </a-drawer>

    <sider-menu
      v-else-if="layout === 'sidemenu'"
      :theme="theme"
      :menu-data="menuData"
      :collapsed="collapsed"
      :collapsible="true"/>

    <setting/>

    <a-layout :style="{
        paddingTop: paddingTop,
        paddingLeft: paddingLeft
      }">
      <global-header
        :menu-data="menuData"
        :collapsed="collapsed"
        @toggleCollapse="toggleCollapse"/>
      <a-layout-content
        :style="{
          minHeight: minHeight,
          margin: '24px 24px 0'
        }">
        <slot/>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer
          :link-list="linkList"
          :copyright="copyright"/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import SiderMenu from '../components/menu/SiderMenu'
import Setting from '../components/setting/Setting'
const minHeight = window.innerHeight - 64 - 24 - 122
let menuData = []
export default {
  name: 'GlobalLayout',
  components: { Setting, SiderMenu, GlobalFooter, GlobalHeader },
  data () {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    theme () {
      return this.$store.state.setting.theme
    },
    layout () {
      return this.$store.state.setting.layout
    },
    linkList () {
      return this.$store.state.setting.footerLinks
    },
    copyright () {
      return this.$store.state.setting.copyright
    },
    paddingTop () {
      return this.$store.state.setting.fixedHeader ? '64px' : 0
    },
    paddingLeft () {
      let { fixedSidebar, layout } = this.$store.state.setting
      if (fixedSidebar && layout === 'sidemenu') {
        return this.collapsed ? '80px' : '256px'
      }
      return 0
    }
  },
  beforeCreate () {
    menuData = this.$router.options.routes.find((item) => item.path === '/').children
  },
  methods: {
    toggleCollapse () {
      this.collapsed = !this.collapsed
    },
    onMenuSelect () {
      this.toggleCollapse()
    }
  }
}
</script>

<style lang="less" scoped>
.drawer-sidemenu .ant-drawer-body {
  padding: 0;
}
</style>
