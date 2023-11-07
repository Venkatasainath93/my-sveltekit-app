<script>
	import ProductImg from "./ProductImg.svelte";
    import { removeFromCart } from "../stores/cartItems";

    export let hex;
    export let name;
    export let price;
    export let sku;
    export let title;
    export let imgPath;
</script>

<div class="flex gap-3 justify-between">

    <div class="w-[125px]">
        <ProductImg {imgPath} />
    </div>
    
    <div class="flex-grow">
        <h3 class="font-bold">{title}</h3>
        <div class="">{name}</div>
        <div class="">{sku}</div>
        <div class="">{price}</div>
    </div>

    <div class="">
        <button class="" on:click={() => removeFromCart(sku)}>
            <iconify-icon class="text-30 font-bold" icon="material-symbols-light:delete-outline"></iconify-icon>
        </button>
    </div>
    
</div>