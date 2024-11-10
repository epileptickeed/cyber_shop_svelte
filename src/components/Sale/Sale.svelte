<script>
    import Button from "../../ui/Button.svelte";
</script>

<div class="bg h-[448px] flex items-center flex-col justify-center">
    <div class="text-center">
        <h1 class="text-[36px] md:text-[72px] text-white">Big Summer <b>Sale</b></h1>
        <p class="text-[12px] md:text-[16px] text-[#787878] pb-12">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Button text='Shop Now' variant='default' />
    </div>
</div>

<style>
    .bg{
        background: linear-gradient(to right, #2e2e2e, #000);
    }
</style>