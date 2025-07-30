export function createRipple(event) {
  const el = event.currentTarget

  const circle = document.createElement('span')
  const diameter = Math.max(el.clientWidth, el.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - el.getBoundingClientRect().left - radius}px`
  circle.style.top = `${event.clientY - el.getBoundingClientRect().top - radius}px`
  circle.classList.add('ripple')

  const ripple = el.querySelector('.ripple')
  if (ripple) {
    ripple.remove()
  }

  el.appendChild(circle)
}
