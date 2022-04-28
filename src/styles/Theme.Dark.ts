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

    todoInputBackground: '#666',
    todoBackground: '#444',

    clockBackground: '#222',
    clockText: '#ddd',
  },
};

export default deepmerge(BaseTheme, DarkTheme);
