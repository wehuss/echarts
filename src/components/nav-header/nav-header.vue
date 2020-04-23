<template>
  <div class="nav-header">
    <p class="left"></p>
    <h1 class="title">Echarts数据可视化平台</h1>
    <p class="time">
      当前时间:{{ date.y }}年 {{ date.m }} 月 {{ date.d }} 日 {{ date.h }}:{{
        date.min
      }}:{{ date.s }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {
        y: 0,
        m: 0,
        d: 0,
        h: 0,
        min: 0,
        s: 0,
      },
    }
  },
  methods: {
    setTime() {
      return setInterval(() => {
        const time = new Date()
        this.date.y = time.getFullYear()
        this.date.m = time.getMonth() + 1
        this.date.d = time.getUTCDate()
        this.date.h = time.getHours()
        this.date.min = time.getMinutes()
        this.date.s = time.getSeconds()
      }, 1000)
    },
  },
  created() {
    this.setTime()
  },
}
</script>

<style lang="scss" scoped>
.nav-header {
  background: #4b0082;
  height: 8vh;
  color: $fc;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background: url('~@/assets/image/h-bg.png');
  background-size: 100% 100%;
  .left{
      flex: 2;
  }
  .title {
    font-weight: 200;
    text-align: center;
    flex:6
  }
  .time{
      flex: 2;
  }
}
</style>
