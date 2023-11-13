<script>
    export let data;

    // Function to find the product with a specific SKU
  function findProductBySku(sku) {
    for (const product of data.products) {
      for (const variant of product.variants) {
        if (variant.sku === sku) {
          return { product, variant };
        }
      }
    }
    return null;
  }

  // Find the product with SKU
  const matchingProduct = findProductBySku(data.skuid);
</script>
<main class="flex gap-3 md:grid-cols-2">
    {#if matchingProduct}
    <div class="w-[500px]">
        <img src={matchingProduct.variant.imgPath} alt={matchingProduct.product.title} />
    </div>
    <div class="p-6">
        <div>
          <span class="font-bold">Title:</span> {matchingProduct.product.title}
        </div>
        <div class="">
          <span class="font-bold">Variant:</span> {matchingProduct.variant.name}
        </div>
        <div class="">
          <span class="font-bold">Price:</span> ${matchingProduct.variant.price}
        </div>
        
    </div>
    {:else}
    <p>No matching product found.</p>
    {/if}
</main>