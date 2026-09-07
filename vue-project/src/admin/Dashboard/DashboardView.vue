


<template>
     <div class="users-container">
      <h2>Lietotāju saraksts</h2>
      
      <button @click="fetchUsers" :disabled="isLoadingUsers">
        {{ isLoadingUsers ? 'Ielādē...' : 'Atsvaidzināt' }}
      </button>
      
      <!-- Ielādes stāvoklis -->
      <div v-if="isLoadingUsers">Ielādē lietotājus...</div>
      
      <!-- Lietotāju saraksts -->
      <div v-else-if="users.length > 0">
        <div v-for="user in users" :key="user.id">
          <div>
            <h3>{{ user.name }}</h3>
            <p>E-pasts: {{ user.email }}</p>
            <p v-if="user.message">Ziņojums: {{ user.message }}</p>
            <small>Izveidots: {{ formatDate(user.created_at) }}</small>
          </div>
          <button @click="deleteUser(user.id)">
            Dzēst
          </button>
        </div>
      </div>
      
      <div v-else>
        Nav neviena lietotāja
      </div>
    </div>
 



</template>
<script setup>
// ============================================
// 1️⃣ IMPORTS
// ============================================
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'


// ============================================
// 2️⃣ API KONFIGURĀCIJA
// ============================================
const API_URL = 'http://localhost:3000/admin/users'


// ============================================
// 3️⃣ REAKTĪVIE DATI (ref un reactive)
// ============================================

// 🔹 Formas dati - izmanto reactive, jo ir objekts
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// 🔹 Lietotāju saraksts - izmanto ref, jo ir masīvs
const users = ref([])

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
async function fetchUsers() {
  // Ieslēdz ielādes indikatoru
  isLoadingUsers.value = true
  
  try {
    // Sūta GET pieprasījumu uz serveri
    const response = await axios.get(API_URL)
    
    // Saglabā saņemtos datus
    users.value = response.data.data
    
    // Parāda veiksmes ziņojumu
    statusMessage.value = '✅ Lietotāji veiksmīgi ielādēti'
    statusType.value = 'success'
    
  } catch (error) {
    // Kļūdas apstrāde
    console.error('Kļūda ielādējot lietotājus:', error)
    
    statusMessage.value = '❌ Nevar ielādēt lietotājus'
    statusType.value = 'error'
    
  } finally {
    // Vienmēr izslēdz ielādes indikatoru (arī kļūdas gadījumā)
    isLoadingUsers.value = false
    
    // Noņem ziņojumu pēc 5 sekundēm
    setTimeout(() => {
      statusMessage.value = ''
    }, 5000)
  }
}

function formatDate(date) {
  return new Intl.DateTimeFormat('lv-LV', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(date))
}

async function deleteUser(id) {
  if (!window.confirm('Vai tiešām dzēst šo lietotāju?')) return

  try {
    await axios.delete(`${API_URL}/${id}`)
    users.value = users.value.filter((user) => user.id !== id)
  } catch (error) {
    console.error('Kļūda, dzēšot lietotāju:', error)
    statusMessage.value = '❌ Neizdevās dzēst lietotāju'
    statusType.value = 'error'
  }
}

onMounted(() => {
  fetchUsers()
})

// ============================================
// 6️⃣ EXPORTS (nav nepieciešams <script setup>)
// ============================================
// Ar <script setup> visas funkcijas ir automātiski pieejamas template
</script>
