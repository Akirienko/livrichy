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
                    xxs: "340px",
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
										light_beige: "#FDF6E9",
                    body: 'hsla(39, 83%, 95%, 1)',
                    gradient_blue: 'hsla(206, 61%, 8%, 0.9)',
                    gradient_dblue: 'hsla(214, 48%, 17%, 0.9)',
                    dark_blue1: '#081621',
                    dark_blue2: '#172941',
                    gold_yellow: '#FCD07D',
                    gold_dark: '#5B391E',
                    beige: '#FDF6E9',
										error: '#b90303'
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
            container: {
                screens: {
                    xl: "1200px",
                    "2xl": "1200px",
                },
            },
        },
    },
    plugins: [],
};