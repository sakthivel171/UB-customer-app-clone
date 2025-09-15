<template>
  <div>

    <div class="fixed z-10 flex items-center h-12 p-4 mx-auto text-white bg-[#73983c] w-[500px]">
      <ion-icon name="arrow-back" class="text-3xl leading-none cursor-pointer" @click="goback"></ion-icon>
      <p class="text-2xl font-medium font-montserrat text-center mx-auto leading-none">Product</p>
    </div>


    <section class="bg-[rgb(229,231,235)] min-h-screen px-4 py-20">

      <div v-if="isallproducts">
        <div class="grid grid-cols-2 gap-5">
          <div v-for="product in allproducts" :key="product.id" class="bg-white shadow-md rounded-xl">
            <div class="flex flex-col items-center justify-center leading-8 tracking-wide px-4 pb-6 rounded-lg">
              <img :src="product.image" class="rounded-xl" />
              <h3 class="font-semibold text-center font-montserrat text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-700">{{ product.unit }}</p>
              <p class="text-lg font-bold text-gray-700">₹ {{ product.price }}</p>


              <div v-if="!product.subscription" class="flex items-center gap-6 mt-2 bg-[#e5e7eb] rounded-md">
                <button @click="removeFromCart(product)" class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon
                    name="remove-outline"></ion-icon></button>
                <span class="text-lg font-semibold w-6 text-center">{{ getQuantity(product.id) }}</span>
                <button @click="addToCart(product)" class="px-2 text-white rounded-lg bg-[#73983c]"><ion-icon
                    name="add-outline"></ion-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="category">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="product in category.products" :key="product.id" class="w-full bg-white shadow rounded-xl">
            <img :src="product.image" class="rounded-xl" />
            <div class="flex flex-col items-center justify-center leading-8 tracking-wide px-4 pb-6">
              <h3 class="font-semibold text-center font-montserrat text-gray-900">{{ product.name }}</h3>
              <p class="text-sm text-gray-700">{{ product.unit }}</p>
              <p class="text-lg font-bold text-gray-700">₹ {{ product.price }}</p>


              <div v-if="!product.subscription" class="flex items-center justify-between gap-6 bg-[#e5e7eb]  mt-2">
                <button @click="removeFromCart(product)" class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon
                    name="remove-outline"></ion-icon></button>
                <span class="text-lg font-semibold w-6 text-center ">{{ getQuantity(product.id) }}</span>
                <button @click="addToCart(product)" class="px-2  text-white rounded-lg bg-[#73983c]"><ion-icon
                    name="add-outline"></ion-icon></button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    }
  },
  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
    goback() {
      this.$router.back()
    }
  }
}
</script>
