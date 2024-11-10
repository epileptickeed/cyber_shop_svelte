<script lang="ts">
	import { Heart } from 'lucide-svelte';
    import data from '../Gallery/data.json'
    import Button from '../../ui/Button.svelte';
</script>

<div class="my-12 text-[24px]">
    <h1 class="font-bold pb-4 px-4 xl:px-0">Discounts up to -50%</h1>

    <div class="flex items-center justify-center xl:justify-between flex-wrap px-4 xl:px-0 gap-4">
        {#each data.slice(0,4) as item}
            <div class="relative flex flex-col items-center justify-between p-4 rounded-xl h-[432px] w-[268px] bg-[#f6f6f6]">
                <Heart class='absolute mt-2 mr-4 right-0 text-[#444]' size='32' />
                <img class="pt-12" src={item.photo} alt="photos">
                <h1 class="text-center font-bold text-[16px]">{item.title}</h1>
                <p class="font-bold text-[1.5rem]">${item.price}</p>
                <Button variant="secondary" text="Buy now" />
            </div>
        {/each}
    </div>
</div>