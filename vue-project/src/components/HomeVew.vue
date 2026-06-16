<script setup lang="ts">
import CodeWindow from './CodeWindow.vue';

</script>

<template>
    <section id="home" class="relative mx-auto max-w-6xl px-4 pt-32 pb-12 md:pt-40">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        
        <Reveal class="flex flex-col items-start">
          <span class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Available for work
          </span>

          <h1 class="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Building fast, modern and scalable
            <span class="relative whitespace-nowrap">
              <span class="relative z-10">web applications</span>
              <span class="absolute inset-x-0 bottom-1 z-0 h-3 bg-lime/60 md:h-4" />
            </span>
            .
          </h1>

          <p class="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
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
                View My Projects
                <ArrowRight class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" class="rounded-full border-border bg-transparent">
              <Download class="mr-1 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div class="mt-8 flex items-center gap-2">
            <a v-for="i in 3"
                key={label}
                href="#"
                aria-label={label}
                class="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-md"
              >
                <Icon class="h-4 w-4" />
              </a>
          
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
                        <div v-for="i in 18" :key="i">{{ i }}
                            </div>
                    </div>
                     
                        <CodeWindow class="text-[#a9b1d6]"/>
                    
                </div>
            </div>
          </div>

          <aside class="w-full shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm sm:w-52 lg:w-56">
            <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Developer</p>
            <p class="mt-1 text-sm font-semibold text-foreground">Quick stats</p>
            <dl class="mt-4 flex flex-col gap-3.5">
              
                <div key={s.label} class="flex flex-col gap-0.5 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <dt class="text-xs text-muted-foreground">{s.label}</dt>
                  <dd class="text-sm font-medium text-foreground">{s.value}</dd>
                </div>
             
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
    
</template>