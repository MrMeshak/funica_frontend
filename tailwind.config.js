/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        '100': '#e7e7e7',
        '300': '#9f9f9f',
        '500': '#707070',
        '700': '#404040',
        '900': '#101010'
      },
      'secondary': {
        '100': '#f2f2f2',
        '300': '#c9c9c9',
        '500': '#afafaf',
        '700': '#949494',
        '900': '#797979'
      },
      'greyScale': {
        '900': '#212121',
        '800': '#424242',
        '700': '#616161',
        '600': '#757575',
        '500': '#9E9E9E',
        '400': '#bdbdbd',
        '300': '#e0e0e0',
        '200': '#eeeeee',
        '100': '#f5f5f5',
        '50': '#fafafa',
      },   
      'success': '#4ade80',
      'info': '#246BFD',
      'warning': '#FACC15',
      'error': '#f75555',
      'disabled': '#d8d8d8',
      'disabledButton': '#393939',

      'dark1': '#181A20',
      'dark2': '#1F222A',
      'dark3': '#35383f',

      'white': '#ffffff',
      'black': '#000000',
      'red': '#f44336',   
      'pink': '#e91e63',
      'purple': '#9c27b0',
      'deepPurple': '#673ab7',
      'indigo': '#3f51b5',
      'blue': '#2196f3',
      'lightBlue': '#03a9f4',
      'cyan': '#00bcd4',
      'teal': '#009688',
      'green': '#4caf50',
      'lightGreen': '#8bc34a',
      'lime': '#cddc39',
      'yellow': '#ffeb3b',
      'amber': '#ffc107',
      'orange': '#ff9800',
      'deepOrange': '#ff5722',
      'brown': '#795548',
      'blueGrey': '#607d8b',
      
      'background': {
        'sliver': '#f3f3f3',
        'purple': '#f4ecff',
        'blue': '#f6fafd',
        'green': '#f2fffc',  
        'orange': '#fff8ed',
        'pink': '#fff5f5',
        'yellow': '#fffEE0',
      },

      'transparent': {
        'sliver': '#101010',
        'purple': '#7210ff',
        'blue': '#335ef7',
        'orange': '#ff9800',
        'yellow': '#facc15',
        'red': '#f75555',
        'green': '#4caf50',
        'cyan': '#00bcd4'
      },
    },
    extend: {},
  },
  plugins: [],
}