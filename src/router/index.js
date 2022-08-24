import { createRouter, createWebHistory } from "vue-router";
import VCats from "../components/VCats.vue";
import VCatDetail from "../components/VCatDetail.vue";
import NotFound from "../components/NotFound.vue";
import VAddCat from "../components/VAddCat.vue";
import VLogin from "../components/VLogin.vue";
import VUpdateCat from "../components/VUpdateCat.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: VCats,
    },
    {
        path: "/login",
        name: "login",
        component: VLogin,
    },
    {
        path: "/cat/:id",
        name: "cat-details",
        component: VCatDetail,
    },
    {
        path: "/add-cat",
        name: "add-cat",
        component: VAddCat,
    },
    {
        path: "/update/:id",
        name: "cat-updtae",
        component: VUpdateCat,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
