<script>
	import Button from "../../ui/Button.svelte";
</script>

<div class="max-w-[1120px] m-auto flex items-center justify-between flex-col h-full lg:flex-row">
    <div class="flex items-start flex-col justify-between gap-4 py-6 px-4 md:px-0">
        <p class="text-[18px] md:text-[24px]">Pro.Beyond.</p>
        <h1 class="text-[48px] md:text-[96px] text-white leading-[36px] md:leading-[72px]">IPhone 14 <strong>Pro</strong></h1>
        <p class="text-[12p[px] md:text-[18px]">Created to change everything for the better. For everyone</p>

        <Button variant='default' color='white' text='Shop now' />

    </div>
    <div>
        <img class="max-w-full" src="/Iphone_Image.png" alt="Iphone">
    </div>
</div>

<style>
    p{
        color:#909090;
    }
</style>