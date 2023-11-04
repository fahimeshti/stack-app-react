/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        ct: "16px",
      },
      boxShadow: {
        custom: "0px 6px 8px 0px rgba(255, 86, 48, 0.10)",
      },
    },
  },
  plugins: [],
};
