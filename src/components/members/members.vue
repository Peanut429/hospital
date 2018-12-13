<template>
  <div class="members">
    <div class="bg">
      <img src="http://www.jyxinye.com/attachment/images/155/2018/06/DSKuDWSyZ1eM54QuT1114USksTUu7E.jpg" >
      <div class="wrapper">
        <div class="content">
          <div style="font-size: 16px">前台接待</div>
          <div>北京 北京市 朝阳区东直门外大街12号</div>
          <div>65629999</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bg: [
        { url: 'http://www.jyxinye.com/attachment/images/155/2018/06/DSKuDWSyZ1eM54QuT1114USksTUu7E.jpg' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .members
    height 100%
    .bg
      position relative
      height 160px
     img
        width 100%
        height 100%
        color rgba(0,0,0,0.2)
    .wrapper
      position absolute
      top: 0
      left 0
      bottom 0
      right 0
      display flex
      flex-direction column-reverse
      padding-bottom 5px
      color #fff
      box-sizing border-box
      background: rgba(0,0,0,0.2)
      .content
        padding-left 10px
        line-height 23px
        font-weight 700
        font-size 12px
</style>
