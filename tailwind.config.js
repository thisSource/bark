module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans"],
        Secular: ["Secular One"]
      },
      fontSize: {
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "15xl": "15rem",
        "20xl": "20rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
