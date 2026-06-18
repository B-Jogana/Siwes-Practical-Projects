<template>
  <h3>{{ header }}</h3>
  <div v-if="showLogo">
    <ul>
      <li
        @click="favOpen(logo)"
        v-for="logo in logos"
        :key="logo.id"
        class="logo-card"
        :class="{ fav: logo.isFav }"
      >
        <img :src="logo.img" :alt="logo.title" />
        <h3>{{ logo.title }}</h3>
      </li>
    </ul>
  </div>

  <div v-if="showFav">
    <div :key="logo.id" v-for="logo in filteredLogos" class="logo-card">
      <img :src="logo.img" :alt="logo.title" />
      <h3>{{ logo.title }}</h3>
    </div>
  </div>

  <button @click="closeLogos">
    <span v-if="showLogo">Close logo</span>
    <span v-else>Open Logos</span>
  </button>
  <button @click="showFavLogos">
    <span v-if="showLogo">Open Favorite logo</span>
    <span v-else>Close Favorite Logos</span>
  </button>
</template>

<script>
import reactImage from "../assets/react.png";
import vueImage from "../assets/logo.png";
import javaImage from "../assets/java.png";

export default {
  props: ["header"],
  data() {
    return {
      logos: [
        { id: 1, title: "React", img: reactImage, isFav: false },
        { id: 2, title: "Vue", img: vueImage, isFav: false },
        { id: 3, title: "Java", img: javaImage, isFav: false },
      ],
      showLogo: true,
      showFav: false,
    };
  },
  methods: {
    closeLogos() {
      this.showLogo = !this.showLogo;

      if (this.showLogo) {
        alert("You Are Opening The Logos");
      } else {
        alert("YOU ARE CLOSING THE LOGO!");
      }
    },

    favOpen(logo) {
      logo.isFav = !logo.isFav;

      if (logo.isFav) {
        alert(`You add ${logo.title} to the Favorite`);
      } else {
        alert(`You remove ${logo.title}  from the Favorite`);
      }
    },
    showFavLogos() {
      this.showFav = !this.showFav;

      if (this.showFav) {
        if (this.filteredLogos.length > 0) {
          alert("You are displaying Favorite Logo");
        } else {
          alert("You do not select any favorite logo\nPlease select... ");
        }
      } else {
        alert("You are hiding favorite logos");
      }
    },
  },
  computed: {
    filteredLogos() {
      return this.logos.filter((logo) => logo.isFav);
    },
  },
};
</script>

<style>
.logo-card {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-around;
  width: 90vw;
  margin: 10px;
  background: #464444;
  border-radius: 10px;
  border: 1px solid rgba(190, 11, 11, 0.2);
  align-items: center;
}

.fav {
  background: rgba(190, 11, 11, 0.2);
  color: blue;
  align-items: center;
}
</style>
