<template>
    <section id="roadmap" class="mx-auto max-w-6xl px-4 py-16">
        <div class="grid gap-6 md:grid-cols-2">
            <div class="reveal is-visible rounded-2xl border border-border  border-gray-300  bg-card p-7 shadow-sm" style="transition-delay:0ms">
                <h3 class="text-lg font-semibold tracking-tight text-foreground">Currently Learning</h3>
                <p class="mt-1 text-sm text-muted-foreground  text-gray-500">Sharpening these in active projects.</p>
                <div class="mt-6 flex flex-col gap-5">
                    <div v-for="LEARN in LEARNING"> 
                        <div class="mb-2 flex items-center justify-between text-sm">
                            <span class="font-medium text-foreground">{{ LEARN.name }}</span>
                            <span class="text-muted-foreground  text-gray-500">{{LEARN.progress}}%</span>
                        </div>
                        <div class="h-2 w-full overflow-hidden rounded-full  bg-muted">               
                          <div class="h-full rounded-full bg-lime-500" :style="{width:LEARN.progress + '%'}"></div>
                        </div>
                    </div>
                </div>
            </div>
                <!--Next goals  --> 
            <div class="reveal is-visible rounded-2xl border border-border border-gray-300 bg-card p-7 shadow-sm" style="transition-delay:120ms">
                <h3 class="text-lg font-semibold tracking-tight text-foreground">Next Goals</h3>
                <p class="mt-1 text-sm text-muted-foreground  text-gray-500">Where I'm heading next.</p>
                <ul class="mt-6 flex flex-col gap-3">
                    <li v-for="GOAL in GOALS" class="flex items-center gap-3 rounded-xl border border-border border-gray-300 bg-background px-4 py-3 transition-colors hover:border-lime/40">
                        <span class="grid h-8 w-8 place-items-center rounded-full bg-lime-400/15 text-foreground ">
                             <Target class="h-4 w-4" />
                        </span>
                        <span class="text-sm font-medium text-foreground">{{ GOAL}}</span>
                        <span class="ml-auto text-xs  text-gray-500 text-muted-foreground">Planned</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>


<script setup>
import { Target } from 'lucide-vue-next'
const LEARNING = [
  { name: "Vue Router", progress: 75 },
  { name: "Pinia", progress: 60 },
  { name: "Docker", progress: 45 },
];
const GOALS = ["TypeScript", "CI/CD", "Terraform"];
</script>