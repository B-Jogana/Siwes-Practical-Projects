<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <div :key="name" v-for="name in matchSearch">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const names = ref(["Ahmad", "Adam", "Nuhu", "Isah"]);
    const search = ref("");
    const matchSearch = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchSearch };
  },
};
</script>
