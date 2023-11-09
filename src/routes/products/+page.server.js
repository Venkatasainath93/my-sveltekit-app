import { mockProducts } from '$lib/mockProducts';
import { error } from '@sveltejs/kit';


export async function load({ params }) {
    const url = 'http://apigatewaytest.logitech.com:4502/content/logitech/amr/live/en_us/test.model.json';
    const res = await fetch(url, {
        headers: {
            Authorization: 'Basic ' + Buffer.from('admin:admin').toString('base64'),
        },
    });

    if(res.ok) {
        const data = await res.json();
        return {
            aemdata : data[':items'].body[':items'].responsivegrid[':items'],
            products : mockProducts
        }
    } else {
        throw new Error(String(res.status))
    }

    return {
        products: mockProducts
    }
}