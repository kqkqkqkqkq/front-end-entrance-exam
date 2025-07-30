import { createEditableText } from './editable.js'

export function createToolsItem(data) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('tools-item')

  const label = createEditableText(data.category, 'tools-label')

  const iconList = document.createElement('div')
  iconList.classList.add('tools-icon-list')

  data.icons.forEach(iconName => {
    const img = document.createElement('img')
    img.src = `./assets/icons/${iconName}`
    img.alt = iconName
    img.classList.add('tool-icon')
    iconList.appendChild(img)
  })

  wrapper.appendChild(label)
  wrapper.appendChild(iconList)
  return wrapper
}
