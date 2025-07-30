export function makeActive(items, item, event) {
  if (event.target !== event.currentTarget) return

  items.forEach(item => {
    item.classList.remove('active')
  })

  item.classList.add('active')
}