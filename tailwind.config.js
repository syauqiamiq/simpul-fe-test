/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      textColor: {
        "quicks-primary": {
          1: "#2F80ED",
          2: "#4F4F4F",
          3: "#828282",
          4: "#E0E0E0",
        },
        "quicks-indicator": {
          1: "#F8B76B",
          2: "#8785FF",
          3: "#EB5757",
          4: "#F2C94C",
        },
        "quicks-chat-label": {
          1: "#E5A443",
          2: "#9B51E0",
          3: "#43B78D",
        },
      },
      backgroundColor: {
        "quicks-primary": {
          1: "#2F80ED",
          2: "#4F4F4F",
          3: "#828282",
          4: "#E0E0E0",
        },
        "quicks-indicator": {
          1: "#F8B76B",
          2: "#8785FF",
          3: "#EB5757",
          4: "#F2C94C",
        },
        "quicks-chat": {
          1: "#FCEED3",
          2: "#EEDCFF",
          3: "#D2F2EA",
        },
      },
    },
  },
  plugins: [],
};
