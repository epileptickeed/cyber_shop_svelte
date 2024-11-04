<script lang="ts">
    let { variant, color = 'white' } = $props()
</script>

{#if variant === 'default'}
    <button class="px-12 py-4 rounded-lg text-{color} text-[16px] transition">
        Shop Now
    </button>
{:else if variant === 'secondary'}
    <button class="px-12 py-3 border-[#000] bg-[#000] rounded-lg text-{color} text-[16px] transition">
        Shop Now
    </button>
{/if}

<style>
    button{
        border: 1px solid;
    }
    button:hover{
        transform: scale(1.05);
    }
    button:active{
        transform: scale(0.95);
    }
</style>

