export function openEditModal(targetEl) {
  const overlay = document.createElement('div')
  overlay.classList.add('modal-overlay')

  const modal = document.createElement('div')
  modal.classList.add('modal')

  const input = document.createElement('input')
  input.value = targetEl.textContent || ''
  input.classList.add('modal-input')

  const saveBtn = document.createElement('button')
  saveBtn.textContent = 'Save'
  saveBtn.classList.add('modal-save')

  const cancelBtn = document.createElement('button')
  cancelBtn.textContent = 'Cancel'
  cancelBtn.classList.add('modal-cancel')

  const storageKey = `editable-${targetEl.id || 'unknown'}`

  saveBtn.onclick = () => {
    let newText = input.value.trim()
    if (!newText) {
      newText = 'Empty'
    }
    targetEl.textContent = newText
    localStorage.setItem(storageKey, newText)
    document.body.removeChild(overlay)
  }

  cancelBtn.onclick = () => {
    document.body.removeChild(overlay)
  }

  modal.appendChild(input)
  modal.appendChild(saveBtn)
  modal.appendChild(cancelBtn)
  overlay.appendChild(modal)
  document.body.appendChild(overlay)
}