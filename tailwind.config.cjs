const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
    content : [ "./src/**/*.{html,js,svelte,ts}" ],

    theme : {
        extend : {
            fontFamily : {
                updog     : [ "KGRedHands", "sans-serif" ],
                Hey_Comic : [ "Hey_Comic", "sans-serif" ],

            },
        },
    },

    plugins : [
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui : {
        themes : [
            {
                updog : {
          
                    primary : "#f3f4f6",
                             
                    secondary : "#cca3a1",
                             
                    accent : "#73899a",
                             
                    neutral : "#292524",
                             
                    "base-100" : "#F0CDB1",
                             
                    info : "#cadad7",
                             
                    success : "#8eccb1",
                             
                    warning : "#bf9897",
                             
                    error : "#cadad3",
                },
            },
        ],
    },
};

module.exports = config;
