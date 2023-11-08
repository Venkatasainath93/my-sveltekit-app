import { readonly, writable } from "svelte/store";
import { opencart } from "./openCart";
import { persisted } from 'svelte-persisted-store'

const items = persisted('cart.items',{});

export function addToCart(title, variant) {

    const productData = {title, ...variant};

    items.update((state)=> {
        const sku = variant.sku;
        state[sku] = productData;
        console.log(state);
        return state;
    })

    opencart.set(1);
}

export function removeFromCart(sku) {
    items.update((state) => {
        delete state[sku];
        return state;
    })

}

export const cartItems = readonly(items);