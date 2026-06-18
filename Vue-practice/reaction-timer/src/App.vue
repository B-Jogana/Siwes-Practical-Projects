<template>
  <h1>Reaction_Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <ResultApp v-if="showResult" :score="score" />
  <BlockApp v-if="isPlaying" :delay="delay" @end="endGame" />
</template>

<script>
import BlockApp from "./components/BlockApp.vue";
import ResultApp from "./components/ResultApp.vue";
export default {
  name: "App",
  components: { BlockApp, ResultApp },
  data() {
    return {
      delay: null,
      isPlaying: false,
      score: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = !this.isPlaying;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px;
  letter-spacing: 1px;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.2;
  cursor: not allowed;
}
</style>
