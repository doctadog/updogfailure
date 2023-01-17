<script>
    import generalInfos from "src/data/generalInfos";

    const [ info ] = generalInfos;

</script>

<div
    id="about"
    class="flex justify-center w-full pt-10 pb-20">
    <div class="grid grid-cols-2 gap-10 max-w-6xl w-full">
        <div class="col-span-2 mb-20">
            <h1 class="text-5xl md:text-7xl text-center text-secondary">{info?.aboutHeader}</h1>
            <h2 class="text-center text-2xl text-accent">{info?.aboutSubText}</h2>
        </div>

        <div class="col-span-2 md:col-span-1 prose">
            {@html info?.aboutUpdog?.html}
        </div>

        <div class="col-span-2 md:col-span-1 flex justify-center items-center">
            <img
                class="w-1/2"
                alt=""
                src={info?.aboutImage?.url}>
        </div>
    </div>
</div>

<div class="w-full flex flex-col items-center justify-center mt-10">
    <h3 class="text-secondary text-xl mb-3">{info?.tokenomics}</h3>
    <svg
        class="animate-bounce h-5 fill-secondary"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
</div>
