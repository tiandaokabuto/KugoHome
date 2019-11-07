<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content-wrapper">
      <div class="scroll-content" :style="{height: height + 'px'}">
        <transition name="title-transition"
        enter-active-class="animated fadeIn">
          <div class="scroll-content-title" v-show="0 === scrollPage">
            <img class="title-img" src="@/assets/imgs/20180727155739608328.png" />
          </div>
        </transition>
        <transition name="main-transition"
        enter-active-class="animated fadeInUp">
          <div class="scroll-content-main" v-show="0 === scrollPage">
            <img class="main-img" src="@/assets/imgs/20180727155739463869.png" />
          </div>
        </transition>
        <div class="scroll-content-download" v-show="0 === scrollPage">
          <img class="download-img" src="@/assets/imgs/20180730111821714474.png" />
        </div>
        <div class="next-icon"></div>
      </div>
      <div
        class="scroll-content"
        :style="{height: height + 'px'}"
        v-for="(item, index) in imgList"
        :key="index"
      >
        <transition name="title-transition"
        enter-active-class="animated fadeIn">
          <div class="scroll-content-title" :style="item.width" v-show="item.page === scrollPage">
            <img class="title-img" :src="item.titleImg" />
          </div>
        </transition>
        <transition name="main-transition"
        enter-active-class="animated fadeInUp">
          <div class="scroll-content-main" v-show="item.page === scrollPage">
            <img class="main-img" :src="item.mainImg" />
          </div>
        </transition>
        <div class="scroll-content-download">
          <img
            class="download-img"
            src="@/assets/imgs/20180730111821714474.png"
            style="visibility: hidden"
          />
        </div>
        <div class="next-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      height: 0,
      width: 0,
      scrollHeight: 0
    }
  },
  computed: {
    scrollPage () {
      return this.scrollHeight / this.height
    }
  },
  props: {
    imgList: Array
  },
  components: {},
  mounted () {
    this.height = window.innerHeight
    this.width = window.innerWidth
    this.$nextTick(() => {
      const options = {
        scrollY: true,
        momentum: false, // 防止连续滑动多个页面
        snap: true,
        probeType: 3, // 不设置无法监听scroll事件
        bounce: false // 禁止动画回弹
      }
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, options)
      } else {
        this.scroll.refresh()
      }
      this.scroll.on('scrollEnd', pos => {
        console.log(parseFloat(-pos.y))
        this.scrollHeight = parseFloat(-pos.y)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/global";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .scroll-content {
    width: 578px !important;
    margin: 0 auto;
  }
}
.scroll-wrapper {
  width: 100%;
  height: 100%;
  .scroll-content-wrapper {
    background: #f8f8f8;
    .scroll-content {
      z-index: 10;
      width: 100%;
      // height: 823px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url(../../assets/imgs/20180727152725698372.png);
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 100% auto;
      .scroll-content-title {
        flex: 1;
        width: 50%;
        @include center;
        align-items: flex-end;
        padding-bottom: 1rem;
        .title-img {
          width: 100%;
        }
      }
      .scroll-content-main {
        flex: 3;
        width: 50%;
        flex-direction: column;
        display: flex;
        align-items: center;
        .main-img {
          flex: none;
          width: 100%;
        }
      }
      .scroll-content-download {
        flex: 1;
        width: 50%;
        @include center;
        align-items: flex-start;
        .download-img {
          display: flex;
          width: 100%;
        }
      }
      .next-icon {
      }
    }
  }
}
</style>
