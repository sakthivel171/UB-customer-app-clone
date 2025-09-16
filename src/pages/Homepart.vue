<template>
  <section>
    <!-- nav links for extra milk,recipes etc.. -->
    <p class="py-3 text-[#374151] text-base font-semibold font-montserrat">Quick Actions</p>
    <div
      class=" flex items-center justify-between rounded-md h-16 px-4 bg-white shadow-md shadow-slate-300 text-center font-roboto text-[12.8px] text-[#4b5563]">
      <a v-for="(item, index) in items" :key="index" :href="item.link" class="flex-1 py-2 ">
        <ion-icon :name="item.icon" class="text-2xl mt-1 text-[#73983c]"></ion-icon>
        <p class="py-1 ">{{ item.label }}</p>
      </a>
    </div>
    <!-- dealer info -->
  </section>
  <p class="py-3 mt-5 text-[#374151] text-base font-semibold font-montserrat ">Dealer Info</p>
  <div class="bg-white mt-2 rounded-md shadow-md mb-5">
    <div class="px-4 py-6">
      <p class="font-roboto text-xl text-[#374151
            ">MKM Customers</p>
      <p class="font-roboto text-sm text-[#4b5463]">MKM,MKM,Maduranthagam,Chengalpattu</p>
    </div>
    <div class=" bg-[#d1d5db]  py-3 text-[#73983c]">
      <a href="" class="px-8">Call</a>
      <a href="" class="px-8">Whatsapp</a>
    </div>
  </div>
  <!-- it conatain nav links about queries  -->
  <section>
    <p class="py-3 text-[#374151] text-base font-semibold font-montserrat">Need Help</p>
    <div
      class=" flex items-center rounded-md justify-between h-20 px-4 bg-white shadow-md shadow-slate-300 text-center font-roboto text-[12.8px]  ">
      <a v-for="(item, index) in needs" :key="index" :href="item.link" class="flex-1 py-2 pt-4 ">
        <ion-icon :name="item.icon" class="text-4xl text-[#73983c]"></ion-icon>
        <p class="py-1 text-[#374151]">{{ item.label }}</p>
      </a>
    </div>
  </section>
<!-- It contain social nav -->
  <section>
    <p class="py-3 text-[#374151] text-base font-semibold font-montserrat mt-5">Spread the Word</p>
    <div
      class=" flex items-center rounded-md justify-between h-14 px-4 bg-white shadow-md shadow-slate-300 text-center font-roboto text-[12.8px]  ">
      <a v-for="(item, index) in logos" :key="index" :href="item.link" class="flex-1 py-6 ">
        <ion-icon :name="item.icon" class="text-3xl py-4"></ion-icon>

      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "homepart",
  data() {
    return {
      items: [
        { label: "Extra Milk", icon: "cart", link: "/" },
        { label: "Vacations", icon: "train", link: "" },
        { label: "Recipes", icon: "restaurant", link: "" },
        { label: "Summary", icon: "document", link: "" },
      ],
      needs: [
        { label: "Feedback", icon: "chatbubbles", link: "/" },
        { label: "Call", icon: "call", link: "" },
        { label: "Whatsapp", icon: "logo-Whatsapp", link: "" },
        { label: "Chat", icon: "chatbubble-ellipses", link: "" },
      ],
      logos: [
        { icon: "logo-Whatsapp", link: "" },
        { icon: "logo-facebook", link: "" },
        { icon: "logo-twitter", link: "" },
        { icon: "logo-linkedin", link: "" },
        { icon: "mail", link: "" },
        { icon: "share-social", link: "" },
      ]
    }
  },
}
</script>