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
        "tn-green-color": "#5ae0a5",
        "tn-main-text-color": "#c8d3f5",
        "tn-function-name-color": "#82aaff",
        "tn-variable-name-color": "#c3e88d",
        "tn-commant-color": "#636da6",
        //terminal colors
        "tn-terminal-bg": "#12161b",
        "tn-terminal-text-color": "#c0c5ce",
        "tn-terminal-border-color": "#684eff",
        //gruvbox colors
        "gv-file-explorer-bg": "#1d2021",
        "gv-file-explorer-folder-name-color": "#fb4934",
        "gv-file-explorer-file-name-color": "#ebdbb2",
        "gv-file-explorer-folder-angle-icon-color": "#ebdbb2",
        "gv-file-explorer-items-hover-color": "#3c3836",
        "gv-buffer-background-color": "#282828",
        "gv-buffer-line-number-color": "#ebdbb2",
        "gv-section-heading-color": "#fb4934",
        "gv-orange-color": "#fe8019",
        "gv-green-color": "#b8bb26",
        "gv-main-text-color": "#ebdbb2",
        "gv-function-name-color": "#fb4934",
        "gv-variable-name-color": "#fabd2f",
        "gv-commant-color": "#928374",
        //terminal colors
        "gv-terminal-bg": "#282828",
        "gv-terminal-text-color": "#ebdbb2",
        "gv-terminal-border-color": "#fb4934",
      },
    },
  },
  plugins: [],
};
