<script setup>
import { reactive, ref, computed, onMounted, watchEffect  } from 'vue';
import NavBar from './components/view/HomeView/NavBar.vue/index.js';
import Footer from './components/view/Footer.vue/index.js';
import MainView from './components/MainView.vue';
import { useRoute, useRouter } from 'vue-router'

const name = "Marcis";
const elemnet = `<b>Mācības</b>`;
const isLogin = true;
const count = ref(25)

console.log(count.value)

const persona =reactive({
  name: 'Marcis',
  age: 25,
})
 Object.assign(persona, {
  name: 'janis',
  age: 25,
})
/************************COMPUTED**************************** */
            const author = reactive({
              name: 'John Doe',
              books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
              ]
            })
            const publishedBooksMessage = computed(() => {
              return author.books.length > 0 ? 'Да' : 'Нет'
            })
/************************COMPUTED**************************** */


const books = reactive({
    title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
});
const color =ref(false);
onMounted(()=>{
  console.log("Lapa ir gatava! Varu droši lietot pogas")

});
watchEffect(()=>{
  if (color.value){
    console.log("krāsas uzstādīta")
  } else {
    console.log("krāsas nomainīta")
  }
});
/*************PROPS PADOŠANA************************ */
const props = ref({
  title: "Mācības",
  gadi: 24,
  vards: "Mārcis",
  divnieki: ["kaķis", "suns", "vardes"]
});
/*************PROPS PADOŠANA************************ */

function reacton (n){
  console.log("nostrādāja", n)
}
const router = useRouter()
const route = useRoute()

// piemērs: nolasīt query parametru 'search'
const search = route.query.search ?? ''
// pārvirzīties uz citu lapu
router.push('/about')
</script>

<template>
  
  <NavBar></NavBar>
  <div>
      <h1>You did it!</h1>
  <p> Mans vārds ir: {{ name  }}</p>
  <p v-html="elemnet"></p>
  <p v-if="isLogin">
    Sveiks lietotājs {{ name }} tu esi reģistrējies 
  </p>
  <P v-else>REĢISTRĒTIES </P>
<a :href="`https://www.w3schools.com/`">links uz lapu </a>

<div><button  @click="count++">{{ count }}</button> </div> 

<p>{{ persona.name  }} {{  persona.age }}</p>

            <p>Есть опубликованные книги:</p>
            <span>{{ publishedBooksMessage }}</span>

<p v-for="(book, key, index) in books">
 {{ index }}. {{key}}: {{ book }}
</p>
 <div class="bg-red-500 text-white p-8 rounded-lg">
    Tailwind strādā!
  </div>

  </div>
  
<MainView 
  :title="props.title "
  :gadi="props.gadi"
  :vards="props.vards"
  :divnieki="props.divnieki"
    dzimums="vīrietis"

  @emit-tests="reacton"

  
><template #text ><p>Pārbaude izdevās</p></template></MainView>

<Footer/>



  <h1>Sveika, Lietotne!</h1>
  <p><strong>Pašreizējais ceļš:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Uz sākumu</RouterLink>
    <RouterLink to="/about">Par mums</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

 
<style scoped></style>