module.exports = {
  purge: ["./css/tailwind.css", "index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    extend: {},
  },
  variants: { 
    extend: {
      backgroundColor: ["active"], 
    },
  },
  plugins: [],
}

