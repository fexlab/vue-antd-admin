<template>
  <div class="exception">
    <div class="img">
      <!-- <img :src="config[type].img" /> -->
      <div class="ele" :style="{backgroundImage: `url(${config[type].img})`}"/>
    </div>
    <div class="content">
      <h1>{{config[type].title}}</h1>
      <div class="desc">{{config[type].desc}}</div>
      <div class="actions">
        <a-button type="primary" >返回首页</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Config from './typeConfig'
export default {
  name: 'ExceptionPage',
  props: ['type'],
  data () {
    return {
      config: Config
    }
  }
}
</script>

<style lang="less" scoped>
  .exception {
    display: flex;
    align-items: center;
    height: 80%;
    min-height: 500px;
    min-height: 500px;
    height: 80%;
    .img {
      flex: 0 0 62.5%;
      width: 62.5%;
      padding-right: 152px;
      zoom: 1;
      .ele {
        float: right;
        width: 100%;
        max-width: 430px;
        height: 360px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
      }
    }
    .content{
      flex: auto;
      h1 {
        margin-bottom: 24px;
        color: #434e59;
        font-weight: 600;
        font-size: 72px;
        line-height: 72px;
      }
      .desc {
        color: rgba(0,0,0,.45);
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .exception .img {
      padding-right: 88px;
    }
  }
</style>
