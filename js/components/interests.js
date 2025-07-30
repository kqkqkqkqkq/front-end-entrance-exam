import { createEditableText } from './editable.js'

const interests = [
  'branding',
  'design',
  'photography',
  'artificial intelligence',
  'illustration',
  'typography',
  'social networks',
  'research',
  'drone pilot',
  'games'
]

export function renderInterests() {
  const container = document.createElement('div')
  container.classList.add('interests')

  const title = createEditableText('Interests', 'h2-title')
  container.appendChild(title)

  const list = document.createElement('ul')
  list.classList.add('interests-list')

  interests.forEach((data) => {
    const li = document.createElement('li')
    const item = createEditableText(data, 'interests-item')
    li.appendChild(item)
    list.appendChild(li)
  })

  container.appendChild(list)
  return container
}