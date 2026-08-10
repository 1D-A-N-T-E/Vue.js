<template>


<header class="fixed inset-x-0 top-0 z-50  px-4 pt-4 " >
    <nav class="max-w-7xl mx-auto flex items-center bg-white/30 backdrop-blur-sm  justify-between 
    px-6 py-4 rounded-full border  border-gray-300  transition-all duration-300">

        <!-- Logo -->
        <div class="flex items-center gap-3 ro ">
            <img 
                src="../../../public/logos/OriginalDragon.svg"
                class="h-15 w-auto rounded-full "
            />
        </div>

        <!-- Menu -->
        <ul class="flex gap-8">
            <li><a :class="NavBarButton"  href="#">Home</a></li>
            <li><a :class="NavBarButton"  href="#Roadmap">Road Map</a></li>
            <li><a :class="NavBarButton"  href="#Tree">Knowledge Tree</a></li>
            <li><a :class="NavBarButton"  href="#Projects">Projects</a></li>
            <li><a :class="NavBarButton"  href="#Contact">Contact</a></li>
        </ul>

        <!-- Buttons -->
        <div class="flex gap-2">
           <Buttton @click="ShowComponent" :status="isPrimary" >Login</Buttton> 
            <Buttton>Sign Up</Buttton>
        </div>

    </nav>
</header>

 <RegistrationForm @close-registration="CloseComponent" v-if="show" />
</template>

<script setup>
import { ref } from 'vue'
import Buttton from '../Buttton.vue';
import RegistrationForm from './HomeView/RegistrationForm.vue'

const show = ref(false);

function ShowComponent () {
  show.value=true
}
function CloseComponent () {
  show.value=false
}

const isPrimary = ref(false);
 const NavBarButton = 'bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black hover:border-gray-400 font-medium px-4 py-2 rounded-full transition-all duration-200'
</script>

