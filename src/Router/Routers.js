import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '../Page/Home.vue';
import ProductVue from '../Page/Product.vue';
import AboutVue from '../Page/About.vue';
import WishlistVue from '../Page/Wishlist.vue';
import CheckoutVue from '../Page/Checkout.vue';
import DeleveryVue from '../Page/Delevery.vue'
import LoginVue from '../Page/Login.vue'
import LayoutVue from '../components/Layout.vue'
import AuthComponent from '../Page/AuthComponent.vue'

const Routes = [
    {
        path : "/auth",
        name : "auth",
        component : AuthComponent,
        children : [
            {
                path : "product",
                name : "Product",
                component : ProductVue
            },
            {
                path : "about",
                name : "About",
                component : AboutVue,
                
            },
            {
                path : "wishlist",
                name : "Wishlist",
                component : WishlistVue
            },
            {
                path : "checkout",
                name : "Checkout",
                component : CheckoutVue
            },
            {
                path : "delevery",
                name : "Delevery",
                component : DeleveryVue
            },
        ]

    },
    {
        path : "/",
        name : "Home",
        component : HomeVue
    },

    {
        path : "/login",
        name : "Login",
        component : LoginVue
    }
]

export const Router = createRouter({
    history : createWebHistory(),
    routes : Routes
})

Router.beforeEach((to, from, next) =>{
    const Auth = localStorage.getItem("Auth") ?  localStorage.getItem("Auth") == "auth" : null
    if(to.path == "/auth/product"  && !Auth ) {
        next({ name : "Login" })
    }
    if(to.path == "/auth/wishlist" && !Auth) {
        next({ name : "Login" })
    }
    if(to.path == "/auth/checkout" && !Auth) {
        next({ name : "Login" })
    }
    if(to.path == "/auth/delevery" && !Auth) {
        next({ name : "Login" })
    }
    else if(to.path == "/login" && Auth) {
        next({ name : "Home" })
    }
    else {
        next()
    }
})