<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ box: theme === 'box' }">
      <p>Modal Content</p>
      <h1>{{ header }}</h1>
      <p>{{ subText }}</p>
      <div class="links">
        <slot></slot>
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "sub-text", "theme"], //notifying child to accept props
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: #fff92d;
}

.modal.box {
  background: red;
  color: white;
}
</style>
