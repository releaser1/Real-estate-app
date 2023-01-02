/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: { 
      'red' : '#b91c1c',
      'redpink' : '#ef4444',
      'blue' : '#0ea5e9',
      'gray' : '#d1d5db',
      'cyan' : '#00adbb',
      'white' : '#F0F8FF',
      'dark' : '#3b4144',
      'black' : '#333',
      'darkblack' : '#322e2d',
     },
     backgroundImage: {
      'poster' : "url('/newyorkPoster.jpg')",
      'contact' : "url('/contact_us.svg')",
      'about' : "url('/about.svg')",
      'human1' : "url('/human1.svg')",
      'human2' : "url('/human2.svg')",
      'human3' : "url('/human3.svg')",
      'human4' : "url('/human4.svg')",
      'human5' : "url('/human5.svg')",
      'about2' : "url('/about-image-first.svg')",
      'about3' : "url('/about-image-second.svg')",
      'sold' : "url('/sold.svg')",

     },
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'dark' : '#000000',
      'purple' : '#6c757d',
      'white' : '#F0F8FF',
      'cyan' : '#00adbb',
      'blue' : '#0ea5e9',
      'graywhite' : '#a7a5a5',
      'darkgray': '#ffffff',
     }
  },
  plugins: [],
}
