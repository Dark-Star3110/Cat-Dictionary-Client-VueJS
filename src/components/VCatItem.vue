<template>
  <div class="cat-card">
    <div class="cat-img">
      <router-link :to="`/cat/${catProps.id}`">
        <img :src="catProps.imgUrl" :alt="catProps.name">
      </router-link>
    </div>
    <div class="cat-name">
      <va-chip>{{catProps.name}}</va-chip>
    </div>
  </div>
</template>

<script>
export default {
  props:['catProps'],
}
</script>

<style>
.cat-card{
    width: 22%;
    box-shadow: 5px 10px 18px #888888;
    margin: 16px;
    border-radius: 10px;
    transition: transform 0.5s linear;
}

.cat-img {
   width: 100%;
  height: 360px;
  overflow: hidden;
}
.cat-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.cat-img img:hover {
  cursor: pointer;
  transform: scale(1.25);
}

.cat-name {
  font-size: 1.5em;
  padding: 10px 0;
  text-align: center;
}
</style>