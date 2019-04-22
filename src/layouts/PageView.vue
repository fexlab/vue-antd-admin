<template>
  <page-layout
    :desc="desc"
    :title="title"
    :link-list="linkList">
    <div
      v-if="extraImage"
      slot="extra"
      class="extraImg">
      <img :src="extraImage">
    </div>
    <transition name="page-toggle">
      <router-view ref="page"/>
    </transition>
  </page-layout>
</template>

<script>
import PageLayout from './PageLayout'
export default {
  name: 'PageView',
  components: { PageLayout },
  data () {
    return {
      title: '',
      desc: '',
      linkList: [],
      extraImage: ''
    }
  },
  mounted () {
    this.getPageHeaderInfo()
  },
  updated () {
    this.getPageHeaderInfo()
  },
  methods: {
    getPageHeaderInfo () {
      this.title = this.$route.name
      const page = this.$refs.page
      if (page) {
        this.desc = page.desc
        this.linkList = page.linkList
        this.extraImage = page.extraImage
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .extraImg{
    margin-top: -60px;
    text-align: center;
    width: 195px;
    img{
      width: 100%;
    }
  }
</style>
