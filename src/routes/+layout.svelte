<script>
	import PlpPageLayout from '$lib/components/PLPPageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DockedCart from '$lib/components/DockedCart.svelte';
	import '../app.scss';
	import 'iconify-icon';
	let rtl = false;

	function toggleRtl() {
		rtl = !rtl;
	}

	$: dir = rtl ? 'rtl' :'ltr';
</script>

<div>
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>
		<div>
			<button on:click={toggleRtl}>Switch RTL</button>
			<div class="grid gap-6" {dir}>
				<Header/>
				
				<slot /> 

				<Footer />
			</div>

			<DockedCart />
			
		</div>
	</div>
</div>
