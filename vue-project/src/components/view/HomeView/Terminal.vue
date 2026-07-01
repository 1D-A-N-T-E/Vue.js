<template>
    <section class="mx-auto max-w-6xl px-4 py-12">
       <div class="reveal is-visible">
            <div class="overflow-hidden rounded-2xl border border-white/10 bg-[#16161e] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                  <div class="min-w-0 flex-1 animate-[float-y_7s_ease-in-out_infinite] ">
            <div class="overflow-hidden rounded-2xl border border-white-500/10 bg-[#1a1b26] 
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                <div class="flex items-center gap-2 border-b border-white/5 bg-[#16161e] px-4 py-3">
                    <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
                    <span class="ml-3 font-mono text-xs text-[#565f89]">Marcis@dev:~$</span>
                </div>          
            </div>
          </div>
                <div ref="terminal" class=""></div>
            </div>
        </div> 
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Terminal } from '@xterm/xterm'

const terminal = ref(null)

onMounted(() => {
  const term = new Terminal()
let currentLine = ''

term.onData((data) => {
    switch (data) {

        // Enter
        case '\r':
            executeCommand(currentLine)
            currentLine = ''
            term.write('\r\nMarcis@dev:~$ ')
            break

        // Backspace
        case '\u007F':
            if (currentLine.length > 0) {
                currentLine = currentLine.slice(0, -1)
                term.write('\b \b')
            }
            break

        default:
            currentLine += data
            term.write(data)
    }
})
const commands = {
    help() {
        term.writeln('Available commands:')
        term.writeln('help')
        term.writeln('about')
        term.writeln('projects')
    },

    about() {
        term.writeln('Frontend Developer')
    },

    clear() {
        term.clear()
    }
}
function executeCommand(command) {

    const cmd = command.trim()
    term.write('\r\n')
    if (commands[cmd]) {
        
        commands[cmd]()
    } else {
        term.writeln(`${cmd}: command not found`)
    }
}
  term.open(terminal.value)
  term.writeln('Welcome to my portfolio! Write help for more information')
  term.write('Marcis@dev:~$ ')
})

</script>