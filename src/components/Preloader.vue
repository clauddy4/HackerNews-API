<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="load">
        <div class="load-cube first-cube"></div>
        <div class="load-cube second-cube"></div>
        <div class="load-cube third-cube"></div>
        <div class="load-cube fourth-cube"></div>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'Preloader',
    data: function() {
      return {
        show: true
      }
    },
    mounted: function () {
      if (this.show) this.showToggle()
    },
    methods: {
      showToggle() {
        setTimeout(() => {
          this.show = false
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  .preloader {
    position: absolute;
    width: inherit;
    height: 100%;
    background-color: #f0f2fa;
    z-index: 5000;

    .load {
      width: 80px;
      height: 80px;
      margin: 100px auto;
      position: relative;
      transform: rotateZ(45deg);
    }
    .load .load-cube {
      position: relative;
      transform: rotateZ(45deg);
    }
    .load .load-cube {
      float: left;
      width: 50%;
      height: 50%;
      position: relative;
      transform: scale(1.1);
    }
    .load .load-cube:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #5f9ea0;
      animation: cssload-fold-thecube 2.76s infinite linear both;
      transform-origin: 100% 100%;
    }
    .load .second-cube {
      transform: scale(1.1) rotateZ(90deg);
    }
    .load .fourth-cube {
      transform: scale(1.1) rotateZ(180deg);
    }
    .load .third-cube {
      transform: scale(1.1) rotateZ(270deg);
    }
    .load .second-cube:before {
      animation-delay: 0.35s;
    }
    .load .fourth-cube:before {
      animation-delay: 0.69s;
    }
    .load .third-cube:before {
      animation-delay: 1.04s;
    }

    @keyframes cssload-fold-thecube {
      0%, 10% {
        transform: perspective(136px) rotateX(-180deg);
        opacity: 0;
      }
      25%,
      75% {
        transform: perspective(136px) rotateX(0deg);
        opacity: 1;
      }
      90%,
      100% {
        transform: perspective(136px) rotateY(180deg);
        opacity: 0;
      }
    }
  }
</style>