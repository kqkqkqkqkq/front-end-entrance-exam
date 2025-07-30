import { createEditableText } from './editable.js'
import { createExperienceItem } from './experience_item.js'
import { makeActive } from '../utils/makeActive.js'

const experienceData = [
  {
    time: 'Jun. 2023 - Present',
    title: 'Marketing Manager',
    type: 'Pankayam | Full-time',
    info: [
      'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
      'SEO Content Creation for Blogs, Website, Social media'
    ]
  },
  {
    time: '2017 - Present',
    title: 'Graphic / Web designer',
    type: 'Freelance',
    info: [
      'Development of internal projects from scratch, product design of brands',
      'Landing page, webapps and hybrid apps',
      'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.'
    ]
  },
  {
    time: 'Sep. 2021 - Jun. 2023',
    title: 'Legal Assistant',
    type: 'Law Firm | Intern',
    info: [
      'Provide administrative support to lawyer and enhance office effectiveness',
      'Handle communication with clients, witnesses etc.',
      'Repair case briefs and summarize depositions, interrogatories and testimony'
    ]
  },
]

export function renderExperience() {
  const container = document.createElement('div')
  container.classList.add('experience')

  const title = createEditableText('Experience', 'h2-title')
  container.appendChild(title)

  const list = document.createElement('div')
  list.classList.add('experience-list')

  const items = []

  experienceData.forEach((exp, index) => {
    const isRecent = index === 0
    const item = createExperienceItem(exp, isRecent)

    if (index === 0) item.classList.add('active')

    items.push(item)
    list.appendChild(item)
  })

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      makeActive(items, item, e)
    })
  })

  container.appendChild(list)
  return container
}
