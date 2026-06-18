<template>
  <header class="container">
    <h1>Our Services</h1>
    <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br>
             Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
    </div>

   <div class="services">
      <p
       :key="index" 
       v-for="(service, index) in servicesList" 
       @click="activeIndex = index" 
       :class="{ active: activeIndex === index }"
      >
       {{ service }}

      </p>
      
    </div>

    <div class="underline">
      <div class="moving-bar" :style="barPosition"></div>
    </div>

    <div class="intro-text" v-if="paragraphs[activeIndex]">
      <p v-for="(text, index) in filterTexts(paragraphs[activeIndex])" :key="index">
        {{ text }}
      </p>
      <a href="#">{{ paragraphs[activeIndex].linkText }}</a>
      <img src="../assets/arrow.png" />
    </div>

      
  </header>
</template>


 <script>
export default {
  name: 'ServiceSection',
  data() {
    return {
      activeIndex: 0,

      servicesList: [
        "Software Development",
        "Software Analysis",
        "Software Design"
      ],

      paragraphs: [
        {
          texts: [
            "Software development is the structured process of designing, coding, testing, and maintaining computer programs and applications.",
            "It begins with identifying a specific need or problem and conceptualizing a digital solution.",
            "Developers use various programming languages and frameworks to build functional, secure, and user-friendly products."
          ],
          linkText: "See more on software development"
        },
        {
          texts: [
            "Software analysis involves evaluating the feasibility and requirements of a project to ensure technical alignment.",
            "This stage focuses on gathering user needs and transforming them into functional specifications.",
            "It acts as a bridge between the business problem and the technical solution."
          ],
          linkText: "See more on Software Analysis"
        },
        {
          texts: [
            "Software design is the process of defining the architecture, components, and interfaces of a system.",
            "It ensures the system is scalable, maintainable, and visually intuitive for the end-user.",
            "Good design balances aesthetics with technical performance."
          ],
          linkText: "See more on software design"
        }
      ]
    };
  },
  computed: {
    barPosition() {
      const positions = ['0%', '35%', '70%'];
      return {
        left: positions[this.activeIndex]
      };
    }
  },
  methods: {
    filterTexts(paragraphObj) {
      return paragraphObj.texts || [];
    }
  }
};
</script>





<style scoped>
.container {
  text-align: center;
  font-size: 8px;
}

.container h1 {
  position: relative
}

.container h1::after {
  content: "";
  position: absolute;
  background-color: #15014A;
  height: 0.9px;
  width: 5%;
  bottom: -4px;
  left: 47%;
}
.services {
  display: flex;
  margin-top: 30px;
}
.services p {
  cursor: pointer; 
  transition: color 0.3s;
  width: 100%

}

.services p.active {
  color: #15014A;
  font-weight: bold;
}

.underline {
  height: 0.5px;
  background: #4a4a4a;
  margin: 20px auto;
  width: 100%;
  position: relative;
}

.moving-bar {
  position: absolute;
  height: 1px; 
  background: #15014A;
  width: 30%; 
  top: 0; 
  left: 0;
  transition: left 0.4s ease; 
  border-radius: 10px;
}


.intro-text  {
  width: 90%;
  justify-self:center;
  text-align: left;
}
.intro-text img  {
  width: 10px;
  height: 10px;
  transform: translateY(4px);
  margin-left: 5px;
}


@media (max-width: 425px) {
  .services {
    display: flex;
    overflow-x: auto; 
    scroll-snap-type: x mandatory; 
    gap: 15px;
    padding: 0 20px;
    scrollbar-width: none; 
    -webkit-overflow-scrolling: touch;
  }

  .services::-webkit-scrollbar {
    display: none;
  }

  .services p {
    flex: 0 0 70%; 
    scroll-snap-align: center;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
  }

  .underline {
    width: 100rem;
    
  }
}
</style>
