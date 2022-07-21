/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        macOSPointer: "url(src/assets/cursorPointer.png), pointer",
        macOSCursor: "url(src/assets/cursor.png), default",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
