import Theme from './Theme.Base';

const BaseTheme = JSON.parse(JSON.stringify(Theme));

const DarkTheme = {
  title: 'Dark',
  label: 'Dark Theme',

  colors: {
    background: '#333',
    text: '#f5f5f5',
  },
};

export default { ...BaseTheme, ...DarkTheme };
