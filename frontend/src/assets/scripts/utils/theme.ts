import { attachEvent } from './helpers';

const themeRoot = document.documentElement;

export function initializeTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: dark)`).matches)
  ) {
    themeRoot.classList.add('dark');
  } else {
    themeRoot.classList.remove('dark');
  }
}

export const setToggle = (selector: string) => {
  attachEvent(selector, 'click', () => {
    themeRoot.classList.toggle('dark');
    localStorage.theme = themeRoot.classList.contains('dark') ? 'dark' : 'light';
  });
};
