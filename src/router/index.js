import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";
import CartPage from "../views/CartPage.vue";
import ProductPage from "../views/ProductPage";
import CatalogPage from "../views/CatalogPage";
import ProductCard from "../components/ProductCard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/ProductPage",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/CatalogPage",
    name: "CatalogPage",
    component: CatalogPage,
  },
  {
    path: "/products/:id",
    name: "ProductCard",
    props: true,
    component: ProductCard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
