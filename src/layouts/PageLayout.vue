<template>
  <div style="margin: -24px -24px 0px">
    <page-header :breadcrumb="breadcrumb" :title="title" :logo="logo" :avatar="avatar">
      <slot name="action"  slot="action"></slot>
      <slot slot="content" name="headerContent"></slot>
      <div slot="content" v-if="!this.$slots.headerContent && desc">
        <p style="font-size: 14px; line-height: 1.5;color: rgba(0,0,0,.65)">{{desc}}</p>
        <div v-if="linkList && linkList.length" class="link">
          <template v-for="(link, index) in linkList">
            <a :key="index" :href="link.href"><a-icon :type="link.icon" />{{link.title}}</a>
          </template>
        </div>
      </div>
      <slot slot="extra" name="extra"></slot>
    </page-header>

    <div
      ref="page"
      :class="['page-content', layout]">
      <div
        :class="['page-content-main', contentWidth === 'fixed' ? 'page-content-wide' : '']">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/page/PageHeader'
export default {
  name: 'PageLayout',
  components: { PageHeader },
  props: ['desc', 'logo', 'title', 'avatar', 'linkList', 'extraImage'],
  data () {
    return {
      breadcrumb: []
    }
  },
  computed: {
    layout () {
      return this.$store.state.setting.layout
    },
    contentWidth () {
      return this.$store.state.setting.contentWidth
    }
  },
  mounted () {
    this.getBreadcrumb()
  },
  updated () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadcrumb = this.$route.matched
    }
  }
}
</script>

<style lang="less" scoped>
.page-header {
  background: #fff;
  padding: 16px 32px 0;
  border-bottom: 1px solid #e8e8e8;
  .page-header-wide {
    &.head {
      margin: auto;
      max-width: 1400px;
    }
    &.side {
    }
    .breadcrumb {
      margin-bottom: 16px;
    }
  }
}
.link {
  margin-top: 16px;
  line-height: 24px;
  a {
    font-size: 14px;
    margin-right: 32px;
    i {
      font-size: 22px;
      margin-right: 8px;
      vertical-align: middle;
    }
  }
}
.page-content {
  margin: 24px 24px 0;
  &.side {
    margin: 24px 24px 0px;
  }
  &.head {
    margin: 24px auto 0;
    max-width: 1400px;
  }
  &-wide {
    max-width: 1200px;
    margin: auto;
    padding-left: 0;
  }
}
</style>
