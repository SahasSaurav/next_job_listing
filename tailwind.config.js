module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,tsx,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "desaturated-cyan": "hsl(180,29%,50%)",
        "cyan-background": "hsl(180, 52%, 96%)",
        "cyan-filter": "hsl(180, 31%, 95%)",
        "grayish-cyan": "hsl(180, 8%, 52%)",
        "grayish-cyan-dark": "hsl(180, 14%, 20%)"
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
