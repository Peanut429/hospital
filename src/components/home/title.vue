<template>
  <div class="title">
    <span class="line">|</span>{{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  padding 3%
  font-size 14px
  color #555
  font-weight bold
  background-color #ededed
  .line
    padding-right 2%
    color: #ff5000
    font-size 17px
</style>
