/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        xxl: "1400px",
        // => @media (min-width: 1400px) { ... }

        xxxl: "1600px",
        // => @media (min-width: 1400px) { ... }
      },
      colors: {
        // Add your custom color
        colorDark: "#141414",
        colorPink: "#f573c9",
        colorPink2: "#e044ac",
        colorGreyLight: "#797979",
        colorGreyDark: "#141414",
        colorGreyWhite: "#F6F6F6",
      },
      spacing: {},
      fontFamily: {
        barlow: "Barlow",
      },
      borderRadius: {
        "10xs": "3px",
        xl: "20px",
        "11xl": "30px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "3xl": "22px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "31xl": "50px",
      "11xl": "30px",
      "6xl": "25px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "7xl": "26px",
      "2xl": "21px",
      "16xl": "35px",
      "9xl": "28px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "10xl": "29px",
      "19xl": "38px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
