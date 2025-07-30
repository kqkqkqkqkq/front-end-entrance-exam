export function renderSection(childElement) {
  const wrapper = document.createElement('section')
  wrapper.classList.add('section-wrapper')

  wrapper.appendChild(childElement)

  return wrapper
}