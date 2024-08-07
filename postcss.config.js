module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: {
        "any-link-pseudo-class": true,
      },
    },
  },
};
