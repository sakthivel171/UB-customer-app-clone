<template>
  <!-- This is the main page that show the categories of product -->
  <section>
    <div class="fixed z-10 flex items-center  h-12 p-4 mx-auto text-white shadow-md bg-[#73983c] w-[500px] ">
      <ion-icon @click="goback" name="arrow-back" class="text-3xl leading-none cursor-pointer"></ion-icon>
      <p class="text-2xl font-medium  font-montserrat px-10 leading-none">Product Categories</p>
    </div>
    <div v-if="loading">
      <loader/>
    </div>
    <div v-else class="px-4 pt-20 pb-10 bg-[#e5e7eb] min-h-screen ">
      <Category :categories="categories"/>
    </div>
  </section>
</template>

<script>
import { categories } from "../../data/products.js"
import Category from "../../components/Category.vue"
import loader from "../../components/loader.vue"

export default {
  name: "Products",
  components: { Category,loader },
  data() {
    return { categories:[],loading:true }
  },
   created(){
    setTimeout(()=>{
      this.categories=categories
      this.loading=false
    },500)
  }, 
  methods:{
    goback(){
      this.$router.back()
    }
  }
}
</script>
