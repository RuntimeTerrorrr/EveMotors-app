/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      'prime':"#FF001D",
    },
    fontFamily: {
      custom: ['prime', 'sans'], 
    },
  },
};
export const plugins = [];
