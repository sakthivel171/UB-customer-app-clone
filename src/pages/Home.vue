<template>
    <Header/>
    <section class="bg-[#e5e7eb] px-4">
        <div>
            <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Your Wallet Balance Is Low</p>
            <div class="bg-[#b35454] text-white font-roboto p-2 mt-2 text-[14px] text-center rounded shadow-md">
                Dear Customer , Please Check Your Wallet Balance and recharge Now to continue your Milk Subscriptions.
            </div>
        </div>
        <div>
            <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Subscriptions Paused</p>
            <div class="bg-[#facc15] text-black font-roboto p-2 mt-2 text-[14px] text-center rounded shadow-md">
                Dear Customer , your Milk subscriptions are paused because of low Wallet Balance ,please recharge to
                active derivatives.
            </div>
        </div>
        <div>
            <home-image/>
        </div>
        
        <div>
            <div class="flex justify-between mt-4">
                <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Recent Deliveries</p>
                <p class="pt-4 text-[#374151] text-sm font-normal font-montserrat">Click to Dispute a Delivery</p>
            </div>
            <div class="grid grid-cols-7 gap-2 mt-2 ">
                <div v-for="(day, index) in days" :key="index"
                    class="flex flex-col items-center bg-white  shadow-sm rounded-sm py-2">
                    <ion-icon name="remove-outline" class="text-2xl text-gray-600"></ion-icon>
                    <p class="font-roboto text-sm py-1">{{ day }}</p>
                     <p class="text-gray-700  text-xs  md:text-sm flex">
                      0<small>L</small> / 0<small>L</small>
                      </p>

                </div>
            </div>
        </div>

        <div class="py-8">
            <div class="flex justify-between">
                <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Current Subscriptions</p>
                <p class="pt-4 text-[#374151] text-sm font-normal font-montserrat">Click to Open</p>
            </div>
            <div class="mt-4 rounded-lg shadow-md p-2 bg-white ">
                <p class="text-gray-900 text-base font-montserrat">Pure Cow MIlk <small>(1 Litre)</small></p>
                <p class="text-sm font-roboto text-gray-900">1 NO | EVERYDAY | #230386</p>
                <p class="text-sm font-roboto text-gray-900"><small>From</small> {{ today }}</p>
            </div>
        </div>
 
        <div class="">
            <div class="flex justify-between ">
                <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Milk Meter</p>
                <p class="pt-4 text-[#374151] text-sm font-normal font-montserrat">Click to Open</p>
            </div>
            <div class=" bg-white my-4 rounded-md">
                <div class="flex justify-between px-3 py-4 mt-2 shadow-md">
                    <div><img src="../assets/milk-meter.gif" alt="milk Meter" class="w-40 h-28"></div>
                    <div class="flex flex-col items-center gap-6">
                        <p class="text-lg font-bold font-roboto  text-[#73983c] leading-5">4.3% Fat</p>
                        <p class="text-lg font-roboto font-bold border-l text-[#73983c] leading-5">7.9 SNF</p>
                    </div>
                </div>
                <div class="p-3 bg-gray-100 rounded-b-lg">
                    <p class="text-sm font-roboto font-medium text-center leading-none py-2 text-[#6b7280]">Test Result
                        For {{ today }} </p>
                </div>
            </div>
        </div>

        <p class="pt-4 text-[#374151] text-base font-semibold font-montserrat">Savings From Orders</p>
        <div class=" bg-white my-4 rounded-md px-3 py-4 shadow-md">
            <div class="flex justify-between ">
                <div >
                    <p class="text-sm text-gray-600 font-montserrat">You Saved</p>
                    <p class="text-2xl font-bold font-roboto   text-[#73983c]">₹0</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600 font-montserrat">Customers Saved</p>
                    <p class="text-2xl font-bold font-roboto  text-[#73983c]">₹17,94,026</p>
                </div>
            </div>
            <p class="mt-4 text-sm font-roboto text-center text-gray-500">Explore Our Products</p>
        </div>
        <div class="py-2">
            <product />
        </div>
        <div class="py-2">
            <Homepart />
        </div>
    </section>
</template>
<script>
import Header from '../components/Header.vue';
import Homepart from './Homepart.vue';
import product from './product.vue';
import HomeImage from './Home-image.vue';

export default {
    name: "home",
    components: {
       Header, product, Homepart,HomeImage
    },
    data() {
        return {
            today: "",
            days: ["3 SEP", "4 SEP", "5 SEP", "6 SEP", "7 SEP", "8 SEP", "9 SEP"],

        }
    },
    mounted() {
        const date = new Date()
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        this.today = `${day}-${month}-${year}`
    },
}
</script>