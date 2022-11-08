export const attachEvent = (selector: string, event: string, fn: (e: Element) => void) => {
  const matches = document.querySelectorAll(selector);
  if (matches && matches.length > 0) {
    matches.forEach((elem) => {
      elem.addEventListener(event, () => fn(elem), false);
    });
  }
};
