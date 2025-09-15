<template>
  <div class="flex flex-col min-h-screen max-w-[500px] mx-auto">
    
    <main class="flex-grow overflow-y-auto pb-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {  Footer }
};
</script>
