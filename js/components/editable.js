import { openEditModal } from './modal.js'
import { createRipple } from '../utils/createRipple.js'

let editableCounter = 0

export function createEditableText(initialText, className = '') {
  const el = document.createElement('p')
  el.className = className
  el.textContent = initialText

  el.id = `editable-${editableCounter++}`

  el.dataset.editable = 'true'

  const saved = localStorage.getItem(`editable-${el.id}`)
  if (saved) {
    el.textContent = saved
  }

  el.addEventListener('click', (e) => {
    createRipple(e)
    setTimeout(() => openEditModal(el), 200)
  })

  return el
}
