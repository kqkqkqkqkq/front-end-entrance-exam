export function makeFavourite(items, activeItem, event) {
  if (event.target !== event.currentTarget) return
  items.forEach(item => {
    item.classList.remove('active')

    const badge = item.querySelector('.education-badge')
    if (badge) badge.style.display = 'none'
  })

  activeItem.classList.add('active')

  const badge = activeItem.querySelector('.education-badge')
  if (badge) badge.style.display = 'inline-block'
}
