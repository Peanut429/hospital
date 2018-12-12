<template>
    <div class="home">
      <!-- title -->
      <h3 class="header">薇琳满意度调查</h3>
      <!-- banner -->
      <cube-slide :data=banner class="banner">
        <cube-slide-item class="banner-item" v-for="(item, index) in banner" :key="index">
          <img :src="item.image">
        </cube-slide-item>
        <template slot="dots" slot-scope="props">
          <span class="my-dot" :class="{active: props.current === key}" v-for="(value, key) in  props.dots" :key="key"></span>
        </template>
      </cube-slide>
      <!-- assessment -->
      <div class="assessment">
        <div class="logo">
          <img src="../assets/images/dlogo.png"><span>医院整体评价</span>
        </div>
        <div class="stars">
          <div class="star-wrapper">
            <span
              class="iconfont"
              :class="[starNumber > index ? 'icon-star-on' : 'icon-star-off']"
              v-for="(item, index) in 5"
              :key="index"
              @click="rate(index)"
            ></span>
          </div>
          <span class="rate_name">{{rateName}}</span>
        </div>
      </div>
      <!-- comment -->
      <div class="comment">
        <cube-textarea
          class="comment_input"
          v-model="comment"
          :indicator="false"
          :maxlength="Infinity"
          placeholder="您的建议是我们不断完善的重要前提，说说薇琳医美的优点和美中不足的地方"
        ></cube-textarea>
        <div class="submit">
          <div class="left">
            <label class="choose_pic">
              <input type="file" style="display: none">
            </label>
            <cube-checkbox v-model="anonymous">匿名</cube-checkbox>
          </div>
          <div class="right">
            <cube-button :primary="true">点击提交</cube-button>
          </div>
        </div>
      </div>
      <!-- Consulting Services -->
      <Title title="服务咨询"></Title>
      <div class="list">
        <Card class="list-item" v-for="(item, index) in consultingServices" :key="index" :data="item"></Card>
      </div>
      <!-- Health Services -->
      <Title title="卫生服务"></Title>
      <div class="list">
        <Card class="list-item" :class="[index < healthServices.length - 2 ? 'border-bottom-1px' : '']" v-for="(item, index) in healthServices" :key="index" :data="item"></Card>
      </div>
    </div>
</template>

<script>
import Title from './title'
import Card from './card'
import banner1 from 'images/banner_1.jpg'
import banner2 from 'images/banner_2.jpg'
import banner3 from 'images/banner_3.jpg'
import qt from 'images/qt.png'
import kf from 'images/kf.png'
import wk from 'images/wk.png'
import zs from 'images/zs.png'
import pfk from 'images/pfk.png'
import wyh from 'images/wyh.png'
import yk from 'images/yk.png'
import hl from 'images/hl.png'
export default {
  components: { Title, Card },
  data () {
    return {
      banner: [
        { image: banner1 },
        { image: banner2 },
        { image: banner3 }
      ],
      starNumber: 5,
      rateNames: ['非常差', '差', '一般', '满意', '非常满意'],
      comment: '',
      anonymous: false,
      consultingServices: [
        { name: '前台接待', link: 'https://www.baidu.com', pic: qt, color: '#f39542', width: '84%' },
        { name: '客服部', link: '', pic: kf, color: '#f7bd40', width: '60%' }
      ],
      healthServices: [
        { name: '美容外科', link: '', pic: wk, color: '#55c27e', width: '50%' },
        { name: '微整科', link: '', pic: zs, color: '#44b790', width: '50%' },
        { name: '美容皮肤科', link: '', pic: pfk, color: '#12b5c4', width: '50%' },
        { name: '维颜会', link: '', pic: wyh, color: '#5892bf', width: '50%' },
        { name: '美容牙科', link: '', pic: yk, color: '#c768d5', width: '50%' },
        { name: '病房护理', link: '', pic: hl, color: '#bf589c', width: '50%' }
      ]
    }
  },
  computed: {
    rateName () {
      return this.rateNames[this.starNumber - 1]
    }
  },
  methods: {
    rate (index) {
      this.starNumber = index + 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  font-family '微软雅黑'
  .header
    height 42px
    line-height 42px
    color: #fff
    text-align center
    font-size: 20.5078px
    background-color: #ff5000
  .banner
    width: 100%
    .banner-item
      width 100%
      img
        display block
        width: 100%
    .my-dot
      margin-right 10px
      margin-bottom 20px
      width 8px
      height 8px
      border-radius 50%
      &.active
        background-color #ff5000
  .assessment
    display flex
    justify-content space-between
    align-items center
    width: 94%
    height 25px
    padding-top 10px
    margin 0 auto
    overflow hidden
    .logo
      display flex
      align-items center
      font-size 18px
      height 25px
      color #000
      img
        width 25px
        flex-grow 0
        flex-shrink 0
        margin-right 10px
    .stars
      display flex
      align-items center
      font-size 16px
      .iconfont
        margin-right 5px
        font-size 20px
        color #ffb800
      .rate_name
        width: 64px
        flex-grow 0
        flex-shrink 0
        text-align center
  .comment
    .comment_input
      height 110px
      &.cube-textarea-wrapper::after
        border: none
    .submit
      display flex
      justify-content space-between
      align-items flex-end
      width 94%
      margin 0 auto
      padding-bottom 5px
      .left
        display flex
        align-items flex-end
        .choose_pic
          display block
          width 60px
          height 60px
          border-radius 8px
          border 1px solid #ddd
          background-image url('../assets/images/dtp.png')
          background-repeat no-repeat
          background-size cover
          background-position center
      .right
        .cube-btn-primary
          height 44px
          padding 0 16px
          background #ff5000
          border-radius 10px
  .list
    display flex
    flex-wrap wrap
    &-item
      width: 50%
      flex-grow 0
      flex-shrink 0
      border-color #ccc
</style>
