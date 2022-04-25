import Theme from './Theme.Base';
import { deepmerge } from 'deepmerge-ts';

const BaseTheme = JSON.parse(JSON.stringify(Theme));

const DarkTheme = {
  title: 'Dark',
  label: 'Dark Theme',

  colors: {
    background: '#333',
    text: '#f5f5f5',
    navbartext: '#fff',
    navbarhover: '#f21',
  },
};

export default deepmerge(BaseTheme, DarkTheme);
