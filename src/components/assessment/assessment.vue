<template>
  <div class="assessment">
    <div class="bg">
      <img class="bg-pic" src="http://www.jyxinye.com/attachment/images/155/2018/06/DSKuDWSyZ1eM54QuT1114USksTUu7E.jpg" >
      <div class="wrapper">
        <div class="info">
          <img  src="http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg" alt="">
          <div class="info-name">
            <div class="name">黄静</div>
            <div class="pingyin">huagnjing</div>
            <div class="zw">职位：一楼前台</div>
          </div>
        </div>
        <div class="adress">
          <div class="font-large">前台接待</div>
          <div class="font-small">北京 北京市 朝阳区</div>
          <div class="font-small">65629999</div>
        </div>
      </div>
    </div>
    <div class="star">
      <div class="left">
        <cube-rate class="rate" :value="4" :max="5" disabled></cube-rate>
        <div class="count"><div>4.00</div></div>
      </div>
      <div class="number">4次评分</div>
    </div>
    <form >
      <div class="member">
        <span>评分 - 黄静</span>
      </div>
      <div class="member-star">
        <cube-rate class="rate" v-model="value" :max="5" ></cube-rate>
        <div class="tip" v-show="value<=3">我要投诉</div>
      </div>
      <div class="checkbox-wrapper"></div>
      <div class="radio-wapper"></div>
      <div class="advise"></div>
      <div class="add-pic"></div>
      <div><button></button></div>
    </form>
  </div>
</template>

<script>
export default {

  data () {
    return {
      value: 2
    }
  },
  watch: {
    value (n, o) {
      console.log(n, o)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="stylus" scoped>
  .assessment
    font-size calc(100vw / 3.75)
    height 100%
    background-color #F6F5F2
    .bg
      position relative
      height 1.6em
      .bg-pic
        width 100%
        height 100%
        color rgba(0,0,0,0.5)
      .wrapper
        position absolute
        top: 0
        left 0
        bottom 0
        right 0
        color #fff
        background: rgba(0,0,0,0.5)
        .info
          position absolute
          display flex
          left 0.1em
          bottom 0.05em
          width 1.6em
          height 0.76em
          img
            display block
            width 0.64em
            height 0.64em
            line-height 0.64em
            margin-right 0.06em
            border 0.02em solid #fff
            border-radius 50%
          .info-name
            margin-top 0.1em
            line-height 0.22em
            .name
              font-weight bold
              font-size 0.16em
            .pingyin,.zw
              font-weight bold
              font-size 0.12em
        .adress
          position absolute
          top 0.05em
          right 0.1em
          margin-top 0.1em
          color #fff
          line-height 0.22em
          .font-large
            font-weight bold
            font-size 0.14em
          .font-small
            font-weight bold
            font-size 0.12em
    .star
      display flex
      align-items center
      justify-content space-between
      width 70%
      margin 0 auto
      height 0.41em
      .left
        display flex
        .rate
          height 0.14em
          width 1em
        .count
          height 0.14em
          line-height 0.14em
          margin-left 0.1em
          padding 0 4px 0
          background-color #fcad3f
          color #fff
          border-radius 4px
          div
            font-size 0.12em
      .number
        font-size 0.12em
        color rgb(102,102,102)
    .member
      position relative
      text-align center
      height 1.4em
      line-height 1.4em
      font-size 0.14em
      &:before
        position absolute
        right 3%
        top 50%
        display block
        font-size 0
        content " "
        clear both
        height 1px
        width 32%
        background-color #dbd9d9
      &:after
        position absolute
        top 50%
        left 3%
        display block
        font-size 0
        content " "
        clear both
        height 1px
        width 32%
        background-color #dbd9d9
      span
        width 30%
        font-size 1em
        color rgb(153,153,153)
    .member-star
      padding-top 0.1em
      display flex
      flex-direction column
      align-items center
      .rate
        >>>.cube-rate-item
          width 47px
          height 47px
          margin 0
          .cube-rate-item-def
            background-size 70%
      .tip
        text-align center
        font-size: 0.14em
        color rgb(252,173,63)
        margin-top 2px
        height 1.6em
        line-height 1.6em
</style>
