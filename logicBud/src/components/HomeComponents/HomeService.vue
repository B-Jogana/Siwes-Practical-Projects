<template>
    <div class="service-container">
      <nav >
        <router-link class="router" :to="{ name: 'Service'}">Our Service</router-link>
      </nav>
      <div>
        <p class="para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dignissimos<br>
          laboriosam impedit accusantium deserunt animi incidunt sit 
        </p>
      </div>
      <nav class="ourservice">
        <!-- Click sets the value, class is 'active' if it matches -->
        <p class="router" :class="{ active: activeTab === 'software' }" @click.prevent="activeTab = 'software'">Software Service</p>
        <p class="router" :class="{ active: activeTab === 'design' }" @click.prevent="activeTab = 'design'">Software Design</p>
        <p class="router" :class="{ active: activeTab === 'analysis' }" @click.prevent="activeTab = 'analysis'">Software Analysis</p>
      </nav>
      <div class="tab-content">
        <SoftwareService v-if="activeTab === 'software'" />
        <SoftwareDesign v-if="activeTab === 'design'" />
        <SoftwareAnalysis v-if="activeTab === 'analysis'" />
      </div> 
      <nav class="more">
        <router-link :to="{ name: targetRoute }" class="learn-more-btn">
        Learn More
          <img src="../../assets/arrow.png" alt="arrow" />
        </router-link>
      </nav>
    </div>
</template>

<script>
import SoftwareDesign from '../SoftwareDesign.vue'
import SoftwareService from '../SoftwareService.vue'
import SoftwareAnalysis from '../SoftwareAnalysis.vue'

export default {
  components: { 
    SoftwareService, 
    SoftwareDesign,
     SoftwareAnalysis,
  },
  data() {
    return {
      activeTab: 'software', // Default tab
    }
  },
  computed: {
    targetRoute() {
      // Map your activeTab values to the 'name' property in router/index.js
      if (this.activeTab === 'software') return 'Software';
      if (this.activeTab === 'design') return 'Softwaredesign';
      if (this.activeTab === 'analysis') return 'Softwareanalysis';
      return 'Home'; // Fallback
    }
  }
}
</script>

<style>
  
.service-container {
  min-height: 70vh; 
  height: auto;     
  width: 100vw;
  text-align: center;
}
.service-container .para {
  display:flex;
  justify-content:center;
  white-space: pre-line;
  line-height: 1.6;         
  color: #4a4a4a;          
  text-align:center;
  align-items:justify;
}
.ourservice {
  display:flex;
  flex-direction:row;
  Justify-content:center;
  margin: auto 60px;
}
.ourservice .router {
  cursor:pointer;
  transition: all 0.3s ease;  
  margin: auto;
}
.ourservice .router.active {
  color: #27c5ec;  
  text-decoration:underline;
  text-underline-offset: 20px;
}
.tab-content {
  display:flex;
  flex-direction:column;
  Justify-content:center;
  margin:20px auto;
  max-width: 1000px;
}
.more img {
  height: 25px;
  margin: auto 15px;
  transform: translateY(10px);
}
.more {
  margin: 15 auto;
  transform: translateX(-430px);
}
.more a {
  text-decoration: none;
  font-weight:bold;
}
</style>
