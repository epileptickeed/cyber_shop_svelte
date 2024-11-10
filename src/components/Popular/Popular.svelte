<script>

    let data = [
        {
            title: 'Popular products',
            desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
            image: '/popular/1.png'
        },
        {
            title: 'Ipad Pro',
            desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
            image: '/popular/2.png'
        },
        {
            title: 'Samsung Galaxy',
            desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
            image: '/popular/3.png'
        },
        {
            title: 'Macbook Pro',
            desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
            image: '/popular/4.png'
        },
    ]

    const colors = [
        'white', '#f9f9f9', '#eaeaea', '#2c2c2c'
    ]

</script>

<div class="md:grid grid-cols-2 xl:flex items-center mt-12">

    {#each data as item, index}
        <div class="h-full flex items-center justify-between flex-col p-8 gap-4" style="background-color: {colors[index % colors.length]};">
            <img src={item.image} class="h-[366px] w-[360px]" alt={item.title}>
            <h1 class="text-start text-[32px] self-start" style='{index === 3 ? 'color: white' : ''}'>{item.title}</h1>
            <p class="text-start text-[14px] text-[#909090]">{item.desc}</p>
            <button class="px-12 py-4 rounded-lg self-start text-[16px] transition" style='{index === 3 ? 'color: white; border: 1px solid white' : ''}'>Shop Now</button>
        </div>
    {/each}

</div>

<style>
    button{
        border: 1px solid black;
    }
</style>