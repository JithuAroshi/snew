/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '12xl': [
            '5px 7px 2px rgb(222,205,177)',
        ],
        '13xl': [
          '14px 14px 2px rgb(126 126 126)',
      ],
      '14xl': [
        '8px 5px 2px rgb(151, 151, 151)',
    ],
    '15xl': [
      '10px 10px 2px rgba(7, 7, 7, 0.438)',
  ],
  '16xl': [
    '15px 15px 10px rgba(7, 7, 7, 0.438)',
],
      },

      colors: {
        'texty': 'black',
      },


    },
  },
  plugins: [],
}
