<template>
  <div class="page">
    <page :imgList="imgList"></page>
  </div>
</template>

<script>
import Page from './pages/Page'
import ImgList from '../assets/ImgList'

export default {
  data () {
    return {
      imgList: ImgList
    }
  },
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
