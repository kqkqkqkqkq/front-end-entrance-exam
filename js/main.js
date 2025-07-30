import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/pdf.css'
import { renderHeader } from './components/header.js'
import { AVATAR_SRC } from './constants/values.js'
import { renderSection } from './components/section.js'
import { renderLanguages } from './components/languages.js'
import { renderExperience } from './components/experience.js'
import { renderTools } from './components/tools.js'
import { renderEducation } from './components/education.js'
import { renderInterests } from './components/interests.js'
import { renderContact } from './components/contact.js'
import { renderDownloadButton } from './components/download_button.js'

const app = document.getElementById('app')

const header = renderHeader('Karthik SR', 'UX/UI Designer', AVATAR_SRC)
const languages = renderSection(renderLanguages())
const experiences = renderSection(renderExperience())
const tools = renderSection(renderTools())
const education = renderSection(renderEducation())
const interests = renderSection(renderInterests())
const contact = renderContact()

const bottomDiv = document.createElement('div')
bottomDiv.classList.add('bottom')

const middleRow = document.createElement('div')
middleRow.classList.add('middle-row')

middleRow.appendChild(experiences)
middleRow.appendChild(tools)

const bottomRow = document.createElement('div')
bottomRow.classList.add('bottom-row')

bottomRow.appendChild(education)
bottomRow.appendChild(bottomDiv)

bottomDiv.appendChild(interests)
bottomDiv.appendChild(contact)

app.appendChild(header)
app.appendChild(languages)
app.appendChild(middleRow)
app.appendChild(bottomRow)

renderDownloadButton()