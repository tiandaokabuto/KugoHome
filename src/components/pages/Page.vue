<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content-wrapper">
      <div class="scroll-content" :style="{height: height + 'px'}">
        <div class="scroll-content-title">
          <img class="title-img" src="@/assets/imgs/20180727155739608328.png" />
        </div>
        <div class="scroll-content-main">
          <img class="main-img" src="@/assets/imgs/20180727155739463869.png" />

        </div>
        <div class="scroll-content-download">
          <img class="download-img" src="@/assets/imgs/20180730111821714474.png" />
        </div>
        <div class="next-icon"></div>
      </div>
      <div class="scroll-content" :style="{height: height + 'px'}"
      v-for="(item, index) in imgList" :key="index">
        <div class="scroll-content-title" :style="item.width">
          <img class="title-img" :src="item.titleImg"/>
        </div>
        <div class="scroll-content-main">
          <img class="main-img" :src="item.mainImg" />
        </div>
        <div class="scroll-content-download">
          <img class="download-img" src="@/assets/imgs/20180730111821714474.png" style="visibility: hidden"/>
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
      width: 0
    }
  },
  props: {
    imgList: Array
  },
  components: {},
  mounted () {
    this.$nextTick(() => {
      const options = {
        scrollY: true,
        momentum: false, // 防止连续滑动多个页面
        snap: true
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
    })
    this.height = window.innerHeight
    this.width = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/global";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px){
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
