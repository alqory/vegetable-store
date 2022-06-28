import { createStore } from 'vuex'

const State = {
    Product  : [],
    Wishlist : [],
    Checkout : {},
    Delevery : {},
}

const Mutations = { 
    getProducts(state, payload) {
        state.Product = payload
    },
    addToCart(state, data) {
        const existItem =  state.Wishlist.find((item) => item.id == data.id)
        if(existItem) {
            existItem.qty++
        }else {
            state.Wishlist = [...state.Wishlist, data]
        }
    },
    addItemExistToCart(state, DataId) {
        const existItem =  state.Wishlist.find((item) => item.id == DataId)
        if(existItem) {
            existItem.qty++
        }
    },
    removeToCart(state, DataId) {
        const existItem =  state.Wishlist.find((item) => item.id == DataId)
        if(existItem) {
            existItem.qty--
            
            if(existItem.qty < 1) {
                state.Wishlist = [...state.Wishlist].filter((item) => item.id !== existItem.id)
            }
        }
    },
    clearCart(state) {
        state.Wishlist = []
    },
    addToCheckout(state, payload){
        state.Checkout = payload 
    },
    clearCheckout(state) {
        state.Checkout = {}
    },
    addToDelevery(state, payload){
        state.Delevery = payload
    },
    removeDelevery(state) {
        state.Delevery = {}
    }
}

const Actions = {
    getProductsAsync({commit}) {
        // Production
        // const url = '/src/auth/Mock/Product.json'

        // Deployment
        const url = "/auth/Mock/Product.json"
        return new Promise(async (resolved, rejected) => {
            if(url) {
                const data = await (await fetch(url)).json()
                setTimeout(()=> {
                    commit('getProducts', data)
                    resolved(data)
                },2000)
            }else {
                rejected("Error!")
            }
        })
    },
    LoginAsync({commit}){
        localStorage.setItem("Auth", "auth")

        return new Promise((resolved, rejected) => {
            const Authenticated = localStorage.getItem("Auth")
            if(Authenticated) {
                resolved(Authenticated)
            }else {
                rejected(false)
            }
        })
    },
    LogoutnAsync({commit}){
        return new Promise((resolve, rejected) => {
            const existAuth = localStorage.getItem("Auth") || null
            if(existAuth) {
                localStorage.removeItem("Auth")
                resolve("Success!")
            }else{
                rejected("Error!")
            }
        })
    }
}

export const Store = createStore({
    state : State,
    mutations : Mutations,
    actions : Actions
})