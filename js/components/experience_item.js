import { createEditableText } from './editable.js'

export function createExperienceItem(exp, isRecent = false) {
  const item = document.createElement('div')
  item.classList.add('experience-item')

  const topRow = document.createElement('div')
  topRow.classList.add('experience-top-row')

  const time = createEditableText(exp.time, 'experience-time')
  topRow.appendChild(time)

  if (isRecent) {
    const badge = document.createElement('span')
    badge.textContent = 'most recent'
    badge.classList.add('experience-badge')
    topRow.appendChild(badge)
  }

  const bottomRow = document.createElement('div')
  bottomRow.classList.add('experience-bottom-row')

  const titleContainer = document.createElement('div')
  titleContainer.classList.add('experience-title-container')

  const title = createEditableText(exp.title, 'experience-title')
  const type = createEditableText(exp.type, 'experience-type')

  titleContainer.appendChild(title)
  titleContainer.appendChild(type)

  const infoList = document.createElement('ul')
  infoList.classList.add('experience-info-list')

  for (const text of exp.info) {
    const li = document.createElement('li')
    const editable = createEditableText(text, 'experience-info')
    li.appendChild(editable)
    infoList.appendChild(li)
  }

  bottomRow.appendChild(titleContainer)
  bottomRow.appendChild(infoList)

  item.appendChild(topRow)
  item.appendChild(bottomRow)
  return item
}
