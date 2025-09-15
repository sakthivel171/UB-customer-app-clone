<template>
  <section>
    <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">
      UB Offers <small>&</small> Updates
    </p>  
    <div ref="scrollBox" class="flex gap-2  overflow-x-auto py-3">
      <div v-for="(img, index) in images" :key="index" class="flex-shrink-0">
        <img :src="img.picture" alt="image" class="w-full h-[200px] object-cover rounded-md shadow-md" />
      </div>
    </div>
  </section>
</template>
<script>
export default{
    name:"homeimages",
    data() {
        return {
            images:[
                {picture:"src/assets/image1.png"},
                {picture:"src/assets/2.png"},
                {picture:"src/assets/image2.jpg"},
                {picture:"src/assets/4.png"},
                {picture:"src/assets/5.jpg"},
                {picture:"src/assets/6.png"},
                {picture:"src/assets/7.png"},
                {picture:"src/assets/8.png"},
            ],
            currentIndex:0
        }
    },
    mounted(){
       setInterval(()=>{
        const box=this.$refs.scrollBox;
        this.currentIndex=(this.currentIndex + 1) % this.images.length;
        const scrollamount=this.currentIndex*542;
        box.scrollTo({left:scrollamount,behavior:"smooth"});
       },4000)
    }
  
}

</script>