/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                'lobster': '"Lobster Two", sans-serif',
                'yeseva': '"Yeseva One", serif',
                'instrument': '"Instrument Sans", sans-serif',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['black', 'light'],
    },
};
