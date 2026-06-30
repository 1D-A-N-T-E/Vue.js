<template>
    <footer class="border-t border-border border-gray-300">
        <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center gap-2">
                <span class="grid h-8 w-8 place-items-center rounded-full bg-black text-background">
                    <span class="font-mono text-sm font-bold text-amber-50">M</span>
                </span>
                 <span class="text-sm font-semibold tracking-[0.18em]  text-foreground">MĀRCIS</span>
            </div>
            <p class="text-sm text-muted-foreground text-gray-500">© 2026  Mārcis. Built with Vue energy, shipped with care. </p>
         <div class="flex items-center gap-2">
            <a v-for="SocialMedia in SocialMedias" :key="SocialMedia.name " :href="SocialMedia.href"
            class="grid h-10 w-10 place-items-center rounded-full border border-gray-400 border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-md"
              >  
                <img 
                :src="SocialMedia.link" 
                :alt="SocialMedia.name "
                class="h-5 w-5  "
                >
              </a > 
              <button type="button" class="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border
               border-gray-300 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5
              hover:border-lime-500/50 hover:shadow-md"><ArrowUp class="lucide lucide-arrow-up h-4 w-4"/>Back To Top </button>       
          </div>
        </div>
    </footer>
</template>

<script setup>
import { ArrowUp, Mail } from 'lucide-vue-next'
const SocialMedias = [{ 
  name: "Github", 
  link: 'logos/github-Gray.svg',
  href: "https://github.com/1D-A-N-T-E",
},
{
  name: "Linkedin", 
  link: 'logos/linkedin.svg',
  href: "https://github.com/1D-A-N-T-E",
},
{
  name: "Email", 
  link: 'logos/Email.svg',
  href: "https://github.com/1D-A-N-T-E",
}
 ];
</script>