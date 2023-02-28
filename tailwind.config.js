/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        //tokyonight colors
        "tn-file-explorer-bg": "#1e2030",
        "tn-file-explorer-folder-name-color": "#82aaff",
        "tn-file-explorer-file-name-color": "#828bb8",
        "tn-file-explorer-folder-angle-icon-color": "#3b4261",
        "tn-file-explorer-items-hover-color": "#2f334d",
        "tn-buffer-background-color": "#222436",
        "tn-buffer-line-number-color": "#3b4261",
        "tn-section-heading-color": "#7092da",
        "tn-orange-color": "#ff966c",
        "tn-main-text-color": "#c8d3f5",
        //terminal colors
        "terminal-bg": "#12161b",
        "terminal-text-color": "#c0c5ce",
        "terminal-border-color": "#684eff",
      },
    },
  },
  plugins: [],
};
