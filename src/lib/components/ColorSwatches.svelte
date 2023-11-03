<script>
    export let hex;
    export let selected;
</script>

<button on:click
class="h-6 w-6 rounded-full flex" 
style:background-color={hex}
class:border-2={selected}></button>