<script>
    import faqs from "src/data/faqs";
    import generalInfos from "src/data/generalInfos";

    const [ info ] = generalInfos;

    let selectedIdex = -1;

</script>

<div
    id="faq"
    class="flex justify-center flex-col items-center p pt-10 pb-20">
    
    <div class="pb-10">
        <h1 class="text-4xl md:text-5xl text-center text-secondary">{info?.faqHeader}</h1>
        <h2 class="text-center text-2xl text-accent">{info?.faqSubText}</h2>
    </div>

    <div class="max-w-xl w-full">
        {#each faqs as { question, description }, idx}
            <button
                class="btn btn-accent rounded w-full my-2 p-2 relative cursor-pointer"
                on:click={() => (selectedIdex = selectedIdex === idx ? -1 : idx)}>
                <div class="opacity-80 h-4 absolute right-3 top-2 translate-y-1/2">
                    {#if selectedIdex !== idx}
                        <svg
                            class="fill-primary h-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                    {:else}
                        <svg
                            class="fill-primary h-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"><path d="M0 10h24v4h-24z" /></svg>
                    {/if}
                </div>

                <h1 class="text-center text-xl text-primary opacity-80">{question}</h1>
            </button>
            {#if selectedIdex === idx}
                <div class="prose mb-10">
                    {@html description?.html}
                </div>
            {/if}
        {/each}
    </div>
</div>
