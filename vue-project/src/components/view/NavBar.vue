<template>


<header class="fixed inset-x-0 top-0 z-50  px-4 pt-4 " >
    <nav class="max-w-7xl mx-auto flex items-center bg-white/30 backdrop-blur-sm  justify-between 
    px-6 py-4 rounded-full border  transition-all duration-300">

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
            <li><a :class="NavBarButton"  href="#">Team</a></li>
            <li><a :class="NavBarButton"  href="#">Contact</a></li>
        </ul>

        <!-- Buttons -->
        <div class="flex gap-2">
           <Buttton :status="isPrimary" >Login</Buttton> 
            <Buttton>Sign Up</Buttton>
        </div>

    </nav>
</header>
</template>

<script setup>
import { ref } from 'vue'
import Buttton from '../Buttton.vue';

const isPrimary = ref(false);
 const NavBarButton = 'bg-white text-black border border-gray-300 hover:bg-gray-50 hover:text-black hover:border-gray-400 font-medium px-4 py-2 rounded-full transition-all duration-200'
</script>

