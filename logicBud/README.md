<!-- @format -->

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

<template>
  <header class="container">
    <h1>Our Services</h1>
    <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

    <div class="services">
      <p v-for="(label, index) in labels" :key="index"
         @click="activeIndex = index"
         :class="{ active: activeIndex === index }">
        {{ label }}
      </p>
    </div>

    <div class="underline">
      <div class="moving-bar" :style="{ left: (activeIndex * 35) + '%' }"></div>
    </div>

    <div class="intro-text">
      <!-- Standardised keys allow one block of code to handle everything -->
      <p>{{ paragraphs[activeIndex].p1 }}</p>
      <p>{{ paragraphs[activeIndex].p2 }}</p>
      <p>{{ paragraphs[activeIndex].p3 }}</p>
      <div class="link-group">
        <a href="#">{{ paragraphs[activeIndex].link }}</a>
        <img src="../assets/arrow.png" alt="arrow" />
      </div>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      labels: ["Software Development", "Software Analysis", "Software Design"],
      paragraphs: [
        {
          p1: "Software development is the structured process...",
          p2: "Developers use various programming languages...",
          p3: "The industry relies on different methodologies...",
          link: "See more on software development"
        },
        {
          p1: "Software analysis deep dives into logic...",
          p2: "It ensures the system requirements are met...",
          p3: "Analysis is the bridge between idea and code...",
          link: "See more on Software Analysis"
        },
        {
          p1: "Software design focuses on UX and UI...",
          p2: "Great design makes software intuitive...",
          p3: "Visual hierarchy is key to a good product...",
          link: "See more on Software Design"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container { text-align: center; font-size: 14px; padding: 20px; }
.services { display: flex; justify-content: center; gap: 40px; margin-top: 20px; }
.services p { cursor: pointer; color: #888; transition: 0.3s; }
.services p.active { color: #15014A; font-weight: bold; }

.underline { height: 1px; background: #444; margin: 15px auto; width: 90%; position: relative; }
.moving-bar { position: absolute; height: 2px; background: #15014A; width: 30%; transition: 0.4s; }

.intro-text { width: 90%; margin: 0 auto; text-align: left; }
.link-group { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
.link-group img { width: 12px; height: 12px; }
</style>

Why this is better:Dry Code: You don't have to repeat <p> tags and v-if blocks for every tab.Dynamic Underline: The moving-bar position is calculated inline (activeIndex \* 35%), removing the need for a long computed property.Scalable: If you want to add a 4th service, you just add one object to the array. You don't have to touch the HTML at all.Flexbox Alignment: The link-group class ensures your arrow and link are always perfectly aligned vertically.Does this smaller code structure make it easier for you to manage your text?

# Siwes-Practical-Projects

Web development projects during my SIWES technical training
