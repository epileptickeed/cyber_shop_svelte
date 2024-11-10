<script>

	import { Camera, ChevronLeft, ChevronRight, Headphones, Smartphone, TvMinimal, Watch, Gamepad } from "lucide-svelte";

    let currentIndex = $state(0)
    const visibleItems = 6

    const categories = [
        { icon: Smartphone, label: "Phones" },
        { icon: Watch, label: "Smart Watches" },
        { icon: Camera, label: "Cameras" },
        { icon: Headphones, label: "Headphones" },
        { icon: TvMinimal, label: "Computers" },
        { icon: Gamepad, label: "Gaming" },

        { icon: Gamepad, label: "Gaming2" },
        { icon: Gamepad, label: "Gaming3" },
        { icon: Gamepad, label: "Gaming4" },
    ]

    const next = () => {
        // $inspect('hello')
        currentIndex = (currentIndex + 1) % categories.length 
    }

    const prev = () => {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length
    }

    let displayedCategories = []

    $effect(() => {
        displayedCategories = categories.slice(currentIndex * visibleItems, (currentIndex + 1) * visibleItems);
    })


    $inspect(currentIndex)


</script>

<div class="max-w-[1120px] m-auto flex gap-8 flex-col py-16 px-4 md:px-0">

    <div class="flex items-center justify-between gap-4">
        <h1 class="text-[24px]">Browse By Category</h1>
        <div class="flex gap-4">
            <ChevronLeft size={32} onclick={prev} />
            <ChevronRight size={32} onclick={next} />
        </div>
    </div>
    <div class="flex items-center justify-between">
        {#each categories as { icon: Icon, label }, index}
            {#if index === currentIndex}
                <div class="items">
                    <Icon size={48} />
                    {label}
                </div>
            {/if}
        {/each}
    </div>

</div>

<style>
    .items{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #ededed;
        gap:1rem;
        width: 168px;
        height: 128px;
        padding: 1rem;
        border-radius: 1rem;
    }
</style>