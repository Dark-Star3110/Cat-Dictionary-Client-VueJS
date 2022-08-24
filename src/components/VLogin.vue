<template>
 <div class="login-container">
   <div class="login-form">
    <va-form
      style="width: 300px;"
      tag="form"
      @submit.prevent="handleSubmit"
    >
      <va-input
        label="Email"
        v-model="email"
        :rules="[value => (value && value.length > 0) || 'Field is required']"
      />

      <va-input
        class="mt-3"
        label="Password"
        v-model="password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :rules="[value => (value && value.length > 0) || 'Field is required']"
      >
      <template #appendInner>
      <va-icon
        :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
        size="small"
        color="--va-primary"
        @click="isPasswordVisible = !isPasswordVisible"
      />
    </template>
      </va-input>

      <va-button type="submit" class="mt-3">
        Login
      </va-button>
    </va-form>
   </div>
 </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from "vue-router";
import {mapActions} from 'vuex';

export default {
  data () {
    return {
      isPasswordVisible: false,
      email: '',
      password: '',
    }
  },
  setup(){
   const catApi = "http://localhost:8000";

   const router = useRouter();

   const login = async (loginData) => {
      try {
        console.log(loginData);
        const res = await axios.post(catApi + "/login", loginData);
          if (res.data) {
              document.cookie = `token=${res.data.token}; expires=${res.data.expiresIn};`;
              router.back();
              document.location.assign('/');
          }
          alert(res.data.message);
      } catch (error) {
          console.log(error);
      }
    }

    return {
      login
    }
  },
  computed:mapActions(['getUser']),
  methods: {
    handleSubmit () {
      const loginData = {
          email: this.email,
          password: this.password,
      }
      this.login(loginData);
      this.email = '';
      this.password = '';
    },
  },
}
</script>

<style>
  .login-container{
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: rgb(207, 199, 199);
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
</style>