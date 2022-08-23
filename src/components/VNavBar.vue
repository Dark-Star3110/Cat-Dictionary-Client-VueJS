<template>
  <va-navbar color="primary" shape class="mb-2">
    <template #left>
    <router-link to="/" class="logo">
      <va-icon
      name="home"
      color="#ed6c02"
      />
      <va-chip>CATS</va-chip>
    </router-link>
    </template>
    <template #center>
    </template>
    <template #right>
      <router-link to="/add-cat">
        <va-button color="success" gradient class="mr-4 mt-1">Add Cat</va-button>
      </router-link>
      <router-link to="/login">
        <va-button color="#ed6c02" gradient class="mr-4 mt-1">Login</va-button>
      </router-link>
      <va-button-dropdown>
        <template #label>
          <va-avatar src="https://randomuser.me/api/portraits/women/5.jpg" />
        </template>
        <va-button>Logout</va-button>
      </va-button-dropdown>
    </template>
  </va-navbar>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup(){
    const catApi = 'http://localhost:8000'
    const user = ref();

    const getUser = async () =>{
     try {
       const res = await axios.get(catApi+'/user/',{
        withCredentials:true,
      });

      user.value = res.data;
     } catch (error) {
      console.log(error);
     }
    }

    getUser();

    return {
      user
    }
  }
}
</script>

<style>

</style>