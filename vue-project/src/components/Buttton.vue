<template>

    <button v-if="props.status" type="button" tabindex="0" data-slot="button" class=" bg-black hover:bg-[#2b2a2a] text-white font-bold py-2 px-4 rounded-full ">
    <slot></slot>
    </button>
    <button v-else type="button" tabindex="0" data-slot="button" class="  bg-white 
      text-black 
      border 
      border-gray-300 
      hover:bg-gray-50 
      hover:text-black 
      hover:border-gray-400
      font-medium 
      px-4 
      py-2 
      rounded-full
      transition-all
      duration-200 ">
    <slot></slot>
    </button>
</template>

<script setup>


const props = defineProps({
  status: {
    type: Boolean,
    default: true
  }
})


</script>