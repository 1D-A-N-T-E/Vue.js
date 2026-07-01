<template>
    <section id="Contact" class="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div class="grid gap-10 rounded-4xl border border-border  border-gray-300  bg-card p-7 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-12">
        <div class="reveal is-visible" style="transition-delay:0ms">
          <h2 class="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Contact Me
          </h2>
          <p class="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground  text-gray-500">
            Have a question or want to work together? Drop a message below and it'll land straight in my inbox.
          </p>
          <div class="mt-8 flex items-center gap-2 text-sm text-muted-foreground  text-gray-500">
            <span class="relative flex h-2 w-2 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-700 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Usually replies within 24 hours
          </div>
        </div>
        <div class="reveal is-visible" style="transition-delay:100ms">
            <form action enctype="multipart/form-data" class="flex flex-col gap-4">
                <input type="hidden" name="$ACTION_REF_1">
               <!--Email and Company section  --> 
                <div class="grid gap-4 sm:grid-cols-2">
                    <div> 
                        <label for="email" class="mb-1.5 block text-sm font-medium text-foreground ">Your Email</label>
                        <input id="email" type="email" required placeholder="you@example.com" class="w-full rounded-full border border-border border-gray-300 bg-background px-4 py-3 
                        text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-lime/60" name="email">
                    </div>
                    <div>
                         <label for="company" class="mb-1.5 block text-sm font-medium text-foreground">Company / Organization</label>
                        <input id="company" type="company" required placeholder="Acme Inc. (optional)" class="w-full rounded-full border border-border border-gray-300 bg-background px-4 py-3 
                        text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-lime/60" name="company">
                    </div>
                </div>
                <!--Message block  --> 
                <div>
                     <label for="message" class="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                        <textarea id="message" rows="5"  type="message" required placeholder="Tell me about your project..." class="w-full rounded-xl border border-border border-gray-300 bg-background px-4 py-3
                         text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-lime/60 resize-none" name="message"></textarea>
                </div>
                <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <Buttton >
                    Send Message <ArrowRight/></Buttton>
                </div>
            </form>
        </div>
    </div>
    </section>
</template>

<script setup>
import Buttton from '@/components/Buttton.vue';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-vue-next'

</script>