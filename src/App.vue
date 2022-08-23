<template>
   <VNavBar/>
    <router-view></router-view>
</template>

<script>
import VNavBar from './components/VNavBar.vue';
export default {
    components: { VNavBar },
}
</script>

<style>

</style>