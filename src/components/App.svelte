<script>
	import Category from "./Categories/Category.svelte";
	import Gallery from "./Gallery/Gallery.svelte";
	import Header from "./Header/Header.svelte";
	import Navbar from "./Navbar/Navbar.svelte";
	import Products from "./Products-showcase/Products.svelte";
</script>

<div class="max-w-[1120px] m-auto">
    <Navbar />
</div>
<div class="w-full h-[632px] bg-[#211C24]">
    <Header />
</div>
    <Products />
<div class="w-full bg-[#fafafa]">
    <Category />
</div>

<div class="max-w-[1120px] m-auto">
    <Gallery />
</div>