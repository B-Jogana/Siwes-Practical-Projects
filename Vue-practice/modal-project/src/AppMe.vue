<template>
  <div>
    <h1>{{ title }}</h1>
    <teleport to=".modal" v-if="showModal">
      <AppModal
        :header="header"
        :subtext="subText"
        theme="box"
        @close="toggleModal"
      >
        <h1>Try your Luck</h1>
        <p>Win your luck</p>
        <template v-slot:link>
          <a href="$">Sign Up</a>
          <a href="$">More...</a>
          <p>To win</p>
        </template>
      </AppModal>
    </teleport>

    <div v-if="showModalTwo">
      <AppModal @close="toggleModalTwo">
        <h1>This is a New Module</h1>
        <p>Win your luck</p>
        <template v-slot:link>
          <a href="$">Back</a>
          <a href="$">Next</a>
          <p>To win</p>
        </template>
      </AppModal>
    </div>

    <button @click="toggleModal">Open Modal</button>
    <button @click="toggleModalTwo">Open ModalTow</button>
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";
export default {
  name: "AppMe",
  components: { AppModal },
  data() {
    return {
      title: "Welcome to Jogana Vue App",
      header: "Sign up for the deal, 001",
      subText: "Win!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app .modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #325539;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #dddd;
}
</style>
