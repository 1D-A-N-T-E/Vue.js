<template>


<header class="fixed inset-x-0 top-0 z-50  px-4 pt-4">
    <nav class="max-w-7xl mx-auto flex items-center justify-between 
    px-6 py-4 rounded-full border  transition-all duration-300">

        <!-- Logo -->
        <div class="flex items-center gap-3">
            <img 
                src="../../../public/logos/zirgsMelnsLogo.png"
                class="h-20 w-auto"
            />

            <span class="font-bold">
                Mārcis Graudiņš
            </span>
        </div>

        <!-- Menu -->
        <ul class="flex gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <!-- Buttons -->
        <div class="flex gap-2">
            <button>Login</button>
            <Bottton/>
        </div>

    </nav>
</header>
</template>

<script setup>
import { ref } from 'vue'
import Bottton from '../Bottton.vue';

</script>

