/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        4.5: "18px",
      },
      height: {
        4.5: "18px",
      },
      cursor: {
        macOSPointer: "url(public/cursorPointer.png), pointer",
        macOSCursor: "url(public/cursor.png), default",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
