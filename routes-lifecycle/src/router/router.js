import { createRouter, createWebHashHistory } from "vue-router";

/* -------------------------------------------------------------------------- */
/*                                   Pokemon                                  */
/* -------------------------------------------------------------------------- */

const AboutPokemonPage = () =>
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

/* -------------------------------------------------------------------------- */
/*                                Dragon Ball Z                               */
/* -------------------------------------------------------------------------- */

const DbzAbout = () =>
  import(/* webpackChunkName: "dbz-about" */ "@/modules/dbz/pages/About.page");

const Characters = () =>
  import(
    /* webpackChunkName: "characters" */ "@/modules/dbz/pages/Characters.page"
  );

const DBZLayout = () =>
  import(
    /* webpackChunkName: "dbz-layout" */ "@/modules/dbz/layouts/DragonBall.layout"
  );

const routes = [
  { path: "/", redirect: "pokemon" },
  /* -------------------------------------------------------------------------- */
  /*                                   Pokemon                                  */
  /* -------------------------------------------------------------------------- */
  {
    path: "/dbz",
    name: "dbz",
    component: DBZLayout,
    children: [
      { path: "characters", name: "dbz-characters", component: Characters },
      { path: "about", name: "dbz-about", component: DbzAbout },
      {
        path: "",
        redirect: { name: "dbz-about" },
      },
    ],
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: PokemonLayout,
    children: [
      { path: "home", name: "pokemon-home", component: ListPage },
      {
        path: "about",
        name: "pokemon-about",
        component: AboutPokemonPage,
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
  /* -------------------------------------------------------------------------- */
  /*                                Dragon Ball Z                               */
  /* -------------------------------------------------------------------------- */
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
