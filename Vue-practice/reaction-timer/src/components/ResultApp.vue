<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score <= 250) {
      this.rank = "Excellenct";
    } else if (this.score > 250 && this.score > 1000) {
      this.rank = "Very Good";
    } else {
      this.rank = "Good";
    }
  },
};
</script>
