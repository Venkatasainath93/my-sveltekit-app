<script>
	import { each } from "svelte/internal";
	import ColorSwatches from "./ColorSwatches.svelte";
	import ProductImg from "./ProductImg.svelte";
    import { addToCart } from "../stores/cartItems";

    export let title;
    export let variants;
    export let selectedVariantIndex = 0;
    let selectedVariant;

    function swatchSelected(index) {
        selectedVariantIndex = index;
    }

    function addToCartClicked() {
        addToCart(title, selectedVariant);
    }
    $: selectedVariant = variants[selectedVariantIndex];
</script>
<div class="grid border gap-3 p-4">
    <ProductImg imgPath={selectedVariant.imgPath} sku={selectedVariant.sku}/>
    <div class="font-bold">{title}</div>
    <div class="flex gap-2">
        {#each variants as variant, index}
        <ColorSwatches 
            on:click={() => {swatchSelected(index)}}
            hex={variant.hex}
            selected={index === selectedVariantIndex}/>
        {/each}
    </div>
    <div class="">${selectedVariant.price}</div>
    <div>
        <button on:click={addToCartClicked}
        class="bg-black text-white p-2 font-bold uppercase">Add to cart</button>
    </div>
</div>