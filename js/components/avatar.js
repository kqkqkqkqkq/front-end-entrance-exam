export function renderAvatar(src) {
  const avatar = document.createElement('img')
  avatar.classList.add('avatar')
  avatar.src = src
  avatar.alt = src

  return avatar
}