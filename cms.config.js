export default {
    contentEndpoint : "https://api-us-west-2.hygraph.com/v2/clcny2qt80jcv01um4bech610/master",
    queries         : [
        {
            model : "generalInfos",
            args  : `(
                    first: 1
                )   {
                        aboutHeader
                        aboutSubText
                        aboutUpdog {
                            html
                        }
                        createdAt
                        discord
                        id
                        introText
                        publishedAt
                        litepaperUrl
                        getUpdogUrl,
                        tokenomics
                        tokenomicsSubText
                        tokenomicsDescription {
                            html
                        }
                        faqHeader
                        faqSubText
                        twitter
                        titleImage {
                            url
                        }
                        logo {
                            url
                        }
                        tokenomicsImage {
                            url
                        }
                        tokenomicsDescription {
                            html
                        }
                        introImage {
                            url
                        }
                        aboutUpdog {
                            html
                        }
                        aboutImage {
                            url
                        }
                    }
            `,
        },
        {
            model : "faqs",
            args  : `() {
                    question
                    description {
                        html
                    }
                }
            `,
        },
    ],
};
