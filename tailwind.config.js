const { colors: defaultColors } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nw-',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: '#279E02',
        primary900: '#005D00',
        primary800: '#007C00',
        primary700: '#148C00',
        primary600: '#279E02',
        primary500: '#32AD10',
        primary400: '#56B941',
        primary300: '#76C665',
        primary200: '#9FD592',
        primary100: '#C5E5BD',
        primary050: '#E7F5E4',

        secondary: '#68C7B5',
        secondary900: '#265F4D',
        secondary800: '#2F7C68',
        secondary700: '#358D77',
        secondary600: '#3B9D87',
        secondary500: '#40AB94',
        secondary400: '#4EB9A4',
        secondary300: '#68C7B5',
        secondary200: '#91D7CA',
        secondary100: '#BCE6DE',
        secondary050: '#E4F5F2',

        neutural900: '#0E0E0E',
        neutural800: '#2E2E31',
        neutural700: '#65656B',
        neutural600: '#90909B',
        neutural500: '#B0B0B3',
        neutural400: '#CDCDD1',
        neutural300: '#EEEDF1',
        neutural200: '#F3F3F9',
        neutural100: '#FCFCFF',
        neutural050: '#FFFFFF',

        alert900: '#AE2B0A',
        alert800: '#C83713',
        alert600: '#EB5A40',
        alert300: '#F9C8BA',
      },
    },
  },
  plugins: [],
};
