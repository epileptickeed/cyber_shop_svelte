<script>
	import { User } from "lucide-svelte";

</script>
<div class="max-w-[1120px] m-auto">
    <div class="flex items-start flex-wrap gap-4 md:gap-0 px-4 md:px-0 justify-around py-20">
        <div class="flex flex-col items-start gap-8">
            <img src="/Logo 2.png" alt="logo">
            <p class="text-white">We are a residential interior design firm located in Portland. Our<br /> boutique-studio offers more than</p>
        </div>
        <div class="flex items-start flex-col gap-6">
            <h4>Services</h4>
            <p>Bonus program</p>
            <p>Gift cards</p>
            <p>Credit and payment</p>
            <p>Service contracts</p>
            <p>Non-cash account</p>
            <p>Payment</p>
        </div>
        <div class="flex items-start flex-col gap-6">
            <h4>Assistance to the buyer</h4>
            <p>Find an order</p>
            <p>Terms of delivery</p>
            <p>Exchange and return of goods</p>
            <p>Guarantee</p>
            <p>Frequently asked questions</p>
            <p>Terms of use of the site</p>
        </div>
    </div>

    <div class="flex items-center gap-4 p-4 md:pl-16">
        <User color='white' />
        <User color='white' />
        <User color='white' />
        <User color='white' />
    </div>
</div>

<style>
    h4{
        font-size: 16px;
        color: white;
        font-weight: bold;
    }
    p{
        color: #CFCFCF;
        font-size: 14px;
    }
</style>