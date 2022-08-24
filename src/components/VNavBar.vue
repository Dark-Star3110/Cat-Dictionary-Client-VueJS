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
      <router-link to="/login" v-if="!user">
        <va-button color="#ed6c02" gradient class="mr-4 mt-1">Login</va-button>
      </router-link>
      <va-button-dropdown v-if="user">
        <template #label>
          <va-avatar :src="user.avatarUrl ? user.avatarUrl : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'" />
        </template>
        <va-alert color="success" class="mb-4">
            {{user.lastName + ' ' + user.firstName}}
          </va-alert>
        <va-button @click="onClick">Logout</va-button>
      </va-button-dropdown>
    </template>
    <va-modal v-model="showModal" :message="message" title="Overview" />
  </va-navbar>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
  name: 'VNavBar',
  created(){
    this.getUser();
  },
  data(){
    return {
      showModal: false,
    }
  },
  computed: mapState(['user']),
  methods:{...mapActions(['getUser']),
  logout(){
    document.cookie = "token=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    document.location.reload();
  },
  cancel(){
    this.showModal = !this.showModal;
  },
  onClick(){
    this.$vaModal.init({
      message:'Are you sure logout ?',
      onOk: this.logout,
      onCancel: this.cancel,
    })
  }
  }
}
</script>

<style>

</style>