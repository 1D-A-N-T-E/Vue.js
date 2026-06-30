



<template>
  <main class="min-h-screen bg-background">
    <section id="home" class="relative mx-auto max-w-6xl px-4 pt-32 pb-12 md:pt-40">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        
        <Reveal class="flex flex-col items-start">
          <span class="inline-flex items-center gap-2 rounded-full border border-border border-gray-300 bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-700 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Available for work
          </span>

          <h1 class="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Building fast, modern and scalable
            <span class="relative whitespace-nowrap">
              <span class="relative z-10">web applications</span>
              <span class="absolute inset-x-0 bottom-1 z-0 h-3 bg-lime-500/60 md:h-4" />
            </span>
            .
          </h1>

          <p class="mt-6 max-w-md text-pretty text-base text-gray-800/60 leading-relaxed text-muted-foreground">
            Frontend Developer focused on Vue.js and building clean, user-friendly applications with great
            performance.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              class="group rounded-full bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="#projects">
               <Buttton>View My Projects <ArrowRight class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Buttton> 
                
              </a>
            </Button>
            
              <Buttton :status="isPrimary" size="lg" variant="outline" class="flex items-center gap-2 rounded-full border-border bg-transparent">
              Download CV
              <Download class="mr-1 h-4 w-4" />
            </Buttton> 
            
          </div>
 <!-- This is a symbols in a circle -->
          <div class="mt-8 flex items-center gap-2">
            <a v-for="SocialMedia in SocialMedias" :key="SocialMedia.name " :href="SocialMedia.href"
            class="grid h-10 w-10 place-items-center rounded-full border border-gray-400 border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-md"
              >  
                <img 
                :src="SocialMedia.link" 
                :alt="SocialMedia.name "
                class="h-5 w-5  "
                >
              </a >        
          </div>
        </Reveal>

      <!-- This is a black terminal -->
        <Reveal delay={120} class="flex flex-col gap-4 sm:flex-row lg:flex-row">
          <div class="min-w-0 flex-1 animate-[float-y_7s_ease-in-out_infinite] ">
            <div class="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b26] 
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                <div class="flex items-center gap-2 border-b border-white/5 bg-[#16161e] px-4 py-3">
                    <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
                    <span class="ml-3 font-mono text-xs text-[#565f89]">App.vue</span>
                    <span class="ml-auto font-mono text-[10px] uppercase tracking-wider text-[#565f89]">vue</span>
                </div>
                <div  class="flex font-mono text-[12.5px] leading-relaxed md:text-[13px]">
                    <div class="select-none border-r border-white/5 px-3 py-4 text-right text-[#3b4261]">
                        <div v-for="i in 19" :key="i">{{ i }}
                            </div>
                    </div>
                     
                        <CodeWindow class="text-[#a9b1d6]"/>
                    
                </div>
            </div>
          </div>

          <aside class="w-full shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm sm:w-52 lg:w-56">
            <p class="text-xs font-medium uppercase tracking-wider  text-gray-500">Developer</p>
            <p class="mt-1 text-sm font-semibold text-foreground">Quick stats</p>
            <dl class="mt-4 flex flex-col gap-3.5">
                   <!-- have to Repite --> 
                <div v-for="s in STATS" :key="s.label" class="flex flex-col gap-0.5 border-b border-gray-300 border-border/90 pb-3 last:border-0 last:pb-0">
                  <dt class="text-xs text-gray-500 font-sans ">{{s.label}}</dt>
                  <dd class="text-sm  ">{{s.value}}</dd>
                </div>
             <!-- have to Repite --> 
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
     <!--it is 4 blocks with a information  --> 
        <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        
          <div v-for="s in informations"
            :key="s.label"
            className="rounded-2xl border border-gray-400 border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {{s.value}}
            </p>
            <p className="mt-2 text-sm  text-gray-500 text-muted-foreground">{{s.label}}</p>
          </div>
      
      </div>
    </section>
  </main>

  <SkillTree/>
  <RoadMap/>
  <Projects/>
  <Contact/>
  <SiteFooter/>
</template>

<script setup >
import Buttton from '../../../components/Buttton.vue';
import CodeWindow from './CodeWindow.vue';
import { ref } from 'vue';
import { ArrowRight, Download } from 'lucide-vue-next'
import SkillTree from './SkillTree.vue';
import RoadMap from './RoadMap.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import SiteFooter from './SiteFooter.vue';

const isPrimary = ref(false);
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
const STATS = [
  { label: "Location", value: "Riga, Latvia" },
  { label: "Current Focus", value: "Vue.js" },
  { label: "Projects Built", value: "12+" },
  { label: "Coffee Level", value: "Maximum" },
  { label: "Technologies", value: "20+" },
]
const informations = [
  { value: "2+", label: "Years Experience" },
  { value: "12+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "1200+", label: "Lines of Code" },
]
</script>