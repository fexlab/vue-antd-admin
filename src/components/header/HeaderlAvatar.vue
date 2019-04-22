<template>
  <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial">
    <span style="cursor: pointer">
      <a-avatar
        class="avatar"
        size="small"
        shape="circle"
        :src="currUser.avatar"/>
      <span class="name">{{ currUser.name }}</span>
    </span>
    <a-menu
      slot="overlay"
      style="width: 150px">
      <a-menu-item>
        <a-icon type="user"/>
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting"/>
        <span>个人设置</span>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item>
        <router-link to="/login">
          <a-icon type="logout" style="min-width: 12px; margin-right: 8px;"/>
          <span>退出登录</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderAvatar',
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: hsla(0,0%,100%,.85);
  vertical-align: middle;
}
@media only screen and (max-width: @screen-md) {
  .name {
    display: none;
  }
}
</style>
