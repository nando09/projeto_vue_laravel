import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Index from '../views/Home/Index.vue';
import Candidatos from '../views/Candidatos/Candidatos.vue';
import Configuracao from '../views/Configuracao/Configuracao.vue';
import Curriculos from '../views/Curriculos/Curriculos.vue';



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Index",
    component: Index
  },
  {
    path: "/candidatos",
    name: "Candidatos",
    component: Candidatos
  },
  {
    path: "/curriculos",
    name: "Curriculos",
    component: Curriculos
  },
  {
    path: "/configuracao",
    name: "Configuracao",
    component: Configuracao
  }
  // {
  //   path: "/padrao",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
