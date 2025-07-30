import { createEditableText } from './editable.js'

export function renderGreetings(name, role) {
  const textWrapper = document.createElement('div')
  textWrapper.classList.add('greeting')

  const hello = createEditableText('Hello 👋🏻 I’m', 'p-hello')

  const bottomInfo = document.createElement('div')
  bottomInfo.classList.add('bottom-info')

  const nameEl = createEditableText(name, 'p-name')

  const roleEl = createEditableText(role, 'p-role')

  bottomInfo.appendChild(nameEl)
  bottomInfo.appendChild(roleEl)

  textWrapper.appendChild(hello)
  textWrapper.appendChild(bottomInfo)

  return textWrapper
}