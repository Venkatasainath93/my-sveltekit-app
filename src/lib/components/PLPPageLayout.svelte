<script>
	import ProductCard from "./ProductCard.svelte";
    import { mockProducts } from "../mockProducts";

</script>
<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
    <div class="border p-6">Filters</div>
    <div class="border p-6 grid gap-6">
        <h1 class="font-bold text-30 uppercase">Products</h1>
        <div class="grid gap-6 grid-cols-2 lg:grid-cols-3">

            {#each mockProducts as product}
                <ProductCard {...product}/>    
            {/each}
        </div>
    </div>
</main>