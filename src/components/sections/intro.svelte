<script>
    import generalInfos from "src/data/generalInfos";

    const [ info ] = generalInfos;

</script>

<div class="flex justify-center w-full pb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        <div class="flex justify-center">
            <img
                class="w-full"
                alt=""
                src={info?.introImage?.url}>
        </div>
        <div class="flex items-center">
            <div>
                <img
                    class="h-36 m-0"
                    alt=""
                    src={info?.titleImage?.url}>
        
                <h3 class="text-base-300 m-0 my-4 text-2xl">{info?.introText}</h3>
        
                <div class="flex flex-wrap">
                    <a
                        class="btn btn-secondary mr-3 px-10 mb-3"
                        href={info?.getUpdogUrl}
                        rel="noreferrer"
                        target="_blank">
                        Get $UPDOG
                    </a>
                    <a
                        class="btn btn-accent px-10"
                        href={info?.litepaperUrl}
                        rel="noreferrer"
                        target="_blank">
                        Litepaper
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="w-full flex flex-col items-center justify-center">
    <h3 class="text-secondary text-xl mb-3">{info?.aboutHeader}</h3>
    <svg
        class="animate-bounce h-5 fill-secondary"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
</div>
