<template>
   <router-link
       v-if="cart.length > 0"
      to="/cart"
      class="  flex fixed bottom-16 bg-[#73983c]  text-white px-4  py-3 w-[500px] rounded-t-md shadow-md justify-between"
    >
      <div class="flex items-center font-roboto text-base gap-2"><ion-icon name="cart" class="text-white text-3xl"></ion-icon>Cart</div>
       <div class="flex items-center font-roboto text-base gap-2">
        <p>{{ cart.length }} Item</p>|
        <p>{{totalQuantity }} Qty</p>
      </div>
    </router-link>
  <footer class="fixed bottom-0 w-full max-w-[500px] mx-auto" >
    <div
      class=" flex items-center justify-between h-16 px-4 bg-white shadow-md shadow-slate-300 text-center font-roboto text-[12.8px] text-[#4b5563]"
    >
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        @click="activeHead(index)"
        :to="item.link"
        class="flex-1 py-2 "
        active-class="text-[#73983c] border-b-2">
      
        <ion-icon :name="item.icon" class="text-2xl"></ion-icon>
        <p class="py-1">{{ item.label }}</p>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Footer",
  computed:{
    ...mapState(["cart"]),
    totalQuantity(){
      return this.cart.reduce((sum,item)=>sum+item.quantity,0)
    }
  },
  data() {
    return {
      menu: [
        { label: "Home", icon: "home", link: "/" },
        { label: "products", icon: "cart", link: "/products" },
        { label: "Orders", icon: "list", link: "/" },
        { label: "Wallet", icon: "wallet", link: "/" },
        { label: "Profile", icon: "person", link: "/" },
      ],
    };
  },
};
</script>
