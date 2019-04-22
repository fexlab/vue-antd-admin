<template>
  <div class="topnav-header">
    <div :class="[ 'topnav-header-main', contentWidth === 'fixed' ? 'wide' : '' ]">
      <div class="left">
        <div class="logo">
          <router-link
            to="/">
            <img src="../../assets/logo.svg" alt="logo">
            <h1>{{title}}</h1>
          </router-link>
        </div>

        <div :style="{ maxWidth }">
          <i-menu
            class="menu"
            :theme="theme"
            mode="horizontal"
            :collapsed="collapsed"
            :menu-data="menuData"
            @select="onSelect"/>
        </div>
      </div>

      <div class="right">
        <header-search class="action search"/>
        <a-tooltip
          title="帮助文档"
          placement="bottom">
          <a class="action">
            <a-icon type="question-circle-o"/>
          </a>
        </a-tooltip>
        <header-notice class="action"/>
        <header-avatar class="action account"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from './HeaderSearch'
import HeaderNotice from './HeaderNotice'
import HeaderAvatar from './HeaderlAvatar'
import IMenu from '../menu/menu'
export default {
  name: 'TopnavHeader',
  components: { HeaderAvatar, HeaderNotice, HeaderSearch, IMenu },
  props: ['collapsed', 'menuData'],

  computed: {
    layout () {
      return this.$store.state.setting.layout
    },
    theme () {
      return this.layout === 'sidemenu' ? 'light' : this.$store.state.setting.theme
    },
    title () {
      return this.$store.state.setting.title
    },
    contentWidth () {
      return this.$store.state.setting.contentWidth
    },
    maxWidth () {
      return (this.contentWidth === 'fixed' && window.innerWidth > 1200 ? 1200 : window.innerWidth) - 275 - 120 - 40 + 'px'
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
@import '~ant-design-vue/lib/style/themes/default.less';
@pro-header-hover-bg: rgba(0, 0, 0, 0.025);

.topnav-header {
  position: relative;
  width: 100%;
  height: @layout-header-height;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: background 0.3s, width 0.2s;
  :global {
    .ant-menu-submenu.ant-menu-submenu-horizontal {
      height: 100%;
      line-height: @layout-header-height;
      .ant-menu-submenu-title {
        height: 100%;
      }
    }
  }
  &.light {
    background-color: #fff;
  }
  &-main {
    display: flex;
    height: @layout-header-height;
    padding-left: 24px;
    &.wide {
      max-width: 1200px;
      margin: auto;
      padding-left: 0;
    }
    .left {
      display: flex;
      flex: 1;
    }
    .right {
      float: right;
      height: 100%;
      overflow: hidden;
      .action {
        display: inline-block;
        height: 100%;
        padding: 0 12px;
        cursor: pointer;
        transition: all 0.3s;
        > i {
          color: @text-color;
          vertical-align: middle;
        }
        &:hover {
          background: @pro-header-hover-bg;
        }
        &:global(.opened) {
          background: @pro-header-hover-bg;
        }
      }
      .search {
        padding: 0 12px;
        &:hover {
          background: transparent;
        }
      }
      .account {
        .avatar {
          margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0;
          margin-right: 8px;
          color: @primary-color;
          vertical-align: top;
          background: rgba(255, 255, 255, 0.85);
        }
      }
    }
  }

  .logo {
    position: relative;
    width: 165px;
    height: @layout-header-height;
    overflow: hidden;
    line-height: @layout-header-height;
    transition: all 0.3s;
    img {
      display: inline-block;
      height: 32px;
      vertical-align: middle;
    }
    h1 {
      display: inline-block;
      margin: 0 0 0 12px;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      vertical-align: top;
    }
  }

  .menu {
    height: @layout-header-height;
    line-height: @layout-header-height;
    border: none;

    :global(.anticon) {
      margin-right: 8px;
    }
    :global(.ant-dropdown-menu-item) {
      min-width: 160px;
    }
  }
}

.light {
  .logo {
    h1 {
      color: #002140;
    }
  }
}

.dark {
  height: @layout-header-height;
  .right {
    .action {
      color: rgba(255, 255, 255, 0.85);
      > i {
        color: rgba(255, 255, 255, 0.85);
      }
      &:hover,
      &:global(.opened) {
        background: @primary-color;
      }
      :global(.ant-badge) {
        color: rgba(255, 255, 255, 0.85);
      }
    }
  }
}
</style>
