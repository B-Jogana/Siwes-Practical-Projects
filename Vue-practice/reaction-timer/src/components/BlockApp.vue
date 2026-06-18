<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <h3>Click Me</h3>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
      console.log(this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  background: #678891;
  width: 400px;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
