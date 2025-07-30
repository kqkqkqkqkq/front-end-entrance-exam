import { renderAvatar } from './avatar.js'
import { renderSection } from './section.js'
import { renderGreetings } from './greetings.js'

export function renderHeader(name, role, avatarSrc) {
  const container = document.createElement('header')
  container.classList.add('header')

  const avatar = renderAvatar(avatarSrc)

  const greetings = renderSection(renderGreetings(name, role))

  container.appendChild(avatar)
  container.appendChild(greetings)
  return container
}