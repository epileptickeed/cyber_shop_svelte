<script>
	import Navigation from "./Navigation.svelte"
    
    import { Search } from "lucide-svelte";
</script>

<div class="flex items-center justify-between p-4">
    <img src="/Logo.png" alt="logo">
    <label for="search" class="relative w-[372px]">
        <Search class="absolute top-4 left-4 text-gray-400" />
        <input id="search" type="text" placeholder="search" class="p-4 border w-full pl-14 rounded-lg">
    </label>
    <Navigation />
</div>