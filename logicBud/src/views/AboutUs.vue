<template>
  <h1>About</h1>
  <template v-for="name in names" :key="name">
    <h2 :class="{ new:  isNew, underline: isNon }">{{ name.first }} {{ name.last }}</h2>

  </template> 

</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      names: [
        {first: 'Bashir ', last: "Jogana"},
      ],

      isNew: false,
      isNon: true,
    };
  },

}
</script>

<style>
.bold {
  font-weight: bolder;
  
}
.new {
  color: green;
}
.non {
  color: red;
}
.underline {
  text-decoration: underline;
}


</style>
