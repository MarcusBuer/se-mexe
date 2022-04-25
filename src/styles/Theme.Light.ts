import Theme from './Theme.Base';

const BaseTheme = JSON.parse(JSON.stringify(Theme));

const DarkTheme = {
  title: 'Light',
  label: 'Light Theme',

  colors: {
    background: '#f5f5f5',
    text: '#333',
  },
};

export default { ...BaseTheme, ...DarkTheme };
