export function renderTitle(text) {
  const title = document.createElement('h2')
  title.classList.add('h2-title')
  title.textContent = text

  return title
}