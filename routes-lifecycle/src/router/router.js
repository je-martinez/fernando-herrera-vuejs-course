import { createRouter, createWebHashHistory } from "vue-router";

const AboutPage = () =>
  import(
    /* webpackChunkName: "about-page" */ "@/modules/pokemon/pages/About.page.vue"
  );
const ListPage = () =>
  import(
    /* webpackChunkName: "list-page" */ "@/modules/pokemon/pages/List.page"
  );
const PokemonPage = () =>
  import(
    /* webpackChunkName: "pokemon-page" */ "@/modules/pokemon/pages/Pokemon.page"
  );
const NoFound = () =>
  import(
    /* webpackChunkName: "no-found-page" */ "@/modules/shared/pages/NoFound.page"
  );

const routes = [
  { path: "/", component: ListPage },
  {
    path: "/about",
    component: AboutPage,
  },
  { path: "/id", component: PokemonPage },
  { path: "/:pathMatch(.*)*", component: NoFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
