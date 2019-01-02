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
    <form style="line-height:0">
      <div class="member">
        <span>评分 - 黄静</span>
      </div>
      <div class="member-star">
        <cube-rate class="rate" v-model="value" :max="5" ></cube-rate>
        <div class="tip" v-show="value<=3">我要投诉</div>
        <div class="star-top">
          <!-- <div class="top-1">服务热情</div>
          <div class="top-2">效果满意</div>
          <div class="top-1">很专业</div> -->
          <div
            v-for="(item, index) in list"
            :key="index"
            :class="[index === 1 ? 'top-2' : 'top-1', collect.indexOf(item.id) > -1 ? 'active' : '']"
            v-show="index < 3"
            @click="choose(item.id)"
          >{{item.name}}</div>
        </div>
        <div class="star-top star-bottom">
          <!-- <div class="top-1">环境高端</div>
          <div class="top-2">性价比高</div>
          <div class="top-1">人很漂亮</div> -->
          <div
            v-for="(item, index) in list"
            :key="index"
            :class="[index === 4 ? 'top-2' : 'top-1', collect.indexOf(item.id) > -1 ? 'active' : '']"
            v-show="index >= 3"
            @click="choose(item.id)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="radio-wrapper">
        <div class="title-1">
          <p>1. 前台接待人员仪容仪表是否整洁标准</p>
          <label class="select">
            <input type="radio" name="item0" value="满意" >
            <div class="radio"></div>
            <span>满意</span>
          </label>
          <label class="select">
            <input type="radio" name="item0" value="不满意">
            <div class="radio"></div>
            <span>不满意</span>
          </label>
        </div>
        <div class="title-2">
          <p>2. 到院后前台人员是否有大声说笑 态度冷漠 低头玩手机等</p>
          <label class="select">
            <input type="radio" name="item1" value="满意" >
            <div class="radio"></div>
            <span>满意</span>
          </label>
          <label class="select">
            <input type="radio" name="item1" value="不满意">
            <div class="radio"></div>
            <span>不满意</span>
          </label>
        </div>
        <div class="title-3">
          <p>2. 到院后前台人员是否有大声说笑 态度冷漠 低头玩手机等</p>
          <label class="select">
            <input type="radio" name="item2" value="满意" >
            <div class="radio"></div>
            <span>满意</span>
          </label>
          <label class="select">
            <input type="radio" name="item2" value="不满意">
            <div class="radio"></div>
            <span>不满意</span>
          </label>
        </div>
        <div class="title-4">
          <p>2. 到院后前台人员是否有大声说笑 态度冷漠 低头玩手机等</p>
          <label class="select">
            <input type="radio" name="item3" value="满意" >
            <div class="radio"></div>
            <span>满意</span>
          </label>
          <label class="select">
            <input type="radio" name="item3" value="不满意">
            <div class="radio"></div>
            <span>不满意</span>
          </label>
        </div>
        <div class="title-5">
          <p>2. 到院后前台人员是否有大声说笑 态度冷漠 低头玩手机等</p>
          <label class="select">
            <input type="radio" name="item4" value="满意" >
            <div class="radio"></div>
            <span>满意</span>
          </label>
          <label class="select">
            <input type="radio" name="item4" value="不满意">
            <div class="radio"></div>
            <span>不满意</span>
          </label>
        </div>
      </div>
      <div class="advise">
        <textarea :placeholder="tip" v-model="suggest"></textarea>
      </div>
      <div class="add-pic">
        <label class="up-pic">
          <img :src="image" />
          <input type="file" style="display: none" @change="chooseImg" ref="file" accept="image/png, image/jpeg"/>
        </label>
        <span>添加图片</span>
      </div>
      <div class="btn" @click="submit">提交评价</div>
    </form>
  </div>
</template>

<script>
export default {

  data () {
    return {
      value: 4,
      list: [
        { id: 1, name: '热情服务' },
        { id: 2, name: '效果满意' },
        { id: 3, name: '很专业' },
        { id: 4, name: '环境高端' },
        { id: 5, name: '性价比高' },
        { id: 6, name: '人很漂亮' }
      ],
      collect: [],
      suggest: '',
      image: 'http://www.jyxinye.com/addons/jinye_service_evaluation/js/add_image.png',
      pic: null
    }
  },
  computed: {
    tip () {
      return this.value > 3 ? '其他建议或意见' : '请输入投诉内容'
    }
  },
  watch: {
    value (n, o) {
      console.log(n, o)
    }
  },
  methods: {
    choose (id) {
      let index = this.collect.indexOf(id)
      if (index > -1) {
        this.collect.splice(index, 1)
      } else {
        this.collect.push(id)
      }
    },
    chooseImg () {
      let file = this.$refs.file.files[0]
      this.pic = file
      if (file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (res) => {
          this.image = res.target.result
        }
      }
    },
    async submit () {
      let formData = new FormData()
      formData.append('file', this.pic)
      formData.append('star', this.value)
      formData.append('suggest', this.suggest)
      let res = await this.$axios.post('', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(res)
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
          margin-left 0.1em
          padding 2px 4px
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
      .star-top
        width 90%
        margin 0 5%
        padding-top 0.1em
        display flex
        flex-wrap nowrap
        justify-content space-between
        .top-1
          text-align center
          height 2.7em
          line-height 2.7em
          border 1px solid #e9e9e9
          border-radius 1.8em
          color #666
          font-size 0.12em
          width 28%
        .top-2
          text-align center
          height 2.7em
          line-height 2.7em
          border 1px solid #e9e9e9
          border-radius 1.8em
          color #666
          font-size 0.12em
          width 38%
        .active
          color: #09bb07;
          border-color: #09bb07;
      .star-bottom
        margin-bottom 0.2em
    .radio-wrapper
      margin 0 5%
      color rgb(102,102,102)
      input[type=radio]
        display none
      .title-1,.title-2,.title-3,.title-4,.title-5
        font-size 0.12em
        p
          line-height 1.6em
        .select
          display flex
          align-items center
          height 40px
          .radio
            position relative
            display inline-block
            margin-right 5px
            width 22px
            height 22px
            border-radius 50%
            border 1px solid #999
          input:checked + .radio
            border-color #ff5000
            background-color #ff5000
            &::after
              position: absolute
              content: ""
              width: 5px
              height: 9px
              top: 4px
              left: 7px;
              border: 2px solid #fff
              border-top: none
              border-left: none
              transform: rotate(45deg)
    .advise
      height 60px
      margin 0 5%
      color #ddd
      margin-top 10px
      width 90%
      font-size 15px
      textarea
        display inline-block
        padding-left 3%
        padding-top 10px
        height 100%
        width 97%
        font-size 15px
        line-height 1
        outline none
        color #333
        border 1px solid #e9e9e9
        border-radius 8px
        background-color #F6F5F2
        resize none
        box-sizing border-box
    .add-pic
      height 0.6em
      margin-left 5%
      margin-top 0.2em
      margin-bottom 0.2em
      line-height 0
      .up-pic
        position relative
        display inline-block
        border 1px solid #ddd
        line-height 0
        border-radius 8px
        width 0.6em
        height 100%
        vertical-align middle
        img
          width 100%
          height 100%
      span
        display inline-block
        font-size 0.15em
        margin-left 5%
        vertical-align middle
        color #999
    .btn
      display block
      margin 0 auto
      margin-bottom 100px
      width 90%
      height 44px
      line-height 44px
      border-radius 10px
      background-color rgb(4,190,2)
      color #fff
      font-size 14px
      font-weight 700
      text-align center
</style>
