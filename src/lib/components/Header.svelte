<script>
    import { opencart } from "../stores/openCart";
    import { cartCount } from "../stores/cartCount";
</script>
<header class="flex border p-6 gap-6 justify-between items-center">
    <a href="/" class="uppercase font-bold text-30 text-blue">Logitech</a>
    <div class="flex gap-4 font-bold">
        <a href="/products" class="">Products</a>
        <a href="/my-account" class="">My Account</a>
    </div>
    
    <button class="relative" on:click={() => $opencart = true}>
        <iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon>
        {#if $cartCount}
        <div class="absolute -top-2 -right-0 bg-green w-5 h-5 rounded-full">{$cartCount}</div>
        {/if}
    </button>
</header>