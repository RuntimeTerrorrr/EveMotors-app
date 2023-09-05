// tailwindcss.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#FF001D",
      },
      fontFamily: {
        custom: ['prime', 'prime'],
        prime: ['Secondary', 'prime'],
      },
      animation: {
        abox1: 'abox1 4s 1s forwards ease-in-out infinite',
        abox2: 'abox2 4s 1s forwards ease-in-out infinite',
        abox3: 'abox3 4s 1s forwards ease-in-out infinite',
      },
      keyframes: {
        abox1: {
          '0%, 12.5%, 25%, 37.5%, 50%, 62.5%, 75%, 87.5%, 100%': {
            width: '112px',
            height: '48px',
            marginTop: '64px',
            marginLeft: '0px',
          },
          '75%, 87.5%, 100%': {
            width: '48px',
            height: '48px',
            marginTop: '0px',
            marginLeft: '0px',
          },
          '25%, 37.5%': {
            width: '48px',
            height: '112px',
            marginTop: '0px',
            marginLeft: '0px',
          },
        },
        abox2: {
          '0%, 12.5%, 25%, 37.5%, 50%, 62.5%, 75%, 87.5%, 100%': {
            width: '112px',
            height: '48px',
            marginTop: '64px',
            marginLeft: '0px',
          },
          '75%, 87.5%, 100%': {
            width: '48px',
            height: '48px',
            marginTop: '0px',
            marginLeft: '0px',
          },
          '25%, 37.5%': {
            width: '48px',
            height: '112px',
            marginTop: '0px',
            marginLeft: '0px',
          },
        },
        abox3: {
          '0%, 12.5%, 25%, 37.5%, 50%, 62.5%, 75%, 87.5%, 100%': {
            width: '112px',
            height: '48px',
            marginTop: '64px',
            marginLeft: '0px',
          },
          '75%, 87.5%, 100%': {
            width: '48px',
            height: '48px',
            marginTop: '0px',
            marginLeft: '0px',
          },
          '25%, 37.5%': {
            width: '48px',
            height: '112px',
            marginTop: '0px',
            marginLeft: '0px',
          },
        }
      },
    },
  },
  plugins: [],
};
