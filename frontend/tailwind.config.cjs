/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            fontFamily: {
                nunito: ["Nunito"],
                "nunito-sans": ["Nunito Sans"],
                jakarta: ["'Plus Jakarta Sans'"],
                inter: ["Inter"],
            },
            // colors: {
            //     'purple': "#8B70E9",

            // },
        },
    },
    plugins: [],
}