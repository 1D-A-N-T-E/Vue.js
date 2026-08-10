<script setup>
import { ref } from "vue";


const message = ref("");

const messages = ref([
    {
        role: "assistant",
        text: "Sveiki! Es esmu Mārca portfolio AI asistents 🤖"
    }
]);


const loading = ref(false);

const sendMessage = async () => {

    if (!message.value.trim()) return;
    const userText = message.value;


    // pievienojam lietotāja ziņu
    messages.value.push({
        role:"user",
        text:userText
    });


    message.value = "";
    loading.value = true;
    try {


        const response = await fetch(
            "http://localhost:3000/chat",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    message:userText
                })

            }
        );


        const data = await response.json();

        messages.value.push({

            role:"assistant",

            text:data.answer

        });

    } catch(error){


        messages.value.push({

            role:"assistant",

            text:"Servera kļūda ❌"

        });
        console.error(error);

    }


    loading.value = false;

};

</script>


<template>

<div class="flex h-screen items-center justify-center bg-zinc-950">


    <div
        class="flex h-[700px] w-full max-w-3xl flex-col rounded-2xl border border-zinc-800 bg-zinc-900"
    >


        <!-- Header -->

        <div class="border-b border-zinc-800 p-5">

            <h1 class="text-xl font-bold text-white">
                Portfolio AI Assistant
            </h1>

            <p class="text-sm text-zinc-400">
                Ask me about projects, skills and experience
            </p>

        </div>



        <!-- Messages -->

        <div
            class="flex-1 space-y-4 overflow-y-auto p-5"
        >


            <div
                v-for="(msg,index) in messages"
                :key="index"
                class="flex"
                :class="msg.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'"
            >


                <div
                    class="max-w-[70%] rounded-2xl px-4 py-3 text-sm"
                    :class="msg.role === 'user'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-zinc-800 text-zinc-200'"
                >

                    {{ msg.text }}

                </div>
            </div>

            <div
                v-if="loading"
                class="text-sm text-zinc-400"
            >
                AI raksta...
            </div>


        </div>



        <!-- Input -->


        <form
            @submit.prevent="sendMessage"
            class="border-t border-zinc-800 p-5"
        >

            <div class="flex gap-3">


                <input
                    v-model="message"
                    placeholder="Uzdod jautājumu..."
                    class="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >


                <button
                    class="rounded-xl bg-cyan-600 px-6 text-white hover:bg-cyan-500"
                >

                    Send

                </button>


            </div>


        </form>


    </div>


</div>


</template>