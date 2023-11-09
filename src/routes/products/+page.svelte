<script>

	import ProductCard from "$lib/components/ProductCard.svelte";
	import Image from "$lib/components/image.svelte";

    export let data;

    const cloudinaryUrl = 'https://cloudinary-all.logitech.com'
	let bgImg = data.aemdata.training_image.fileReference;
</script>
<main class="grid gap-6 ">
    <div class="border p-6">Filters</div>
    <div class="border p-6 grid gap-6 sm:grid-cols-1 ">
        <h1 class="font-bold text-30 uppercase text-center">Products</h1>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {#each data.products as product}
                <ProductCard {...product}/>    
            {/each}
        </div>
    </div>
    <Image imgPath={cloudinaryUrl+bgImg}/>
</main>
