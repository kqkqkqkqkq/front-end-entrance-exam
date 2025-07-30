import { createEditableText } from './editable.js'
import { createEducationItem } from './education_item.js'
import { makeFavourite } from '../utils/makeFavourite.js'

const educationData = [
  {
    time: '2023',
    title: ' UI/UX',
    tags: '#UX #UI #research #DesignSystem #Ui #wireframing #figma #Ux',
    info: 'Coursera'
  },
  {
    time: '2017 - 2022',
    title: 'Law',
    tags: '#law #legalStudies #contracts #internationalLaws',
    info: 'University of Kerala'
  },
  {
    time: '2017',
    title: 'Graphic design',
    tags: '#branding #web #illustration #adobe',
    info: 'Coursera'
  },
]

export function renderEducation() {
  const container = document.createElement('div')
  container.classList.add('education')

  const title = createEditableText('Education', 'h2-title')
  container.appendChild(title)

  const list = document.createElement('div')
  list.classList.add('education-list')

  const items = []

  educationData.forEach((data, index) => {
    const item = createEducationItem(data, index === 0)

    if (index === 0) item.classList.add('active')

    items.push(item)
    list.appendChild(item)
  })

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      makeFavourite(items, item, e)
    })
  })

  container.appendChild(list)
  return container
}
