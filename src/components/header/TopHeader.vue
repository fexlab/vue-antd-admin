<template>
  <div :class="['top-header', layout]">
    <router-link
      v-if="isMobile"
      to="/"
      :class="['logo', theme]">
      <img
        width="32"
        src="../../assets/logo.svg">
    </router-link>
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapse"/>

    <div :class="['right', theme]">
      <header-search class="action search"/>
      <a-tooltip
        class="action"
        title="帮助文档"
        placement="bottom">
        <a>
          <a-icon type="question-circle-o"/>
        </a>
      </a-tooltip>
      <header-notice class="action"/>
      <header-avatar class="action account"/>
    </div>
  </div>
</template>

<script>
import HeaderSearch from './HeaderSearch'
import HeaderNotice from './HeaderNotice'
import HeaderAvatar from './HeaderlAvatar'
export default {
  name: 'Header',
  components: { HeaderAvatar, HeaderNotice, HeaderSearch },
  props: ['collapsed'],
  data () {
    return {
    }
  },

  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    layout () {
      return this.$store.state.setting.layout
    },
    theme () {
      return this.layout === 'sidemenu' ? 'light' : this.$store.state.setting.theme
    }
  },

  watch: {
  },

  created () {
  },

  mounted () {
  },

  methods: {
    toggleCollapse () {
      this.$emit('onCollapse')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@pro-header-hover-bg: rgba(0, 0, 0, 0.025);

.top-header {
  position: relative;
  height: @layout-header-height;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .logo {
    display: inline-block;
    height: @layout-header-height;
    padding: 0 0 0 24px;
    font-size: 20px;
    line-height: @layout-header-height;
    vertical-align: top;
    cursor: pointer;
    img {
      display: inline-block;
      vertical-align: middle;
    }
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

.trigger {
  height: @layout-header-height;
  padding: ~'calc((@{layout-header-height} - 20px) / 2)' 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  &:hover {
    background: @pro-header-hover-bg;
  }
}

@media only screen and (max-width: @screen-md) {
  .header {
    :global(.ant-divider-vertical) {
      vertical-align: unset;
    }
    i.trigger {
      padding: 22px 12px;
    }
    &-logo {
      position: relative;
      padding-right: 12px;
      padding-left: 12px;
    }
    &-right {
      position: absolute;
      top: 0;
      right: 12px;
      background: #fff;
      .account {
        .avatar {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
