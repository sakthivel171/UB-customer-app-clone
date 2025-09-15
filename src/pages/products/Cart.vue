<template>
    <div class="fixed z-10 flex items-center h-12 p-4 mx-auto text-white bg-[#73983c] w-[500px]">
      <ion-icon name="arrow-back" class="text-3xl leading-none cursor-pointer" @click="goback"></ion-icon>
      <p class="text-2xl font-medium font-montserrat text-center mx-auto leading-none">Cart</p>
    </div>
  <section class="bg-[#e5e7eb] min-h-screen px-6 py-20">
    <div v-if="cart.length > 0" class="space-y-6">
      <!-- Cart Items -->
      <div v-for="item in cart" :key="item.id" class="bg-white shadow-md rounded-xl p-4 flex  justify-between items-center">
        
        <div>
          <h3 class="font-semibold text-gray-900">{{ item.name }}</h3>
          <p class="text-sm text-gray-700">{{ item.unit }}</p>
          <p class="text-sm text-gray-700">Price: ₹ {{ item.price }}</p>
          <p class="text-sm text-gray-700">Subtotal: ₹ {{ item.price * item.quantity }}</p>
        </div>

        <!-- Quantity Controls -->
        <div class="flex items-center justify-between gap-6 bg-[#e5e7eb] rounded-md  mt-2">
          <button @click="removeFromCart(item)" class="px-2 py-1 text-white rounded-lg bg-[#73983c]"><ion-icon name="remove-outline"></ion-icon></button>
          <span class="text-lg font-semibold w-6 text-center">{{ item.quantity }}</span>
          <button @click="addToCart(item)" class="px-2 py-1 text-white rounded-lg bg-[#73983c]"><ion-icon name="add-outline"></ion-icon></button>
        </div>
      </div>

      <!-- Total -->
      <div class="bg-white shadow-md rounded-xl p-4 flex justify-between items-center font-bold text-lg">
        <span>Total:</span>
        <span>₹ {{ cartTotal }}</span>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center text-gray-500 py-20">
      <ion-icon name="cart" class="text-6xl"></ion-icon>
      <p class="text-xl font-roboto text-center px-12 font-semibold"> Your cart is empty,Choose a product to add to Your Cart</p>  
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Cart",
  computed: {
    ...mapState(["cart"]),
    cartTotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
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
