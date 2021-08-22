module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open sans", "sans-serif"],
        display: ["Georama", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f7fcf6",
          100: "#f0f9ee",
          200: "#d9f1d4",
          300: "#c1e8bb",
          400: "#93d687",
          DEFAULT: "#65c554",
          600: "#5bb14c",
          700: "#4c943f",
          800: "#3d7632",
          900: "#316129",
        },
        cta: {
          50: "#f8f6fc",
          100: "#f2eef9",
          200: "#ded4f1",
          300: "#cbbbe8",
          400: "#a387d6",
          DEFAULT: "#7c54c5",
          600: "#704cb1",
          700: "#5d3f94",
          800: "#4a3276",
          900: "#3d2961",
        },
        danger: {
          50: "#fef7f6",
          100: "#fdf0ed",
          200: "#fad9d1",
          300: "#f7c1b5",
          400: "#f0937e",
          DEFAULT: "#ea6547",
          600: "#d35b40",
          700: "#b04c35",
          800: "#8c3d2b",
          900: "#733123",
        },
        success: {
          50: "#f6fef6",
          100: "#ecfded",
          200: "#d0f9d1",
          300: "#b4f5b6",
          400: "#7bee7f",
          DEFAULT: "#43e648",
          600: "#3ccf41",
          700: "#32ad36",
          800: "#288a2b",
          900: "#217123",
        },
        warning: {
          50: "#fefdf4",
          100: "#fcfbe9",
          200: "#f8f6c8",
          300: "#f4f0a7",
          400: "#ece466",
          DEFAULT: "#e4d924",
          600: "#cdc320",
          700: "#aba31b",
          800: "#898216",
          900: "#706a12",
        },
        info: {
          50: "#f6fdfd",
          100: "#eefbfc",
          200: "#d4f5f7",
          300: "#baeff1",
          400: "#86e4e7",
          DEFAULT: "#52d8dd",
          600: "#4ac2c7",
          700: "#3ea2a6",
          800: "#318285",
          900: "#286a6c",
        },
      },
      height: {
        "screen-80": "80vh",
      },
      width: {
        "min-content": "min-content",
        "max-content": "max-content",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
