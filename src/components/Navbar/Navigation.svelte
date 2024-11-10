<script lang="ts">
	import { browser } from "$app/environment";


	import { Heart, ShoppingCart, User, Menu } from "lucide-svelte";
	import { onDestroy, onMount } from "svelte";
	import { writable, type Writable } from "svelte/store";

    const isCartOpen = writable(false)
    const isFavoriteOpen = writable(false)
    const isMenuOpen = writable(false)
    
    const toggle = (event: any, modal: Writable<boolean>) => {
        event.stopPropagation()
        event.preventDefault()
        modal.update((value: boolean) => !value)
    }

    const close = (event: Writable<boolean>) => {
        event.set(false)
    }

    const handleClickOutside = (event: any) => {
        const cartElement = document.getElementById("cart");
        if(cartElement && !cartElement.contains(event.target)){
            close(isCartOpen)
        }
        const favoriteElement = document.getElementById('favorite')
        if(favoriteElement && !favoriteElement.contains(event.target)){
            close(isFavoriteOpen)
        }
        const menuElement = document.getElementById('menu')
        if(menuElement && !menuElement.contains(event.target)){
            close(isMenuOpen)
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside)
    })
    if(browser){
        onDestroy(() => {
            document.removeEventListener('click', handleClickOutside)
        })
    }
    
    const handleMenuOpen = () => {
        isMenuOpen.update((value) => !value)
    }

</script>
<div class="hidden lg:flex items-center justify-between gap-[52px] relative ">
    <a href="/">Home</a>
    <a href="/">About</a>
    <a href="/">Contact Us</a>
    <a href="/">Blog</a>

    <div class="flex items-center justify-between gap-6">
        <a href="/"><Heart onclick={(e) => toggle(e, isFavoriteOpen)} /></a>
        <a href="/"><ShoppingCart onclick={(e) => toggle(e, isCartOpen)} /></a>
        <a href="/"><User /></a>
    </div>

    {#if $isCartOpen}
        <div id="cart" class="w-[450px] h-[350px] absolute border top-14 bg-white rounded-lg shadow-2xl">
            <h3 class="p-4 border-b">Это корзина!</h3>
        </div>
    {/if}

    {#if $isFavoriteOpen}
        <div id="favorite" class="w-[450px] h-[350px] absolute border top-14 bg-white rounded-lg shadow-2xl">
            <h3 class="p-4 border-b">Это избранные!</h3>
        </div>
    {/if}
</div>

<div id="menu" class="lg:hidden relative">
    <Menu size={36} onclick={() => handleMenuOpen()} />
    <div class={$isMenuOpen ? 'z-10 bg-white w-[230px] fixed top-0 h-full right-0 border flex items-start flex-col p-8 gap-8' : 'hidden'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
        <a href="/">Blog</a>

        <a href="/"><Heart /></a>
        <a href="/"><ShoppingCart /></a>
        <a href="/"><User /></a>
    </div>
</div>

<style>
    a{
        color:grey;
        font-weight: 500;
        transition: .25s ease all;
    }
    a:hover{
        color:black
    }
</style>