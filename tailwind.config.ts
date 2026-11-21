import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        synetra: {
          navy: '#042257', deep: '#002561', blue: '#0162B6', sky: '#0097DF',
          mist: '#EEF5FC', ink: '#0F172A', slate: '#5B6B82', line: '#E2EAF4',
          abyss: '#020A1C', night: '#06142E', glow: '#5CC8FF', paper: '#F4F8FC',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #002561 0%, #0162B6 55%, #0097DF 100%)',
      },
      maxWidth: { site: '1240px' },
    },
  },
  plugins: [],
};
export default config;
