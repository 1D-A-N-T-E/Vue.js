
<template >
  <NavBar></NavBar>
  

    <RouterView />
  


</template>

<script setup>
 import Footer from '../src/components/view/Footer.vue';
 import NavBar from '../src/components/view/NavBar.vue';
import HomeVew from './components/HomeVew.vue';
</script>
