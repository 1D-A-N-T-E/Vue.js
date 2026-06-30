<template>

    <button v-if="props.status" type="button" tabindex="0" data-slot="button" class=" bg-black hover:bg-[#2b2a2a] text-white font-bold py-2 px-4 rounded-full group/button inline-flex shrink-0 items-center justify-center border border-transparent 
                    bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring 
                    focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none 
                    disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 
                    dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 
                    [a]:hover:bg-primary/80 h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 group w-full rounded-full bg-foreground text-background hover:bg-foreground/90 
                    sm:w-auto">
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
      duration-200  " >
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