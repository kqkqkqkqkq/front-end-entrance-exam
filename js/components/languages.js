import { createEditableText } from './editable.js'

const languagesData = [
  { name: 'English', level: 100 },
  { name: 'Russian', level: 100 },
  { name: 'Dutch', level: 65 },
]

export function renderLanguages() {
  const container = document.createElement('div')
  container.classList.add('languages')

  const title = createEditableText('Languages', 'h2-title')
  container.appendChild(title)

  const list = document.createElement('div')
  list.classList.add('language-list')

  for (const lang of languagesData) {
    const row = document.createElement('div')
    row.classList.add('language-row')

    const name = createEditableText(lang.name, 'language-name')

    const barWrapper = document.createElement('div')
    barWrapper.classList.add('progress-bar-wrapper')

    const bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.style.width = `${lang.level}%`

    barWrapper.appendChild(bar)
    row.appendChild(name)
    row.appendChild(barWrapper)
    list.appendChild(row)
  }

  container.appendChild(list)
  return container
}
