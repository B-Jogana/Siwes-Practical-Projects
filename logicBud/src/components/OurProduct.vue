<template>
     <div class="service-container">
      <nav class="more">
        <router-link :to="{ name: targetRoute }" class="learn-more-btn">
          Learn More
          <img src="../assets/arrow.png" alt="arrow icon" />
        </router-link>
      </nav>
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
          <img src="../assets/arrow.png" alt="arrow" />
        </router-link>
      </nav>
    </div>
</template>

<script>
import SoftwareDesign from '../components/SoftwareDesign.vue'
import SoftwareService from '../components/SoftwareService.vue'
import SoftwareAnalysis from '../components/SoftwareAnalysis.vue'

export default {
  components: { 
    AboutUs,
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
