<template>
  <div class="my-charts">
    <NHeadr></NHeadr>
    <div class="content">
      <div class="boxs-wrapper">
        <dataBox></dataBox>
      </div>
      <div class="map-wrapper">
        <div class="btn">
          <button :disabled="show" @click="show = true">中国</button>
          <button :disabled="!show" @click="show = false">世界</button>
        </div>
        <div class="cnMap map" :ref="'cnMap'" v-show="show"></div>
        <div class="worldMap map" :ref="'worldMap'" v-show="!show"></div>
      </div>
      <div class="boxs-wrapper">
        <dataBox></dataBox>
      </div>
    </div>
  </div>
</template>

<script>
import echart from 'echarts'
import NHeadr from '../components/nav-header/nav-header'
import dataBox from '../components/data-box/data-box'
import axios from 'axios'
import { cnOpt, worldOpt } from '../assets/js/opt'

import 'echarts/map/js/china'
import 'echarts/map/js/world'

export default {
  data() {
    return {
      cnList: [],
      worldlist: [],
      cnMap: {},
      worldMap: {},
      show: true,
    }
  },
  methods: {
    getData() {
      axios.defaults.withCredentials = true
      axios.get('/api').then((res) => {
        this.cnList = res.data.data.list
        this.worldlist = res.data.data.worldlist
        cnOpt.series[0].data = this.cnList
        worldOpt.series[0].data = this.worldlist
        this.cnMap = echart.init(this.$refs.cnMap)
        this.cnMap.setOption(cnOpt)
        this.worldMap = echart.init(this.$refs.worldMap)
        this.worldMap.setOption(worldOpt)
      })
    },
    reSize() {
      window.onresize = () =>
        this.show ? this.cnMap.resize() : this.worldMap.resize()
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    show: function() {
      this.$nextTick(() => {
        this.cnMap.resize()
        this.worldMap.resize()
      })
    },
  },
  mounted() {
    this.getData()
    this.reSize()
    console.log(this.$router)
  },
  components: {
    NHeadr,
    dataBox,
  },
}
</script>

<style lang="scss" scoped>
.my-charts {
  height: 100vh;
  background: url('../assets/image/bg.jpg');
  background-size: 100% 100%;
  .content {
    display: flex;
    //   flex-wrap: wrap;
    height: 92%;
    width: 100%;
    .map-wrapper {
      width: 50vw;
      background-image: url('../assets/image/map.png');
      @include bg-size(50%);
      position: relative;
      .map {
        width: 80%;
        height: 80%;
        z-index: 1;
        opacity: 0.8;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .btn {
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translate(-50%);
      display: flex;
      z-index: 777;
      button {
        border: none;
        width: 15vw;
        height: 4vh;
        margin: 0 0.5vw;
        background: blue;
        color: #ffffff;
        border-radius: 20px;
      }
    }
    .map-wrapper::after {
      background: url('../assets/image/anim1.png');
      @include bg-size(65%);
      @include map-bg();
      animation: Spin 20s linear infinite;
    }
    .map-wrapper::before {
      background: url('../assets/image/anim2.png');
      @include bg-size(55%);
      @include map-bg();
      animation: Spin2 20s linear infinite;
    }
    .boxs-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
      width: 25vw;
    }
  }
}
@keyframes Spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes Spin2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
