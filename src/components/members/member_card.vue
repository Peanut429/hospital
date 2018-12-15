<template>
 <div class="card">
     <router-link :to="{path: `assessment/${info.id}`}" class="card-contnt">
       <dl>
         <dd class="card-pic"><img :src="info.avatar" ></dd>
         <dt class="card-name">{{info.name}}</dt>
         <dt class="card-zh">{{info.pingyin}}</dt>
         <dt class="reception">{{info.job}}</dt>
         <dt class="card-dj">点击评价</dt>
       </dl>
       <div class="star">
         <cube-rate class="rate" :value="info.rate" :max="5" disabled></cube-rate>
       </div>
     </router-link>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      value: 3
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .card
    .card-contnt
      display block
      text-align center
      .card-pic
        margin-top 8px
        width: 27vw
        height 27vw
        margin 0 auto
        border-radius 50%
        border 5px solid rgb(255,214,195)
        overflow hidden
        img
          display block
          width 100%
          height 100%
      .card-name
        display block
        height 7vw
        line-height 7vw
        font-size 6vw
        padding-top 8px
        color rgb(102,102,102)
      .card-zh
        display block
        padding-top 2px
        height 4vw
        line-height 4vw
        font-size 12px
        color rgb(182,182,182)
      .reception
        display block
        padding-top 8px
        height 5.5vw
        line-height 5.5vw
        font-size 4.2vw
        color rgb(182,182,182)
      .card-dj
        font-size 4vw
        width 27vw
        height 5vw
        line-height 5vw
        padding 1vw
        margin 12px auto 6px
        border-radius 21px
        text-align center
        color #fff
        background -webkit-linear-gradient(#F4A460, #FF4500)
    .star
      display flex
      align-items center
      width 70%
      margin 0 auto
      height 41px

</style>
