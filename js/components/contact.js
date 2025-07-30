import { createEditableText } from './editable.js'

export function renderContact() {
  const container = document.createElement('div')
  container.classList.add('contact')

  const title = createEditableText('Let´s chat! I´m ready to work on exciting projects', 'contact-title')
  container.appendChild(title)

  const email = createEditableText('srkarthik.designscape@gmail.com', 'contact-email')
  container.appendChild(email)

  return container
}