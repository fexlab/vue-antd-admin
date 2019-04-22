<template>
  <a-layout-header
    v-show="visible"
    :class="[theme, 'global-header', isFixed]"
    :style="{width: headWidth}">
    <topnav-header
      v-if="isTop && !isMobile"
      :collapsed="collapsed"
      :menuData="menuData"/>
    <top-header
      v-else
      :collapsed="collapsed"
      @onCollapse="handleMenuCollapse"/>
  </a-layout-header>
</template>

<script>
import TopHeader from '../components/header/TopHeader'
import TopnavHeader from '../components/header/TopnavHeader'
export default {
  name: 'GlobalHeader',
  components: { TopHeader, TopnavHeader },
  props: ['collapsed', 'menuData'],
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handScroll, { passive: true })
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handScroll)
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    layout () {
      return this.$store.state.setting.layout
    },
    isTop () {
      return this.layout === 'topmenu'
    },
    theme () {
      return this.layout === 'sidemenu' ? 'light' : this.$store.state.setting.theme
    },
    isFixed () {
      return this.$store.state.setting.fixedHeader ? 'is-fixed' : null
    },
    headWidth () {
      let { isMobile, fixedHeader, layout } = this.$store.state.setting
      if (isMobile || !fixedHeader || layout === 'topmenu') {
        return '100%'
      }
      return this.collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)'
    },
    autoHideHeader () {
      return this.$store.state.setting.autoHideHeader
    }
  },
  methods: {
    handleMenuCollapse () {
      this.$emit('toggleCollapse')
    },
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    },
    handScroll () {
      if (!this.autoHideHeader) {
        return
      }
      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (!this.ticking) {
        this.ticking = true
        if (this.oldScrollTop > scrollTop) {
          this.visible = true
        } else if (scrollTop > 300 && this.visible) {
          this.visible = false
        } else if (scrollTop < 300 && !this.visible) {
          this.visible = true
        }
        this.oldScrollTop = scrollTop
        this.ticking = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.global-header {
  position: relative;
  height: @layout-header-height;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  &.dark {
    background: #001529;
  }

  &.is-fixed {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: width .2s;
  }
}
</style>
