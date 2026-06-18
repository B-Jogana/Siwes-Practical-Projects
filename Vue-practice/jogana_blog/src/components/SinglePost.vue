<template>
  <div class="post">
    <router-link :to="{ name: 'DetailView', params: { id: post.id } }">
      <h1>{{ post.title }}</h1>
    </router-link>
    <p>{{ snippest }}</p>
    <span :key="tag" v-for="tag in post.tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],

  setup(props) {
    const snippest = computed(() => {
      return props.post.body.substring(0, 40) + "...";
    });

    return { snippest };
  },
};
</script>
