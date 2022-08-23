<template>
<div class="cat-layout">
    <VCatItem v-for="cat in cats" :key="cat.id" :catProps="cat"/>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import VCatItem from './VCatItem.vue';

export default {
  name: "VCats",
  setup(){
    const catApi = 'http://localhost:8000';
    const cats = ref([]);

    const getAllCats = async () => {
      try {
        const res = await axios.get(catApi + "/cats");
        if(res.data){
          cats.value = res.data;
        }else{
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllCats();

    return {
      cats
    }
  },
  components:{VCatItem}
}
</script>

<style>
.cat-layout {
    margin-top: 20px;
    margin-left: 40px;
    display: flex;
    flex-wrap: wrap;
}
</style>