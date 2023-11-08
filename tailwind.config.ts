import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'beigeCustomColor': '#CEB78B',
        'brownCustomColor': '#604B3C',
        'greenCustomColor': '#214532',
        'blueCustomColor': '#293743',
        'specialCustomColor': '#CEB78B',
        'grayCustomColor': '#B3B3B3',
        'goldenCustomColor': '#FDDFAC',
      },
      fontFamily: {
        'havlar': ['HavlarBreit-Lt', 'sans-serif'],
        'havlar-bold': ['HalvarBreit-Bold', 'sans-serif'],
        'montserrat': ['Montserrat-Medium', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
export default config
