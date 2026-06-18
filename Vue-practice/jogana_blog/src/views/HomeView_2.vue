<template>
  <div class="home2">
    <div v-if="error">{{ error }}</div>
    <PostList :posts="posts" />
    <p></p>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
    /*  con st posts = ref([
      {
        title: "welcome to Jogana blog",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus, nostrum odit provident aliquid quae ea itaque harum sequi doloribus aliquam aspernatur voluptas odio amet quas, eius quod atque. Optio dolore sunt quo earum quas neque voluptatibus reiciendis veritatis. Libero in culpa quos illum enim! Inventore soluta sint architecto excepturi.`,
        id: 1,
      },
      {
        title: "To5 5 Vue Tips",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus, nostrum odit provident aliquid quae ea itaque harum sequi doloribus aliquam aspernatur voluptas odio amet quas, eius quod atque. Optio dolore sunt quo earum quas neque voluptatibus reiciendis veritatis. Libero in culpa quos illum enim! Inventore soluta sint architecto excepturi.`,
        id: 2,
      },
    ]); */
  },
};
</script>
