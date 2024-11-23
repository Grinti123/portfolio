/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  daisyui: {
    themes: ["business"],
  },
  theme: {
    screens: {
      'mobile': '320px',
      'laptop': '1280px',
      'desktop': '1280px'
    },
    colors: {
      'orangegruvbox' : '#fabd2f',
      'darkgruvbox' : '#1d2021'
    },
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "serif"],
      }
    },
  },
  plugins: [require('daisyui'), 
    require('tailwind-typewriter') ({
      wordsets: {
        hero: {
          words: ['Creative', 'Discipline', 'Consistent'],
          caretColor: '#fabd2f'
        }
      }
    })
  ],
}

