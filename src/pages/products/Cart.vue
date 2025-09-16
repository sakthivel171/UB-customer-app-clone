<template>
  <!-- Header -->
  <div class="fixed z-10 flex items-center h-12 p-4 mx-auto text-white bg-[#73983c] w-full max-w-[500px]">
    <ion-icon name="arrow-back" class="text-3xl leading-none cursor-pointer" @click="goback"></ion-icon>
    <p class="text-2xl font-medium font-montserrat text-center mx-auto leading-none">
      Cart
    </p>
  </div>

  <!-- Cart Section -->
  <section class="bg-[#e5e7eb] min-h-screen px-4 sm:px-6 py-20">
    <div v-if="cart.length > 0" class="space-y-6">
      <div class="bg-white shadow-md rounded-xl p-4 ">
        <div v-for="item in cart" :key="item.id" class="flex flex-row  gap-4 sm:items-center py-6">
          <div>
            <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-md" />
          </div>
          <div class="flex flex-col flex-1 ">
            <div class="flex justify-between items-center">
              <h3 class="font-normal font-roboto text-gray-900 text-base sm:text-lg">
                {{ item.name }}
              </h3>
              <div class="flex flex-col  items-center">
                <p class="text-xl  text-gray-700 font-medium">
                  ₹ {{ item.price * item.quantity }}
                </p>
                <p class="text-[14px] font-montserrat font-medium text-[#72a91f]">save ₹ {{ item.save }}</p>
              </div>
            </div>

            <!-- Unit + Price -->
            <div class="flex justify-between items-center mt-1 pr-3">
              <p class="text-sm text-gray-600">{{ item.unit }}</p>
              <p class="text-sm text-gray-700">₹ {{ item.price }}</p>
            </div>

            <!-- Quantity Controls -->
            <div class="mt-3">
              <div class="flex items-center justify-center  gap-4 bg-[#e5e7eb] rounded-md  w-fit">
                <button @click="$store.commit('REMOVE_FROM_CART', item)"
                  class="px-2 py-1 text-white rounded-lg bg-[#73983c]">
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <span class="text-lg font-semibold w-6 text-center">{{ item.quantity }}</span>
                <button @click="$store.commit('ADD_TO_CART', item)"
                  class="px-2 py-1 text-white rounded-lg bg-[#73983c]">
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Total -->
      <div class="bg-white shadow-md rounded-xl p-4 flex flex-col justify-betweenfont-bold text-base sm:text-lg">
        <div class=" px-4 py-1 flex justify-between font-roboto items-center text-lg ">
          <span>Total value </span> <span>₹ {{ totalMrp }}</span>
        </div>

        <div class=" px-4 py-1 flex justify-between items-center text-[#73983c] font-roboto text-lg">
          <span>You Save</span>
          <span>₹ {{ totalDiscount }}</span>
        </div>

        <div class=" px-4 py-1 flex justify-between items-center font-robototext-lg">
          <span>Subtotal</span>
          <span>₹ {{ cartTotal }}</span>
        </div>

        <div class=" px-4 py-1 flex justify-between items-center text-base">
          <span>Delivery</span>
          <span>Tomorrow Morning</span>
        </div>

        <div class=" px-4 py-1 flex justify-between items-center font-bold text-xl">
          <span>Grand Total
            <pre class="text-sm text-gray-400 font-normal font-roboto">Include GST</pre>
          </span>
          <span>₹ {{ cartTotal }}</span>
        </div>
      </div>


      <div class="bg-white shadow-md rounded-xl p-4 mt-6 py-14 ">
        <div>
          <p class="font-roboto text-[16px] tracking-wide text-gray-500 mb-2">Apply Coupon Code</p>
          <div class="relative w-full">
            <input type="text" placeholder="Enter Your Code" required
              class="border border-gray-400 w-full px-4 py-2 text-lg rounded-md outline-none pr-20" />
            <button class="absolute right-1 top-1 bottom-1 text-[#73983c]  px-4 rounded-md text-lg font-medium">
              Apply
            </button>
          </div>
          <div>
            <p class="font-roboto text-[16px] tracking-wide mt-4 text-gray-500 mb-2">Additional Information</p>
            <textarea placeholder="If you wish to convey additional details,you can mention here"
              class="w-full border-2 border-gray-400 px-2 py-2 text-sm  text-black placeholder-gray-600 rounded "
              rows="4"></textarea>
          </div>

          <div class="text-center my-4">
            <div>
              <button class="px-4 py-2 text-white rounded-full text-xl shadow-md bg-[#73983c]">Pay & Checkout</button>
            </div>
            <div>
              <button class="mt-3 text-sm text-center text-gray-500">Or use Wallet Balance</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Empty Cart -->
    <div v-else class="text-center text-gray-500 py-40">
      <ion-icon name="cart" class="text-6xl"></ion-icon>
      <p class="text-xl font-roboto text-center text-gray-500 px-6 sm:px-12 outline-none">
        Your cart is empty, choose a product to add to your cart
      </p>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Cart",
  computed: {
    ...mapState(["cart"]),
    totalMrp() {
      return this.cart.reduce((sum, item) => {
        const rate = Number(item.rate) || Number(item.price)
        return sum + rate * (item.quantity || 1)
      }, 0)
    },
    cartTotal() {
      return this.cart.reduce((sum, item) => {
        const price = Number(item.price) || 0
        return sum + price * (item.quantity || 1)
      }, 0)
    },

    totalDiscount() {
      return this.totalMrp - this.cartTotal
    }

  },
  watch: {
    cart(newcart) {
      if (newcart.length === 0) {
        confirm("Do you want to remove the product from your cart")
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    // ...mapActions(["addToCart", "removeFromCart"]),
    goback() {
      this.$router.back()
    }
  }
}
</script>
