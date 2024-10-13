
        const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
        const { nextui } = require('@nextui-org/react');
        const plugin = require('tailwindcss/plugin');
        const { join } = require('path');

        /** @type {import('tailwindcss').Config} */
        module.exports = {
            content: [
                join(__dirname, '**/*.{js,ts,jsx,tsx}'),
                '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
                ...createGlobPatternsForDependencies(__dirname),
            ],
            theme: {
                extend: {},
            },
            plugins: [
                plugin(function ({ matchUtilities, theme }) {
                    matchUtilities(
                        {
                        appShadow: (modifier) => ({
                            'box-shadow': modifier,
                        }),
                        },
                        {
                        values: theme('boxShadow'),
                        },
                    );
                }),
                nextui({
                    prefix: 'app',
                })
            ],
        };
    