/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        vnc_green: "rgba(59, 196, 137, 1)",
        vnc_btn: "rgba(139, 112, 233, 1)",
        vnc_card: "rgba(77, 56, 153, 1)",
        vnc_sponsor: "rgba(33, 37, 41, 0.6)",
        vnc_btn_bg: "rgba(207, 214, 255, 1)",
        vnc_text: "#848484",
        vnc_white: "#FFFFFF",
        vnc_line: "rgba(123, 97, 255, 0.2);",
        vnc_hr: "rgba(143, 111, 254, 1)",
        vnc_popular: "rgba(247, 247, 247, 1)",
      },
      fontFamily: {
        Jakarta: "Plus Jakarta Sans",
        Nunito: "Nunito",
      },
      height: {
        card: "39rem",
      },
      width: {
        "46rem": "46rem",
        "29rem": "29rem",
        faqWidth: "58.75rem",
      },
      borderWidth: {
        first: "1px",
      },
      screens: {
        break1: "1000px",
        break2: "920px",
      },
    },
  },
  plugins: [],
};
