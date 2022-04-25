import Theme from './Theme.Base';
import { deepmerge } from 'deepmerge-ts';

const BaseTheme = JSON.parse(JSON.stringify(Theme));

const LightTheme = {
  title: 'Light',
  label: 'Light Theme',

  colors: {
    background: '#f5f5f5',
    text: '#333',
    navbartext: '#333',
    navbarhover: '#f21',
  },
};

export default deepmerge(BaseTheme, LightTheme);
