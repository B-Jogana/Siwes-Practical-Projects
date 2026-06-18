import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import ServicePage from '../views/ServicePage.vue'
import OurProduct from '../views/OurProduct.vue'
import ContactUs from '../views/ContactUs.vue'
import SoftwareService from '../components/SoftwareService.vue'
import SoftwareDesign from '../components/SoftwareDesign.vue'
import SoftwareAnalysis from '../components/SoftwareAnalysis.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs,
  },
  {
    path: '/service',
    name: 'Service',
    component: ServicePage,
  },
  {
    path: '/product',
    name: 'Product',
    component: OurProduct,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs,
  },
  {
    path: '/softwareservice',
    name: 'Software',
    component: SoftwareService,
  },
  {
    path: '/softwaredesign',
    name: 'Softwaredesign',
    component: SoftwareDesign,
  },
  {
    path: '/softwareanalysis',
    name: 'Softwareanalysis',
    component: SoftwareAnalysis,
  },

  {
    /* path: '/post/:id', // The :id is a dynamic parameter
    name: 'Details',
    component: DetailView,
    props: true // This passes the :id as a prop to the component */
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
   
})

export default router
