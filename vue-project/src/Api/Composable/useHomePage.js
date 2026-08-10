/**Sevī satur SkillTree, Projects */

//Pieprasam no servera datus 
  import { ref } from 'vue'
  import axios from 'axios';

  const error = ref(null);
  const BASE_URL  = 'https://ab6ac4190cdd9555.mokky.dev';

  
  export async function useHomePage(endpoint) {
    let response;
    try {
      response = await axios.get(BASE_URL + endpoint );

       if (response.status !== 200) {
      throw new Error(`Servera kļūda: ${response.status}`);
    }
     return response.data;
    
  } catch (err) {
    // Kļūdu apstrāde
    error.value = err.message || 'Neizdevās ielādēt datus';
    console.error('Kļūda:', err);
    return null;
    } 

   
  }





