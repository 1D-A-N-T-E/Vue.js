<template>
    <section id="projects" class="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div class="reveal is-visible mb-12 max-w-2xl" style="transition-delay:0ms">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          My API Projects
        </h2>
        <p class="mt-3 text-pretty text-muted-foreground text-gray-500">
         A selection of applications I've built around real-world APIs — focused on performance, clean data flow and refined interfaces.
        </p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <article 
              v-for="PROJECT in PROJECTS"
              class="reveal is-visible group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-lime/40 hover:shadow-xl"
              style="transition-delay:0ms">
              <div class="flex items-start justify-between">
                <span class="grid h-12 w-12 place-items-center rounded-xl bg-lime-500/15  text-foreground transition-colors group-hover:bg-lime-500/25">
                   <component :is="PROJECT.icon" class="h-6 w-6" />
                </span>
                <ArrowUpRight  class="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 class="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {{ PROJECT.name }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground  text-gray-500">
                    {{ PROJECT.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-1.5  text-gray-500/70">
               
                  <span
                    v-for="child in PROJECT.stack" 
                    :key="child" 
                    class="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {{ child }}
                  </span>
            
              </div>

              <a
                href="#"
                class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-foreground"
              >
                View Project
                <ArrowUpRight class="h-4 w-4" />
              </a>
            </article>
     
      </div>
    </section>
</template>

<script setup>
import { ArrowUpRight, CloudSun, Film, Bitcoin, Newspaper, ShoppingBag } from 'lucide-vue-next'
const PROJECTS = [
  {
    icon: CloudSun,
    name: "Weather API",
    description: "Real-time forecasts with geolocation, hourly charts and severe-weather alerts.",
    stack: ["Vue.js", "OpenWeather", "Chart.js"],
  },
  {
    icon: Film,
    name: "Movie API",
    description: "Browse, search and rate films with a TMDB-powered discovery engine.",
    stack: ["Vue.js", "TMDB", "Pinia"],
  },
  {
    icon: Bitcoin,
    name: "Crypto API",
    description: "Live price tracking, portfolio analytics and historical candlestick data.",
    stack: ["Vue.js", "CoinGecko", "WebSocket"],
  },
  {
    icon: Newspaper,
    name: "News API",
    description: "Aggregated headlines with category filters and saved-article reading list.",
    stack: ["Vue.js", "NewsAPI", "Tailwind"],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce API",
    description: "Headless storefront with cart, checkout and inventory synchronisation.",
    stack: ["Vue.js", "Stripe", "MySQL"],
  },
]
</script>