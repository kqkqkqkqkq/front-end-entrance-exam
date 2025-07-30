import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

<<<<<<< Updated upstream
setupCounter(document.querySelector('#counter'))
=======
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