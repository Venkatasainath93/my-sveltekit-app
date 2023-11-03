<script>
	import DockedCart from "../lib/components/DockedCart.svelte";
import Footer from "../lib/components/Footer.svelte";
import Header from "../lib/components/Header.svelte";
	import PlpPageLayout from "../lib/components/PLPPageLayout.svelte";

	let rtl = false;

	function toggleRtl() {
		rtl = !rtl;
	}

	$: dir = rtl ? 'rtl' :'ltr';
</script>

<button on:click={toggleRtl}>Switch RTL</button>
<div class="grid gap-6" {dir}>
	<Header/>
	
	<PlpPageLayout />

	<Footer />
</div>

<DockedCart />