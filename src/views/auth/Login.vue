<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img
            alt="logo"
            class="logo"
            src="@/assets/logo.svg">
          <span class="title">{{ title }}</span>
        </div>
        <div class="desc">
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>
      </div>
      <div class="login">
        <a-form
          :form="form"
          @submit="onSubmit">
          <a-tabs
            size="large"
            :tab-bar-style="{textAlign: 'center'}"
            style="padding: 0 2px;">
            <a-tab-pane
              key="1"
              tab="账户密码登录">
              <a-form-item>
                <a-input
                  v-decorator="[
                    'name',
                    {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}
                  ]"
                  size="large"
                  placeholder="用户名: admin or user">
                  <a-icon
                    slot="prefix"
                    type="user"/>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    {rules: [{ required: true, message: '请输入密码', whitespace: true}]}
                  ]"
                  size="large"
                  placeholder="密码: 888888"
                  type="password">
                  <a-icon
                    slot="prefix"
                    type="lock"/>
                </a-input>
              </a-form-item>
            </a-tab-pane>
            <a-tab-pane
              key="2"
              tab="手机号登录">
              <a-form-item>
                <a-input
                  size="large"
                  placeholder="手机号">
                  <a-icon
                    slot="prefix"
                    type="mobile"/>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-row
                  :gutter="8"
                  style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input
                      size="large"
                      placeholder="验证码">
                      <a-icon
                        slot="prefix"
                        type="mail"/>
                    </a-input>
                  </a-col>
                  <a-col
                    :span="8"
                    style="padding-left: 4px">
                    <a-button
                      style="width: 100%"
                      class="captcha-button"
                      size="large">
                      获取验证码
                    </a-button>
                  </a-col>
                </a-row>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox :checked="true">
              自动登录
            </a-checkbox>
            <a style="float: right">忘记密码</a>
          </div>
          <a-form-item>
            <a-button
              :loading="logging"
              style="width: 100%;margin-top: 24px"
              size="large"
              html-type="submit"
              type="primary">
              登录
            </a-button>
          </a-form-item>
          <div>
            其他登录方式
            <a-icon
              class="icon"
              type="alipay-circle"/>
            <a-icon
              class="icon"
              type="taobao-circle"/>
            <a-icon
              class="icon"
              type="weibo-circle"/>
            <router-link
              style="float: right"
              to="/register">
              注册账户
            </router-link>
          </div>
        </a-form>
      </div>
    </div>
    <global-footer
      :link-list="linkList"
      :copyright="copyright"/>
  </div>
</template>

<script>
import GlobalFooter from '@/layouts/GlobalFooter'

export default {
  name: 'Login',
  components: { GlobalFooter },
  data () {
    return {
      logging: false
    }
  },

  computed: {
    title () {
      return this.$store.state.setting.title
    },
    linkList () {
      return this.$store.state.setting.footerLinks
    },
    copyright () {
      return this.$store.state.setting.copyright
    }
  },

  watch: {
  },

  beforeCreate () {
    this.form = this.$form.createForm(this)
  },

  created () {
  },

  mounted () {
  },

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true
          this.$store.commit('account/setuser', {
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
            name: 'Cafe'
          })
          this.$router.push('/dashboard/workplace')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
    background-size: 100%;
    .content {
      padding: 32px 0;
      flex: 1;
      @media (min-width: 768px){
        padding: 112px 0 24px;
      }
      .top {
        text-align: center;
        .header {
          height: 44px;
          line-height: 44px;
          a {
            text-decoration: none;
          }
          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
          }
          .title {
            font-size: 33px;
            color: rgba(0,0,0,.85);
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0,0,0,.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }
      .login{
        width: 388px;
        margin: 0 auto;
        @media screen and (max-width: 576px) {
          width: 95%;
        }
        @media screen and (max-width: 320px) {
          .captcha-button{
            font-size: 14px;
          }
        }
        .icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
</style>
