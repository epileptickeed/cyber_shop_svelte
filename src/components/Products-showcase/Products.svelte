<script>
	import Button from "../../ui/Button.svelte";

</script>
 
<div class="w-full flex items-center flex-wrap h-full bg-[#dedede]">

    <div class="grid w-full xl:w-1/2">

        <div class="flex flex-col md:flex-row items-center justify-between md:col-span-2 py-4 md:py-0 bg-white">
            <img class="self-start" src="/PlayStation.png" alt="PlayStation">
            <div class="flex flex-col">
                <h1 class="text-[49px]">PlayStation 5</h1>
                <p class="text-[#909090] text-[14px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
        </div>

        <div class="flex items-center justify-between bg-[#dedede] gap-2 md:col-span-1 w-full pr-4">
            <img src="/headphones.png" alt="headphones">
            <div class="flex flex-col">
                <h1 class="text-[29px]">Apple AirPods <strong>Max</strong></h1>
                <p class="text-[#909090] text-[14px]">Computational audio. Listen, it's powerful.</p>
            </div>
        </div>

        <div class="flex items-center justify-between bg-[#353535] gap-2 md:col-span-1 w-full pr-4">
            <img src="/vision_pro.png" alt="Vision_pro">
            <div class="flex flex-col">
                <h1 class="text-[29px] text-white">Apple Vision <strong>Pro</strong></h1>
                <p class="text-[#909090] text-[14px]">An immersive way to experience entertainment.</p>
            </div>
        </div>

    </div>

    <div class="w-full xl:w-1/2 bg-[#dedede] h-full">
        <div class="flex flex-col md:flex-row relative items-center justify-between pl-4 h-full">
            <div class="flex items-start gap-4 p-8 flex-col">
                <h1 class="text-[64px]">Macbook <strong>Air</strong></h1>
                <p class="text-[14px]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <Button variant='default' color='black' text='Shop Now' />
            </div>
            <img class="relative self-end right-0" src="Macbook.png" alt="Mac">
        </div>
    </div>
</div>