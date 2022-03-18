const colors = require("tailwindcss/colors");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
// const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      lineHeight: {
        "extra-none": "0.75",
      },
      borderWidth: {
        12: "12px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              marginTop: em(36, 16),
              marginBottom: em(24, 16),
            },
            a: {
              "text-decoration": "none",
              color: "var(--color-primary)",
              "font-weight": "bold",
              "border-bottom": "1px solid var(--color-link-underline)",
              "transition-duration": "50ms, 0.1s, 0.1s",
              "transition-timing-function": "linear",
              "transition-property": "border-color, color, padding-bottom",
              "&:hover": {
                opacity: "0.6",
                "border-bottom": "transparent",
                "padding-bottom": "1px",
              },
            },
          },
        },
        lg: {
          css: {
            img: {
              marginTop: em(16, 16),
              marginBottom: em(16, 16),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
