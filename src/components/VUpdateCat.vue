<template>
  <div class="updatecat-container">
    <va-card style="padding: 0.75rem;width: 800px;">
     <div class="mb-2 d-flex">
       <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="newCat.name"
                label="Name"
                placeholder="Input name"
                name="name"
                @change="setNewCat"
            />
          </div>
        </div>
        <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="newCat.origin"
                label="Origin"
                placeholder="Input origin"
                name="origin"
                @change="setNewCat"
            />
          </div>
        </div>
     </div>

      <div class="mb-2 d-flex">
        <div class="md-6">
          <div class="item">
            <va-input
              class="mb-6 mr-4 md-8"
              v-model="newCat.lifeSpan"
              label="Life Span"
              placeholder="Input life span"
              name="lifeSpan"
              @change="setNewCat"
          />
          </div>
        </div>
        <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="newCat.imgUrl"
                label="Image URL"
                placeholder="Input image url"
                name="imgUrl"
                @change="setNewCat"
            />
          </div>
        </div>
      </div>
      <div class="d-flex">
          <div class="md-12">
              <div class="item">
              <va-input
                  class="mb-4 md-12"
                  v-model="newCat.description"
                  type="textarea"
                  label="Desciption"
                  :min-rows="3"
                  :max-rows="5"
                  name="description"
                  @change="setNewCat"
                />
            </div>
          </div>
      </div>
       <va-button class="mt-1" @click="updateCat">
        Update Cat
      </va-button>
    </va-card>
  </div>
</template>

<script>
import axios from 'axios';
import {useRoute} from 'vue-router';

export default {
  name:"VUpdateCat",
  data(){
    return{
      newCat:{
        name: "",
        origin: "",
        lifeSpan: "",
        description: "",
        imgUrl: "",
      }
    }
  },
  setup(){
    const catApi = "http://localhost:8000";
     const route=useRoute();
    const id = route.params.id;

    const updateCatApi = async (newCat) => {
      console.log(id);
      try {
        const res = await axios.put(`${catApi}/cats/update/${id}`,newCat);
        if(res.data){
          alert('Update cat successfully');
        }else
          alert('Update cat error');
      } catch (error) {
        console.log(error);
      }
    }
    return {
      updateCatApi
    }
  },
  methods: {
    setNewCat(e){
      this.newCat = {
        ...this.newCat,
        [`${e.target.name}`]: e.target.value,
      }
    },
    updateCat(){
      this.updateCatApi(this.newCat);
    }
  }
}
</script>

<style>
  .updatecat-container{
    height: 80vh;
    display: grid;
    place-items: center;
  }

  .d-flex{
    display: flex;
  }

  .md-12{
    width: 100%;
  }

  .md-8{
    width: 90%;
  }

  .md-6{
    width: 50%;
  }
</style>