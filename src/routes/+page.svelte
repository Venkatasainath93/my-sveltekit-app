<script>
	let rtl = false;

	function toggleRtl() {
		rtl = !rtl;
	}
</script>

<button on:click={toggleRtl}>Switch RTL</button>
<div class="grid gap-6" dir={rtl ? 'rtl' : 'ltr'}>
	<header class="flex border p-6 gap-6 justify-between items-center">
		<div class="uppercase font-bold text-30 text-blue">Logitech</div>
		<div class=""><iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon></div>
	</header>
	
	<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
		<div class="border p-6">Filters</div>
		<div class="border p-6">
			<h2>Main content</h2>
			<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
			</p>
		</div>
	</main>

	<footer class="border p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
		<div class="">&copy;2023 Logitech</div>
		<div class="text-blue flex flex-wrap gap-6">
			<a href="#" class="hover:underline">About</a>
			<a href="#" class="hover:underline">Contact</a>
			<a href="#" class="hover:underline">Support</a>
			<a href="#" class="hover:underline">Privacy</a>
		</div>
	</footer>
</div>
