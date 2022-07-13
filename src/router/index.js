import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/home.vue";
import Login from "../views/login.vue";
import Profile from "../views/profile.vue";
import Singup from "../views/singup.vue";
import Logado from "../views/logado.vue";
 

const routes = [
    {
        path: "/",
        component: Logado,
        name: 'logado',
        children: [
            {
              path: '/',
              alias: '/home',
              name: 'home',
              component: Home,
            },
            {
                path: "/profile",
                component: Profile,
                name:'profile'
            }
        ]
    }, 
    {
        path: "/login",
        component: Login,
        name:'login'
    },
    {
        path: "/singup",
        component: Singup,
        name:'singup'
    }
    // {
    //     path: '/404',
    //     component: NotFound,
    //     name: 'notFound',
    //     props: true
    // }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})