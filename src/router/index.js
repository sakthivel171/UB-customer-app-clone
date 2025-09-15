import { createRouter, createWebHistory } from "vue-router"
import Header from "../components/Header.vue"
import product from "../pages/product.vue"
import Home from "../pages/Home.vue"
import Homepart from "../pages/Homepart.vue"
import HomeImage from "../pages/Home-image.vue"
import Products from "../pages/products/products.vue"  
import CategoryPage from "../pages/products/CategoryPage.vue"
import Cart from "../pages/products/Cart.vue"
const routes = [
  { path: "/", component: Home },
  { path: "/header", component: Header },
  { path: "/product", component: product },
  { path: "/homepart", component: Homepart },
  { path: "/homeimage", component: HomeImage },
  { path: "/products", component: Products },
 { path: "/category/:id", component: CategoryPage, props: true },
  {path:"/cart" ,name:"cart",component:Cart}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
