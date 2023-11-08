<script>
	import { onMount } from "svelte";


	import { fade } from "svelte/transition";

    onMount(() => {
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = '';
        };
    });

</script>
<div transition:fade={{duration:100}} class="bg-black fixed top-0 left-0 h-full w-full opacity-80"></div>