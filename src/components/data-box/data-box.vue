<template>
  <div class="data-box">
    <div class="bg"></div>
    <div class="data-content">
        <h3>这是标题</h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.data-box {
  width: 24vw;
  height: 24vh;
  background: url('~@/assets/image/box-bg.png');
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #c8c7cc;
    opacity: 0.3;
    border-radius: 5px;
  }
}
</style>
