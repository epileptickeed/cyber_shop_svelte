<script>
	import Category from "./Categories/Category.svelte";
	import Discount from "./Discount/Discount.svelte";
	import Footer from "./Footer/Footer.svelte";
	import Gallery from "./Gallery/Gallery.svelte";
	import Header from "./Header/Header.svelte";
	import Navbar from "./Navbar/Navbar.svelte";
	import Popular from "./Popular/Popular.svelte";
	import Products from "./Products-showcase/Products.svelte";
	import Sale from "./Sale/Sale.svelte";
</script>

<div class="max-w-[1120px] m-auto">
    <Navbar />
</div>
<div class="w-full lg:h-[632px] bg-[#211C24] ">
    <Header />
</div>
    <Products />
<div class="w-full bg-[#fafafa]">
    <Category />
</div>

<div class="max-w-[1120px] m-auto">
    <Gallery />
</div>
    <Popular />
<div class="max-w-[1120px] m-auto">
    <Discount />
</div>
    <Sale />
<div class="bg-[#000]">
    <Footer />
</div>