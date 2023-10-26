module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: '#F4F5F9',
        default: '#E6E6E6',
        primary: '#636D77',
        secondary: '#5667FD',
        title: '#364356',
        subtitle: '#121212',
        card: '#EDEDED',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
