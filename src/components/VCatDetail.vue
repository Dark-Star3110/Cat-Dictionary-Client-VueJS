<template>
 <div class="cat-intro">
      <div class="cat-img-detail">
        <img :src="cat.imgUrl" :alt="cat.name"/>
      </div>
      <div class="cat-info">
          <h2>
              Name:
              <span
                  style="color:orange;font-weight: 500;"
              >
                  {{cat.name}}
              </span>
          </h2>
          <h3>
              Origin:
              <span
                style="color:red;font-weight: 500;"
              >
                  {{cat.origin}}
              </span>
          </h3>
          <h3>
              Life span:
              <span
              style="color:greenyellow;font-weight: 500;"
              >
                  {{cat.lifeSpan}} years
              </span>
          </h3>
          <h4>
              Post by:
              <span
                style="color:'#888';font-weight: 500;"
              >
                  {{`${cat.user.lastName} ${cat.user.firstName}`}}
              </span>
          </h4>
          <div>
              <span>
                      <router-link :to="`/update/${cat.id}`">
                        <va-button color="info" gradient class="mr-4" :disabled="user.email !== cat.user.email">
                          <va-icon name="edit"></va-icon>
                      </va-button>
                      </router-link>
              </span>
              <span>
                  <va-button color="danger" gradient :disabled="user.email !== cat.user.email" @click="onClick">
                      <va-icon name="delete"></va-icon>
                  </va-button>
              </span>
          </div>
      </div>
  </div>
  <div class="cat-des">
    <p>{{cat.description}}</p>
  </div>
  <router-link to="/" style="padding:20px;">
      <va-button >Back to Home Page</va-button>
  </router-link>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import {useRoute} from 'vue-router';
import {mapActions,mapState} from 'vuex'

export default {
  name: "VCatDetail",
  created(){
    this.getUser();
  },
  data(){
    return {
      showModal: false,
    }
  },
  setup(){
    const catApi = 'http://localhost:8000';
    const cat = ref([]);

    const route=useRoute();
    const id = route.params.id;

    const getCat = async () => {
      try {
        const res = await axios.get(catApi + `/cats/${id}`);
        if(res.data){
          cat.value = res.data;
          console.log(cat.value);
        }else{
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCat();

    const deleteCat = async () => {
      try {
        const res = await axios.delete(`${catApi}/cats/delete/${id}`);
        if(res.data.success) {
          alert(res.data.message);
          document.location.replace('/');
        }else{
          alert('something went wrong, please try again');
        }
      } catch (error) {
        console.log(error);
      }
    }

    return {
      cat,
      deleteCat,
    }
  },
  computed:mapState(['user']),
  methods:{...mapActions(['getUser']),
  cancel(){
    this.showModal = !this.showModal;
  },
  onClick(){
    this.$vaModal.init({
      message:'Are you sure want to delete this cat?',
      onOk: this.deleteCat,
      onCancel: this.cancel,
    })
  }
  }
}
</script>

<style>
  .cat-intro {
    display: flex;
    margin-top: 20px;
  }

  .cat-img-detail {
    width: 50%;
    height: 600px;
    padding: 20px;
    overflow: hidden;
  }

  .cat-img-detail img {
    width: 100%;
     height: 100%;
     border-radius: 10px;
     object-fit: cover;
    box-shadow: 0 0 5px #333;
    }

  .cat-img-detail img:hover {
        cursor: pointer;
  }

  .cat-info {
    width: 50%;
    padding: 20px;
  }

  .cat-info h2,h3,h4{
    margin-bottom: 10px;
  }

  .cat-des{
    padding: 0 20px 20px 20px;
    font-size: 20px;
  }
</style>