
<template >
  <NavBar></NavBar>
  

    <RouterView />
  


</template>

<script setup>
 import NavBar from '../src/components/view/NavBar.vue';
import HomeVew from './components/view/HomeView/HomeVew.vue';
</script>
