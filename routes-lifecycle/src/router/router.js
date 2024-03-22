import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "../modules/pokemon/pages/About.page";
import ListPage from "../modules/pokemon/pages/List.page";
import PokemonPage from "../modules/pokemon/pages/Pokemon.page";
import NoFound from "../modules/shared/pages/NoFound.page";

const routes = [
  { path: "/", component: ListPage },
  { path: "/about", component: AboutPage },
  { path: "/id", component: PokemonPage },
  { path: "/:pathMatch(.*)*", component: NoFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
