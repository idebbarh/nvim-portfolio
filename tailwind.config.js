/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //tokyonight colors
        "tn-file-explorer-bg": "#1e2030",
        "tn-file-explorer-folder-name-color": "#82aaff",
        "tn-file-explorer-file-name-color": "#828bb8",
        "tn-file-explorer-folder-angle-icon-color": "#3b4261",
        "tn-file-explorer-items-hover-color": "#2f334d",
      },
    },
  },
  plugins: [],
};
