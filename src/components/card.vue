<template>
  <div @click="link(data.link)" class="card">
    <div class="pic" :style="{backgroundColor: data.color}">
      <img :src="data.pic" :style="{width: data.width}">
    </div>
    <span>{{data.name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    link (url) {
      if (!url) return
      window.location.href = url
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  display flex
  align-items center
  padding 5% 4%
  padding-right 0
  box-sizing border-box
  .pic
    flex-grow 0
    flex-shrink 0
    display flex
    justify-content center
    align-items center
    margin-right 10px
    width 60px
    height 60px
    text-align center
    border-radius 50%
    overflow hidden
    img
      width 50px
  span
    color #666
    font-weight bold
</style>
