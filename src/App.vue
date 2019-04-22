<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.onresize = this.handleWindowResize
  },
  methods: {
    handleWindowResize () {
      let clientWidth = document.documentElement.clientWidth
      let isMobile = clientWidth < 600
      if (isMobile !== this.$store.state.setting.isMobile) {
        this.$store.commit('setting/setMobile', isMobile)
      }
    }
  }
}
</script>

<style lang="less">
@import "./assets/styles/global.less";
</style>
