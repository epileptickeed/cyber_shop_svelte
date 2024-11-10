<script>
	import { Heart } from 'lucide-svelte';
    import data from '../data.json'
	import Button from '../../../ui/Button.svelte';
</script>

<div class="flex items-center justify-center xl:justify-between flex-wrap gap-4">
    {#each data.reverse() as item}
        <div class="relative flex flex-col items-center justify-between p-4 rounded-xl h-[432px] w-[268px] bg-[#f6f6f6]">
            <Heart class='absolute mt-2 mr-4 right-0 text-[#444]' size='32' />
            <img class="pt-12" src={item.photo} alt="photos">
            <h1 class="text-center font-bold">{item.title}</h1>
            <p class="font-bold text-[1.5rem]">${item.price}</p>
            <Button variant="secondary" text="Buy now" />
        </div>
    {/each}
</div>