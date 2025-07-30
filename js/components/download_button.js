import html2pdf from 'html2pdf.js'

export function renderDownloadButton() {
  const downloadBtn = document.createElement('button')
  downloadBtn.textContent = 'Download PDF'
  downloadBtn.classList.add('download-btn')

  downloadBtn.addEventListener('click', () => {
    const element = document.body
    element.classList.add('pdf')

    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        element.classList.remove('pdf')
      })
  })

  document.body.appendChild(downloadBtn)
}