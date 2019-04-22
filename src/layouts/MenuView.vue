<template>
  <global-layout>
    <transition name="page-toggle">
      <router-view/>
    </transition>
  </global-layout>
</template>

<script>
import GlobalLayout from './GlobalLayout'
export default {
  name: 'MenuView',
  components: { GlobalLayout },
  computed: {
    contentWidth () {
      return this.$store.state.setting.contentWidth
    }
  }
}
</script>

<style scoped>
</style>
