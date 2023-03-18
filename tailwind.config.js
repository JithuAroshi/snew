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
          '14px 14px 2px rgb(165 153 132)',
      ],
      '14xl': [
        '8px 5px 2px rgb(151, 151, 151)',
    ],

      },

      backgroundImage: {
        'basic-pic': "url('../../assets/Image/mainshoe2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      colors: {
        'texty': 'black',
      },


    },
  },
  plugins: [],
}
