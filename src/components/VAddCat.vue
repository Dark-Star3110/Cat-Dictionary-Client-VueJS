<template>
  <div class="addcat-container">
    <va-card style="padding: 0.75rem;width: 800px;">
     <div class="mb-2 d-flex">
       <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="name"
                label="Name"
                placeholder="Input name"
            />
          </div>
        </div>
        <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="origin"
                label="Origin"
                placeholder="Input origin"
            />
          </div>
        </div>
     </div>

      <div class="mb-2 d-flex">
        <div class="md-6">
          <div class="item">
            <va-input
              class="mb-6 mr-4 md-8"
              v-model="lifeSpan"
              label="Life Span"
              placeholder="Input life span"
          />
          </div>
        </div>
        <div class="md-6">
          <div class="item">
            <va-input
                class="mb-6 mr-4 md-8"
                v-model="imgUrl"
                label="Image URL"
                placeholder="Input image url"
            />
          </div>
        </div>
      </div>
      <div class="d-flex">
          <div class="md-12">
              <div class="item">
              <va-input
                  class="mb-4 md-12"
                  v-model="description"
                  type="textarea"
                  label="Desciption"
                  :min-rows="3"
                  :max-rows="5"
                />
            </div>
          </div>
      </div>
       <va-button class="mt-1">
        Add Cat
      </va-button>
    </va-card>
  </div>
</template>

<script>
export default {
  name:"VAddCat",
  data () {
    return {
      name: "",
      origin: "",
      lifeSpan: "",
      description: "",
      imgUrl: "",
    }
  },
}
</script>

<style>
  .addcat-container{
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