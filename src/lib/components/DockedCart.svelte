<script>
    import { opencart } from "../stores/openCart";
    import { cartItems } from "../stores/cartItems";
	import CartItems from "./cartItems.svelte";
</script>

{#if $opencart}
<div class="fixed top-0 right-0 w-[550px] border-l bg-white h-full">

    <div class="bg-black flex text-white justify-between gap-6 p-2 text-18">
        Cart
        <button on:click={() => {$opencart = false}}>
            <iconify-icon class="text-24" icon="material-symbols:close"></iconify-icon>
        </button>    
    </div>
    
    <div class="p-3 grid gap-2">
        {#each Object.values($cartItems) as Item}
       <CartItems {...Item}/>
            
        {/each}
    </div>
</div>
{/if}