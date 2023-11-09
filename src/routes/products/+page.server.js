import { mockProducts } from '$lib/mockProducts';
import { error } from '@sveltejs/kit';


export function load({ params }) {

    return {
        products: mockProducts
    };
}