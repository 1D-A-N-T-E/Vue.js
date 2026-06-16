
<template>
  <div>
     <p>Title: {{ title }}</p>
    <p>Vārds: {{ vards }}</p>
    <p>Gadi: {{ gadi }}</p>
    <p>Dzimums: {{ dzimums }}</p>
    <p>Mājdzīvnieki: {{ divnieki.join(', ') }}</p>
  </div>

  <button class="bg-pink-400 w-32 rounded-full border-4 
   border-purple-500  transition delay-150 duration-300 
   ease-in-out hover:-translate-y-1 hover:scale-110 "
    @click="emit('EmitTests', 5 )" > Nospied mani</button>

     <div class="h-40 mt-11 ml-6 " > <p> <slot name="text"> Defoult text</slot></p></div>
</template>


<script setup >
import { ref } from 'vue';

const emit = defineEmits(['EmitTests'])

const props = defineProps({
  title: String,
  gadi: Number,
  vards: String,
  divnieki: Array,
  dzimums: String,
});
    </script>
