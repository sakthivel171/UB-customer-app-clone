<template>
  <div class="grid grid-cols-3 whitespace-nowrap mx-auto gap-3">
    <router-link :to="`/category/0`"class="flex flex-col items-center justify-center bg-white p-3 rounded-lg drop-shadow-lg">
        <img src="https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/hG17yuAaHUox9wgtJpznM9jMZFwVNrOBxsklHMGa.png" class="w-24 p-3 mt-2 bg-slate-100 rounded-2xl" />
      <h3 class="text-center font-semibold font-montserrat text-sm mt-3">All Products</h3>
    </router-link>
    
    <router-link 
      v-for="category in categories"
      :key="category.categoryId"
      :to="`/category/${category.categoryId}`"
      class="flex flex-col items-center justify-center  bg-white p-4 rounded-lg drop-shadow-lg"
    >
      <img :src="category.image" class="w-24  p-3 mt-2 bg-slate-100 rounded-2xl" />
      <h3 class="text-center font-semibold tracking-tight text-pretty  font-montserrat   text-sm mt-3 ">{{ category.categoryName }}</h3>
    </router-link>
  </div> 
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    categories: {
      type: Array,

    },
  },
}
</script>
