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

const PokemonLayout = () =>
  import(
    /* webpackChunkName: "pokemon-layout" */ "@/modules/pokemon/layouts/Pokemon.layout"
  );

const routes = [
  { path: "/", redirect: "pokemon" },
  {
    path: "/pokemon",
    name: "pokemon",
    component: PokemonLayout,
    children: [
      { path: "home", name: "pokemon-home", component: ListPage },
      {
        path: "about",
        name: "pokemon-about",
        component: AboutPage,
      },
      {
        path: "pokemon-id/:id",
        name: "pokemon-id",
        component: PokemonPage,
        props: (route) => ({
          id: isNaN(route.params.id) ? 1 : parseInt(route.params.id),
        }),
      },
      {
        path: "",
        redirect: { name: "pokemon-home" },
      },
    ],
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
