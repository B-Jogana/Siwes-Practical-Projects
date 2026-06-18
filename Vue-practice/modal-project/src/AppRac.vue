<template>
  <div>
    <ThePractice :header="header" />
  </div>
</template>

<script>
import ThePractice from "./components/ThePractice.vue";
export default {
  components: { ThePractice },
  data() {
    return {
      header: "Welcome",
    };
  },
};
</script>
