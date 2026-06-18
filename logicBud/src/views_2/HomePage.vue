<template>
  <Navbar  />
  <HeroSection  id="home"  />
  <AboutSection id="about" />
  <ServiceSection id="service" />
  <ProductSection id="product" />
  <ContactSection id="contact" />
  <FooterSection id="footer" />

</template>

<script>
import AboutSection from '../components_2/AboutSection.vue';
import Navbar from '../components_2/Navbar.vue';
import HeroSection from '../components_2/HeroSection.vue';
import ServiceSection from '../components_2/ServiceSection.vue';
import ProductSection from '../components_2/ProductSection.vue';
import ContactSection from '../components_2/ContactSection.vue';
import FooterSection from '../components_2/FooterSection.vue';

export default {
components: { 
  Navbar,
  HeroSection,
  AboutSection,
  ServiceSection,
  ProductSection,
  ContactSection,
  FooterSection,
  
 }
}

</script>

<style>


</style>
