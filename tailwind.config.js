const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/**/*.js",
        "./src/**/*.ts",
        "./src/**/*.css",
        "./src/**/*.vue",
    ],
    variants: {
    extend: {
        opacity: ['hover'],
        translate: ['group-hover'],
    },
    },
    theme: {
        screens: {
            xs: "400px",

            sm: "640px",

            md: "768px",

            lg: "1024px",

            tablet: "1200px",

            xl: "1280px",

            "macbook-13": "1440px",

            "landing-2xl": "1536px",

            "2xl": "1600px",

            "3xl": "1800px",

            "full-hd": "1920px",

            "2k": "2560px",

            "4k": "4096px",
        },
        extend: {
            colors: {
                palette: {
                    peach: "#EEB891",
										body: 'hsla(39, 83%, 95%, 1)',
										gradient_blue: 'hsla(206, 61%, 8%, 0.9)',
										gradient_dblue: 'hsla(214, 48%, 17%, 0.9)',
										dark_blue1: '#081621',
										dark_blue2: '#172941',
										gold_yellow: '#FCD07D',
										gold_dark: '#5B391E'

                },
            },
            boxShadowColor: {
                "button": "box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), inset 0px 10px 7px rgba(103, 165, 236, 0.25), inset 0px -10px 7px rgba(103, 165, 236, 0.25);",
            },
            // linerGradient: {
            //     subscription: "background: linear-gradient(270deg, rgba(238, 184, 145, 0.9) 0%, rgba(232, 148, 156, 0.9) 100%);"
            // },
            borderRadius: {
                md: "10px",
                large: "20px",
                "2x-large": "40px",
            },
            fontSize: {
                xxs: "10px",
            },
            container: {
                screens: {
                    xl: "1200px",
                    "2xl": "1200px",
                },
            },
        },
    },
    plugins: [
        // require("tailwind-scrollbar"),
        // require("@tailwindcss/line-clamp"),
        // // firefox only modifier
        // plugin(function ({ addVariant, e, postcss }) {
        //     addVariant("firefox", ({ container, separator }) => {
        //         const isFirefoxRule = postcss.atRule({
        //             name: "supports",
        //             params: "(-moz-appearance:none)",
        //         });
        //         isFirefoxRule.append(container.nodes);
        //         container.append(isFirefoxRule);
        //         isFirefoxRule.walkRules((rule) => {
        //             rule.selector = `.${e(
        //                 `firefox${separator}${rule.selector
        //                     .slice(1)
        //                     .replaceAll("\\", "")}`
        //             )}`;
        //         });
        //     });
        // }),
    ],
};