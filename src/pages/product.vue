<template>
  <section>
    <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat py-3">Popular Products</p>
    <div class="flex overflow-x-auto whitespace-nowrap gap-x-2 py-3">
      <div v-for="(product, index) in products" :key="index" class="bg-white px-2  shadow-md rounded-md">
        <div class="w-28 h-24 flex items-center justify-center  rounded-md">
          <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain" />
        </div>
        <div class="px-1 mt-1 text-sm text-center  text-gray-700 font-montserrat">
          <p class="whitespace-break-spaces font-semibold">{{ product.name }}</p>
          <p class="mt-1 text-gray-500">{{ product.qty }}</p>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  name: "product",
  data() {
    return {
      products: [
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/Ti5YazZlcNsel9KDh8KyQKw0VriPCcr04PJEujHp.png",
          name: "Poongar Rice Nutrition Mix ",
          qty: "500 Grams"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/TTqO4eowLjBn2bBT8bHocGUi5eZxiqtWrRqcj1ab.jpg",
          name: "Instant Noodles- Multi Millet",
          qty: "175 Grams"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/eXUQy17oJlqv4qCxF1UEAYgjOTcUi6PtA12ve8Is.png",
          name: "Yogurt-BlueBerry",
          qty: "100 Grams"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/GW6QpC3nWpC4LUwZ7xTkPtYooLDLXmg9k93nRS1x.png",
          name: "MilkShake-choclate",
          qty: "220 ML"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/qoOJwfWbmp08NLUYRkE7RTiVaSPNTAKblpaMXd2W.png",
          name: "ABc Malt",
          qty: "200 Grams"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/taFX2JB2jIfMKXliokt6PFOCR8ZUkCr9zP031eFj.png",
          name: "Yogurt-Mango",
          qty: "100 Grams"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/mAsRHXYK7m5QsHt3oWgREqR7ctVSKeTz5Xw3FOEw.jpg",
          name: "Happy Hens Eggs",
          qty: "Pack Of 6"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/87DTTjfQItmV0oe8wvsIIk4eP7odlVjwLP7XzZl2.png",
          name: "set Curd",
          qty: "1KG"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/SJBXMGYQqfeU8lMRz9QffE42xVuGlaBYPfkm7F2J.png",
          name: "Beetroot Malt",
          qty: "150g"

        },
        {
          image: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/6ByVt9o0vuei3MCL8Gh5Py9tUsowCqNfM0qHLBEP.jpg",
          name: "Lassi-Blueberry",
          qty: "200ML"

        }

      ]
    }
  },
}
</script>