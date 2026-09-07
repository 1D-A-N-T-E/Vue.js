


<template>

 

 <section class="min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-white/30 backdrop-blur-sm">
   <!-- Login Form -->
    <div  class="w-full max-w-md border border-gray-200 rounded-[32px] p-10 shadow-sm">

        <div class="mb-8">

            <p class="uppercase text-sm tracking-widest text-gray-500">
                Welcome back
            </p>

            <h1 class="text-4xl font-bold mt-2">
                Login
            </h1>

            <p class="text-gray-500 mt-3">
                Continue where you left off.
            </p>

        </div>

        <form  @submit.prevent class="space-y-5">

            <div>

                <label class="text-sm text-gray-500 mb-2 block">
                    Email
                </label>
                <input
                    v-model="form.email"
                    type="email"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-black transition"
                    placeholder="john@example.com"
                >
            </div>

            <div>
                <label class="text-sm text-gray-500 mb-2 block">
                    Password
                </label>

                <input
                v-model="form.password"
                    type="password"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-black transition"
                    placeholder="••••••••••"
                >

            </div>

            <button
            @click="login"
                type="submit"
                class="w-full h-12 rounded-full bg-black text-white hover:opacity-90 transition"
            >
                Login
            </button>

        </form>

    </div>
</section>

</template>
<script setup>
// ============================================
// 1️⃣ IMPORTS
// ============================================
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter();

// ============================================
// 2️⃣ API KONFIGURĀCIJA
// ============================================
const API_URL = 'http://localhost:3000/admin/login'


// ============================================
// 3️⃣ REAKTĪVIE DATI (ref un reactive)
// ============================================

// 🔹 Formas dati - izmanto reactive, jo ir objekts
const form = reactive({
  email: '',
  password: ''
})


// 🔹 Stāvokļa mainīgie - ref priektiviem
const isSubmitting = ref(false)
const isLoadingUsers = ref(false)
const statusMessage = ref('')
const statusType = ref('success')

// ============================================
// 4️⃣ METODES (FUNKCIJAS)
// ============================================

/**
 * 📥 IEGŪT LIETOTĀJUS NO SERVERA
 */
async function login() {
  // Ieslēdz ielādes indikatoru
  isLoadingUsers.value = true
  
  try {
    // Sūta GET pieprasījumu uz serveri
    const response = await axios.post(API_URL, {
      email: form.email,
      password: form.password
    });
     localStorage.setItem('token', response.data.token);
    
    
    // Parāda veiksmes ziņojumu
    statusMessage.value = '✅ Lietotāji veiksmīgi ielādēti'
    statusType.value = 'success'
        // 5. PĀRNOVIRZA UZ ADMIN PANELI
      router.push('/admin/dashboard');

  }catch(error) {
    console.error('Kļūda, dzēšot lietotāju:', error)
  }
};



onMounted(() => {
  login()
})


</script>
