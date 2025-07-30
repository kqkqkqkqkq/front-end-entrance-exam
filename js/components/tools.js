import { createEditableText } from './editable.js'
import { createToolsItem } from './tools-item.js'

const toolsData = [
  {
    category: 'design',
    icons: ['figma.png', 'photoshop.png', 'illustrator.png', 'premier.png', 'notion.png', 'meet.png']
  },
  {
    category: 'no-code',
    icons: ['zapier.png', 'webflow.png', 'notion.png', 'wordpress.png']
  },
  {
    category: 'artificial intelligence',
    icons: ['chatgpt.png', 'copilot.png', 'midjourney.png', 'midv3.png']
  }
]

export function renderTools() {
  const container = document.createElement('div')
  container.classList.add('tools')

  const title = createEditableText('Tools', 'h2-title')
  container.appendChild(title)

  const list = document.createElement('div')
  list.classList.add('tools-list')

  toolsData.forEach(section => {
    const item = createToolsItem(section)
    list.appendChild(item)
  })

  container.appendChild(list)
  return container
}
