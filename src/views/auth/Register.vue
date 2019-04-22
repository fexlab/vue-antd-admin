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
      <div class="register">
        <h3>
          <span>注册</span>
        </h3>
        <a-form
          :form="form"
          @submit="onSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
                'name',
                {rules: [{ required: true, message: '请输入邮箱地址', whitespace: true}]}
              ]"
              size="large"
              placeholder="邮箱"/>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码', whitespace: true}]}
              ]"
              size="large"
              placeholder="至少6位密码，区分大小写"
              type="password"/>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'comfirmpassword',
                {rules: [{ required: true, message: '请输入密码', whitespace: true}]}
              ]"
              size="large"
              placeholder="确认密码"
              type="password"/>
          </a-form-item>
          <a-form-item>
            <a-input-group
              v-decorator="[
                'mobile',
                {rules: [{ required: true, message: '请输入手机号', whitespace: true}]}
              ]"
              compact>
              <a-select size="large" defaultValue="86">
                <a-select-option value="86">+86</a-select-option>
                <a-select-option value="87">+87</a-select-option>
              </a-select>
              <a-input
                size="large"
                placeholder="手机号"
                style="width: 80%"/>
            </a-input-group>
          </a-form-item>
          <a-form-item>
            <a-row
              :gutter="8"
              style="margin: 0 -4px">
              <a-col :span="16">
                <a-input
                  v-decorator="[
                    'captcha',
                    {rules: [{ required: true, message: '请输入验证码', whitespace: true}]}
                  ]"
                  size="large"
                  placeholder="验证码"/>
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
          <a-form-item>
            <a-button
              :loading="logging"
              style="width: 50%;"
              size="large"
              html-type="submit"
              type="primary">
              注册
            </a-button>
            <router-link
              style="float: right"
              to="/login">
              使用已有账户登录
            </router-link>
          </a-form-item>
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
  name: 'Register',
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
          this.logging = false
          this.$router.push('/login')
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
      .register {
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
