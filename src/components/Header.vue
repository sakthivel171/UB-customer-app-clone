<template>
  <header>
    <div class="inset-0 w-full text-white  bg-[#73983c] px-3 ">
      <div class="flex py-2 justify-between items-center">
        <a href="#">
          <p class="font-montserrat text-[16px] font-medium text-[#d1d5db] "><small>Hello,</small></p>
          <p class="font-roboto text-[20px] font-semibold text-[#ffffff] ">Sakthi</p>
          <p class="font-roboto text-sm  text-[#d1d5db]">#33855</p>
        </a>
        <a href="#"><ion-icon name="notifications" class="text-2xl pr-4"></ion-icon></a>
      </div>

      <div class="flex justify-between py-2 items-center">
        <a href="#">
          <span class="text-2xl">₹0<ion-icon name="wallet" class="px-2"></ion-icon></span><br>
          <span class="text-[#d1d5db] text-sm">Your Wallet Balance</span>
        </a>
        <a href="#">
          <button>
            <ion-icon name="person" class="text-2xl"></ion-icon>
            <p class="text-[#d1d5db] text-sm">Call Dealer</p>
          </button>
        </a>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: "header",
  components: {
  }
}
</script>