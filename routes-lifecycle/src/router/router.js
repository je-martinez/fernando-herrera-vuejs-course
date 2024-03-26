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
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: ListPage },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-id",
    component: PokemonPage,
    props: (route) => ({
      id: isNaN(route.params.id) ? 1 : parseInt(route.params.id),
    }),
  },
  {
    path: "/:pathMatch(.*)*",
    component: NoFound,
    //redirect: "/"
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
