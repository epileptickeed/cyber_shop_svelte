<script lang="ts">
    import { Heart } from 'lucide-svelte';
    import Button from '../../ui/Button.svelte';
    import data from './data.json'
	import { writable } from 'svelte/store';
	import NewArrival from './NewArrival/NewArrival.svelte';
	import Bestseller from './BestSeller/Bestseller.svelte';
	import Featured from './Featured/Featured.svelte';

    let pickedHeader = writable(0)

    const handleClick = (i: number) => {
        pickedHeader.set(i)
    }

    let headers = [
        { title: "New Arrival"},
        { title: "Bestseller"},
        { title: "Featured Products"},
    ]

    let Items = [
        {
            item: NewArrival
        },
        {
            item: Bestseller
        },
        {
            item: Featured
        }
    ]

</script>

<div>
    <div class="flex flex-col items-start sm:flex-row gap-6 pb-8 py-12 text-[18px] p-4 xl:px-0">
        {#each headers as header, index}
            <button class={index === $pickedHeader ? "activeHeader" : "header"} onclick={() => handleClick(index)}>
                {header.title}
            </button>
        {/each}
    </div>

    <div class="px-4 xl:px-0">
        {#each Items as { item: ItemComponent }, index }
            <div class={$pickedHeader === index ? "" : 'hidden'}>
                <ItemComponent />
            </div>
        {/each}
    </div>
</div>

<style>
    .header{
        font-weight: bold;
        color:#8b8b8b;
        transition: .25s ease all;
        cursor: pointer;
    }

    .activeHeader{
        color: #000;
        font-weight: bold;
        border-bottom: 2px solid #000
    }

    .header:hover, .activeHeader:hover{
        color:#000
    }
</style>