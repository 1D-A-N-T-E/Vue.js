<template>
    <section id="skills" class="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div class="reveal is-visible mx-auto mb-12 max-w-2xl text-center" style="transition-delay:0ms">
            <span class="inline-flex items-center gap-2 rounded-full border border-border border-gray-300 bg-card px-3 py-1 text-gray-500 text-xs font-medium text-muted-foreground">
              <Sparkles class="lucide lucide-sparkles h-3.5 w-3.5 text-lime-400"/>Knowledge Tree</span>
              
            <h2 class="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">A connected ecosystem of technologies</h2>
            <p class="mt-3 text-pretty text-muted-foreground  text-gray-500">Explore the stack that powers my work. Tap any orb to reveal its branches and proficiency.</p>
        </div>
        <div class="reveal is-visible relative" style="transition-delay:0ms">
            <div class="relative overflow-hidden rounded-4xl border border-border  border-gray-300  bg-linear-to-b from-card to-background p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                <div class="pointer-events-none absolute inset-0 opacity-[0.4]" 
                    style="background-image:radial-gradient(circle, rgb(0 0 0 / 0.05) 1px, transparent 1px);background-size:26px 26px" aria-hidden="true">

                </div>
                    <div class="relative h-140 w-full sm:h-170 lg:h-195">
                          <svg class="absolute inset-0 h-full w-full "
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none">
                               <path 
                                    v-for="(tech,index) in TECHS"
                                    :key="tech.id"
                                    class="skill-line"
                                    :class="{ 'skill-line--active': selectedIndex === index }"

                                    :d="
                                      curvePath(
                                        50,
                                        50,
                                        getPosition(index, TECHS.length).left,
                                        getPosition(index, TECHS.length).top
                                      )
                                    "

                                    fill="none"

                                    stroke-linecap="round"

                                    vector-effect="non-scaling-stroke"
                                  /> <path
                                    v-if="selectedIndex !== null"
                                    v-for="(child, childIndex) in TECHS[selectedIndex].children"
                                    :key="child"
                                    class="skill-line skill-line--child"
                                    :d="
                                      curvePath(
                                        getPosition(
                                          selectedIndex,
                                          TECHS.length
                                        ).left,

                                        getPosition(
                                          selectedIndex,
                                          TECHS.length
                                        ).top,

                                        getChildPosition(
                                          selectedIndex,
                                          childIndex,
                                          TECHS.length,
                                          TECHS[selectedIndex].children.length
                                        ).left,

                                        getChildPosition(
                                          selectedIndex,
                                          childIndex,
                                          TECHS.length,
                                          TECHS[selectedIndex].children.length
                                        ).top
                                      )
                                    " fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"
                                      />
                            </svg>
                        <button class="group absolute z-20 -translate-x-1/2 -translate-y-1/2  bg-white/90 backdrop-blur-none" 
                            style="left:50%;top:50%" aria-label="Programming core">
                            <span class="absolute inset-0 -z-10 rounded-full bg-lime-100/30 blur-2xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
                                <span class="glass grid h-24 w-24 place-items-center rounded-full border border-gray-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-105 md:h-28 md:w-28">
                                    <span class="flex flex-col items-center gap-1">
                                    <span class="grid h-9 w-9 place-items-center rounded-full bg-foreground bg-black text-background">
                                        <span class="font-mono text-xs text-amber-50 font-bold">{{ "</>" }}</span>
                                    </span>
                                    <span class="text-[11px] font-semibold text-foreground">Programming</span>
                                    </span>
                                </span>
                        </button>
 <!-- Atbild par izvietojumu pogām --> 
                        <button  v-for="(T, index) in TECHS" :key="T.id" class="group absolute z-10 -translate-x-1/2 -translate-y-1/2 animate-[float-y_6s_ease-in-out_infinite]   bg-white/60 backdrop-blur-none"
                                 :aria-label="T.name + ', ' + T.proficiency + '% proficiency'"
                                  @click="ShowChilde(index)"
                                  :style="{
                                        left: getPosition(index, TECHS.length).left + '%',
                                        top: getPosition(index, TECHS.length).top + '%'
                                    }"  :aria-pressed="false">
                            <span class="glass flex flex-col items-center justify-center gap-1 rounded-full border border-gray-300 shadow-md ring-1 ring-white/40 transition-all duration-300 h-16 w-16 
                            border-border group-hover:-translate-y-1 group-hover:border-lime/40 group-hover:shadow-lg md:h-18 md:w-18">
                            <img class="h-6 w-6 md:h-7 md:w-7" width="28" height="28" loading="lazy" :src="`../../../../public/logos/ProgrammLogos/${T.id}.svg`" 
                            :alt="T.slug"> </span>
                            <span class="mt-1.5 block text-center text-[11px] font-medium text-foreground/80">{{ T.name }}</span>
                        </button>
                        <!-- Apakš elementi pogām  -->
                    <template 
                            v-for="(T, index) in TECHS"
                            :key="T.id">
                        <div
                           v-if="selectedIndex === index"
                          >
                            <span
                              v-for="(child, childIndex) in T.children"
                              :key="child"
                              class="absolute z-20 -translate-x-1/2 -translate-y-1/2 glass grid h-auto place-items-center whitespace-nowrap rounded-full border border-lime-300 px-2.5 py-1 text-[10px] font-medium text-foreground shadow-sm ring-1 ring-white/40"
                              :style="{
                                left:
                                  getChildPosition(
                                    index,
                                    childIndex,
                                    TECHS.length,
                                    T.children.length
                                  ).left + '%',

                                top:
                                  getChildPosition(
                                    index,
                                    childIndex,
                                    TECHS.length,
                                    T.children.length
                                  ).top + '%'
                              }"
                            >
                              {{ child }}
                            </span>
                 </div>
      </template>
                    </div>
                      
                    <div class="pointer-events-none absolute bottom-4 left-4 right-4 z-30 md:left-6 md:right-auto md:w-72">
                        
                    </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

.skill-line {
  stroke: #9ca3af;
  stroke-width: 1;
  opacity: 0.45;
  transition:
    stroke 250ms ease,
    stroke-width 250ms ease,
    opacity 250ms ease,
    filter 250ms ease;
}

.skill-line--active {
  stroke: #84cc16;
  stroke-width: 1.6;
  stroke-dasharray: 4 3;
  opacity: 1;
  filter: drop-shadow(0 0 4px rgb(132 204 22 / 0.8));
  animation: dash-flow 1s linear infinite;
}

.skill-line--child {
  stroke: #84cc16;
  stroke-width: 1;
  stroke-dasharray: 3 3;
  opacity: 0.55;
  animation: dash-flow 1.2s linear infinite;
}

@keyframes dash-flow {

  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -30;
  }

}
</style>
<script setup>
import { ref } from 'vue'
import { Sparkles } from 'lucide-vue-next'
const selectedIndex = ref(null)
function ShowChilde(index){
   selectedIndex.value = index
}



const TECHS = [
  {
    id: "html",
    name: "HTML",
    slug: "html5",
    proficiency: 96,
    blurb: "Semantic, accessible markup as the foundation of every interface.",
    children: ["Semantics", "A11y", "Forms", "SEO"],
  },
  {
    id: "css",
    name: "CSS",
    slug: "css",
    proficiency: 93,
    blurb: "Modern layouts with Grid, Flexbox, container queries and design tokens.",
    children: ["Flexbox", "Grid", "Animations", "Tailwind"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    slug: "javascript",
    proficiency: 91,
    blurb: "Core language fluency — async, modules and the modern ES toolchain.",
    children: ["ES2024", "Async", "DOM", "Modules"],
  },
  {
    id: "vue",
    name: "Vue.js",
    slug: "vuedotjs",
    proficiency: 88,
    blurb: "My primary framework — reactive, composable and a joy to scale.",
    children: ["Pinia", "Vue Router", "Composition API", "Lifecycle Hooks", "Axios", "Directives"],
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    proficiency: 78,
    blurb: "Component-driven UI with hooks, context and the modern RSC model.",
    children: ["Hooks", "Context", "Next.js", "RSC"],
  },
  {
    id: "mysql",
    name: "MySQL",
    slug: "mysql",
    proficiency: 74,
    blurb: "Relational data modelling, indexing and query optimisation.",
    children: ["Schemas", "Joins", "Indexing", "Queries"],
  },
  {
    id: "linux",
    name: "Linux",
    slug: "linux",
    proficiency: 82,
    blurb: "Comfortable on the shell — system administration and automation.",
    children: ["Bash", "Cron", "Permissions", "Networking"],
  },
  {
    id: "git",
    name: "Git",
    slug: "git",
    proficiency: 90,
    blurb: "Disciplined version control with clean, reviewable history.",
    children: ["Branching", "Rebase", "Hooks", "Tags"],
  },
  {
    id: "github",
    name: "GitHub",
    slug: "github",
    proficiency: 88,
    blurb: "Collaboration, automation and CI/CD with GitHub Actions.",
    children: ["Actions", "PRs", "Pages", "Packages"],
  },
  {
    id: "docker",
    name: "Docker",
    slug: "docker",
    proficiency: 71,
    blurb: "Reproducible environments with containers and multi-stage builds.",
    children: ["Images", "Compose", "Volumes", "Networks"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    slug: "kubernetes",
    proficiency: 56,
    blurb: "Orchestrating containers — deployments, services and scaling.",
    children: ["Pods", "Deployments", "Services", "Helm"],
  },
]


function getPosition(index, total) {

  const angle =
    (index / total) * Math.PI * 2
    - Math.PI / 2

  const radius = 35

  return {
    left: 50 + radius * Math.cos(angle),
    top: 50 + radius * Math.sin(angle)
  }
}


function getChildPosition(
  parentIndex,
  childIndex,
  totalParents,
  totalChildren
) {
  const parent =
    getPosition(parentIndex, totalParents)

  // virziens uz centru
  const dx = 45 - parent.left
  const dy = 40 - parent.top

  const centerAngle =
    Math.atan2(dy, dx)

  // cik plats būs bērnu ventilators
  const spread = Math.PI / 1.8

  const angle =
    centerAngle
    - spread / 2
    +
    (
      childIndex /
      Math.max(totalChildren - 1, 1)
    )
    * spread

  const childRadius = 13

  return {
    left:
      parent.left +
      childRadius * Math.cos(angle),

    top:
      parent.top +
      childRadius * Math.sin(angle)
  }
}


function curvePath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2

  const dx = x2 - x1
  const dy = y2 - y1

  const len = Math.hypot(dx, dy) || 1

  const off = 8

  const cx = mx + (-dy / len) * off
  const cy = my + (dx / len) * off

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}
</script>

