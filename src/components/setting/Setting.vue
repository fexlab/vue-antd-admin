<template>
  <a-drawer
    placement="right"
    width="300"
    :closable="false"
    @close="togglerContent"
    :visible="collapsed">
    <div
      slot="handle"
      class="setting"
      @click="togglerContent">
      <a-icon :type="collapsed ? 'close' : 'setting'"/>
    </div>
    <div class="setting-drawer-index-content">
      <setting-item title="整体风格设置">
        <img-checkbox-group @change="setTheme">
          <img-checkbox
            img="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
            :checked="true"
            value="dark"/>
          <img-checkbox
            img="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
            value="light"/>
        </img-checkbox-group>
      </setting-item>
      <setting-item title="主题色">
        <color-checkbox-group @change="onColorChange" :defaultValues="['daybreak']" :multiple="false">
          <color-checkbox
            v-for="item in colorList"
            :key="item.key"
            :color="item.color"
            :value="item.key" />
        </color-checkbox-group>
      </setting-item>
      <a-divider/>
      <setting-item title="导航设置">
        <img-checkbox-group @change="setLayout">
          <img-checkbox
            img="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
            :checked="layout === 'sidemenu'"
            value="sidemenu"/>
          <img-checkbox
            img="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
            :checked="layout === 'topmenu'"
            value="topmenu"/>
        </img-checkbox-group>
      </setting-item>
      <setting-item>
        <a-list :split="false">
          <a-list-item>
            栅格模式
            <a-select
              size="small"
              :value="contentWidth"
              slot="actions"
              style="width: 80px"
              @change="setContentWidth">
              <a-select-option value="fluid">流式</a-select-option>
              <a-select-option v-if="layout === 'topmenu'" value="fixed">定宽</a-select-option>
            </a-select>
          </a-list-item>
          <a-list-item>
            固定Header
            <a-switch
              slot="actions"
              size="small"
              :defaultChecked="fixedHeader"
              @change="setHeader" />
          </a-list-item>
          <a-list-item>
            下滑时隐藏 Header
            <a-switch
              slot="actions"
              size="small"
              :disabled="!fixedHeader"
              :checked="autoHideHeader"
              @change="setAutoHideHeader" />
          </a-list-item>
          <a-list-item>
            固定Siderbar
            <a-switch
              slot="actions"
              size="small"
              :defaultChecked="fixedSidebar"
              @change="setSidebar"/>
          </a-list-item>
        </a-list>
      </setting-item>
      <a-divider />
      <setting-item title="其他设置">
        <a-list :split="false">
          <a-list-item>
            色弱模式
            <a-switch slot="actions" size="small" @change="setColorWeak" />
          </a-list-item>
          <a-list-item>
            显示抽屉按钮
            <a-switch slot="actions" size="small" />
          </a-list-item>
        </a-list>
      </setting-item>
    </div>
  </a-drawer>
</template>

<script>
import SettingItem from './SettingItem'
import ColorCheckbox from '../checkbox/ColorCheckbox'
import ImgCheckbox from '../checkbox/ImgCheckbox'
const ColorCheckboxGroup = ColorCheckbox.Group
const ImgCheckboxGroup = ImgCheckbox.Group
const colorList = [
  {
    key: 'dust',
    color: '#F5222D'
  },
  {
    key: 'volcano',
    color: '#FA541C'
  },
  {
    key: 'sunset',
    color: '#FAAD14'
  },
  {
    key: 'cyan',
    color: '#13C2C2'
  },
  {
    key: 'green',
    color: '#52C41A'
  },
  {
    key: 'daybreak',
    color: '#1890FF'
  },
  {
    key: 'geekblue',
    color: '#2F54EB'
  },
  {
    key: 'purple',
    color: '#722ED1'
  }
]
export default {
  name: 'Setting',
  components: { ImgCheckboxGroup, ImgCheckbox, ColorCheckboxGroup, ColorCheckbox, SettingItem },
  data () {
    return {
      colorList,
      collapsed: false
    }
  },
  computed: {
    layout () {
      return this.$store.state.setting.layout
    },
    contentWidth () {
      return this.$store.state.setting.contentWidth
    },
    fixedHeader () {
      return this.$store.state.setting.fixedHeader
    },
    autoHideHeader () {
      return this.$store.state.setting.autoHideHeader
    },
    fixedSidebar () {
      return this.$store.state.setting.fixedSidebar
    }
  },
  methods: {
    togglerContent () {
      this.collapsed = !this.collapsed
    },
    onColorChange (values, colors) {
      if (colors.length > 0) {
        this.$message.info(`您选择了主题色 ${colors}`)
      }
    },
    setTheme (values) {
      this.$store.commit('setting/setTheme', values[0])
    },
    setLayout (values) {
      this.$store.commit('setting/setLayout', values[0])
      if (values[0] === 'sidemenu') {
        this.setContentWidth('fluid')
      }
    },
    setContentWidth (value) {
      this.$store.commit('setting/setContentWidth', value)
    },
    setHeader (value) {
      this.$store.commit('setting/setFixedHeader', value)
      if (!value) {
        this.setAutoHideHeader(value)
      }
    },
    setAutoHideHeader (value) {
      this.$store.commit('setting/setAutoHideHeader', value)
    },
    setSidebar (value) {
      this.$store.commit('setting/setFixedSidebar', value)
    },
    setColorWeak (value) {
      document.querySelector('html').className = value ? 'colorWeak' : ''
      // this.$store.commit('setting/setColorWeak', value)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.setting {
  position: absolute;
  top: 240px;
  right: 300px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: @primary-color;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;

  > i {
    color: #fff;
    font-size: 20px;
  }
}
.setting-drawer-index-content {
  position: relative;
  min-height: 100%;
  background: #fff;
}
</style>
