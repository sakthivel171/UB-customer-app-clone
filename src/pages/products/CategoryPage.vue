<template>
  <div>
    <!-- This is header part  -->
    <div class="fixed z-10 flex items-center h-12 p-4 mx-auto text-white bg-[#73983c] w-[500px]">
      <ion-icon name="arrow-back" class="text-3xl leading-none cursor-pointer" @click="goback"></ion-icon>
      <p class="text-2xl font-medium font-montserrat text-center mx-auto leading-none">Product</p>
    </div>


    <section class="bg-[rgb(229,231,235)] min-h-screen px-4 py-20">
      <div class="mb-6">
        <input v-model="searchQuery" type="booton" placeholder="Search Our Catalogue"
          class="w-full max-w-md p-2  bg-transparent text-xl  rounded-md border-2 border-gray-500 focus:outline-none placeholder:text-lg " />
      </div>
      <!-- It show all the products -->
      <div v-if="isallproducts">
        <div class="grid grid-cols-2 gap-5">

          <div v-for="product in filteredallproducts" :key="product.id" class="bg-white shadow-md rounded-xl mi">
            <div class="flex flex-col items-center justify-center leading-8 tracking-wide px-4 pb-6 rounded-lg">
              <img :src="product.image" class="rounded-xl" />
              <h3 class="font-semibold text-center font-montserrat text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-700">{{ product.unit }}</p>
               <!-- ADD DISCOUNT -->
              <div class="flex gap-3 py-1 min-h-[24px]">
                <template v-if="!product.discount">
                  <p class="text-[16px] font-medium text-gray-900 line-through">₹{{ product.rate }}</p>
                  <p class="text-[16px] font-montserrat font-medium text-[#73983c]">save ₹{{ product.save }}</p>
                </template>
                <template v-else>
                  <!-- Empty placeholder to maintain height -->
                  <p class="text-sm  text-transparent">.</p>
                </template>
              </div>


              <p class="text-lg font-bold text-gray-700">₹ {{ product.price }}</p>
              <!-- add or remove quantity -->
              <div v-if="!product.subscription" class="flex items-center gap-6 mt-2 bg-[#e5e7eb] rounded-md">
                <button @click="$store.commit('REMOVE_FROM_CART', product)"
                  class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon name="remove-outline"></ion-icon></button>
                <span class="text-lg font-semibold w-6 text-center">{{ getQuantity(product.id) }}</span>
                <button @click="$store.commit('ADD_TO_CART', product)"
                  class="px-2 text-white rounded-lg bg-[#73983c]"><ion-icon name="add-outline"></ion-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- This show each products in the categories -->
      <div v-else-if="category">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="product in filteredcategoryproducts" :key="product.id" class="w-full bg-white shadow rounded-xl">
            <img :src="product.image" class="rounded-xl" />
            <div class="flex flex-col items-center justify-center leading-8 tracking-wide px-4 pb-6">
              <h3 class="font-semibold text-center font-montserrat text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-700">{{ product.unit }}</p>

               <!-- ADD DISCOUNT -->
              <div class="flex gap-3 py-1 min-h-[24px]">
                <template v-if="!product.discount">
                  <p class="text-[16px] font-medium text-gray-900 line-through">₹{{ product.rate }}</p>
                  <p class="text-[16px] font-montserrat font-medium text-[#73983c]">save ₹{{ product.save }}</p>
                </template>
                <template v-else>
                  <!-- Empty placeholder to maintain height -->
                  <p class="text-sm  text-transparent">.</p>
                </template>
              </div>
              <p class="text-lg font-bold text-gray-700">₹ {{ product.price }}</p>

              <!-- add or remove quantity
               of  product -->
              <div v-if="!product.subscription"
                class="flex items-center justify-between gap-6 bg-[#e5e7eb]  mt-2 rounded-md">
                <button @click="$store.commit('REMOVE_FROM_CART', product)"
                  class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon name="remove-outline"></ion-icon></button>
                <span class="text-lg font-semibold w-6 text-center ">{{ getQuantity(product.id) }}</span>
                <button @click="$store.commit('ADD_TO_CART', product)"
                  class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon name="add-outline"></ion-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--If no poduct in categories-->
      <p v-else class="text-red-500">Category not found.</p>

    </section>
  </div>

</template>

<script>
import { categories } from "../../data/products.js"
import { mapActions, mapGetters } from "vuex"


export default {
  name: "CategoryPage",
  props: {
    id: { type: [String, Number], required: true }
  },
  data() {
    return {
      searchQuery: ""
    }
  },
  computed: {
    ...mapGetters(["getQuantity"]),

    numberid() {
      return Number(this.id)
    },
    isallproducts() {
      return this.numberid === 0
    },
    category() {
      return categories.find(c => c.categoryId === Number(this.id))
    },
    allproducts() {
      const all = categories.flatMap(c => c.products)
      const unique = []
      const seen = new Set()

      for (const p of all) {
        if (!seen.has(p.id)) {
          seen.add(p.id)
          unique.push(p)
        }
      }
      return unique
    },
    filteredallproducts() {
      return this.allproducts.filter(p =>
        (p.name + "" + p.unit).toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    filteredcategoryproducts() {
      if (!this.category) return []
      return this.category.products.filter(p =>
        (p.name + "" + p.unit).toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }

  },
  methods: {
    // ...mapActions(["addToCart", "removeFromCart"]), 
    goback() {
      this.$router.back()
    }
  }
}
</script>
