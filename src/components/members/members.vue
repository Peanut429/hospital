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
    <div class="member-list">
      <div class="member" v-for="(list, index) in memberList" :key="index">
        <MemberCard :info="list"></MemberCard>
      </div>
    </div>
  </div>
</template>

<script>
import MemberCard from './member_card'
export default {
  data () {
    return {
      lists: 9,
      memberList: [
        { id: '1', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '黄金', pingyin: 'adsf', job: '前台接待-一楼前台', rate: 3 },
        { id: '2', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '白银', pingyin: 'asdfga', job: '前台接待-一楼前台', rate: 3 },
        { id: '3', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '青铜', pingyin: 'gdfgh', job: '前台接待-一楼前台', rate: 3 },
        { id: '4', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '黑铁', pingyin: 'hfgh', job: '前台接待-一楼前台', rate: 3 },
        { id: '5', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: 'XXXX', pingyin: 'yui', job: '前台接待-一楼前台', rate: 3 },
        { id: '6', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '张三', pingyin: 'ghjk', job: '前台接待-一楼前台', rate: 3 },
        { id: '7', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '李四', pingyin: 'erty', job: '前台接待-一楼前台', rate: 3 },
        { id: '8', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '王五', pingyin: 'ghnm', job: '前台接待-一楼前台', rate: 3 },
        { id: '9', avatar: 'http://www.jyxinye.com/attachment/images/155/2018/10/ouU5SzKL4L6666F764z3ST44fFLs4u.jpeg', name: '猪', pingyin: 'iol', job: '前台接待-一楼前台', rate: 3 }
      ], 
    }
  },
  components: {
    MemberCard
  }
}
</script>

<style lang="stylus" scoped>
  .members
    height 100%
    background-color #F6F5F2
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
    .member-list
      display flex
      flex-wrap wrap
      justify-content space-between
      height 100%
      margin 0 20px
      .member
        flex-grow 0
        flex-shrink 0
        width 43%
        margin 3%
        border 1px solid #f1f1f1
        box-shadow 0 0 8px rgba(81, 81,81,0.1)
</style>
