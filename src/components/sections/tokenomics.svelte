<script>
    import generalInfos from "src/data/generalInfos";

    const [ info ] = generalInfos;

</script>

<div
    id="tokenomics"
    class="flex justify-center w-full pt-10 pb-20">
    <div class="grid grid-cols-2 gap-10 max-w-6xl w-full">
        <div class="col-span-2 mb-20">
            <h1 class="text-4xl md:text-7xl text-center text-secondary">{info?.tokenomics}</h1>
            <h2 class="text-center text-2xl text-accent">{info?.tokenomicsSubText}</h2>
        </div>
        <div class="col-span-2 md:col-span-1 flex justify-center items-center">
            <img
                class="w-full rounded-lg"
                alt=""
                src={info?.tokenomicsImage?.url}>
        </div>
        <div class="col-span-2 md:col-span-1 prose">
            {@html info?.tokenomicsDescription?.html}
        </div>
    </div>
</div>

<div class="w-full flex flex-col items-center justify-center mt-5">
    <h3 class="text-secondary text-xl mb-3">FAQ</h3>
    <svg
        class="animate-bounce h-5 fill-secondary"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
</div>

