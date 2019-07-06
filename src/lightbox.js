let elementsGallery = document.getElementById('grid-images')

elementsGallery.addEventListener('click', e => {
    e.preventDefault();
    let linkImage = e.target.children[0].src,
        linkText = e.target.children[0].alt

    createModal(linkImage, linkText)
})

const createModal = (image, text) => {
    const elementImage = document.createElement('img')

    elementImage.classList.add('modal-image')
    elementImage.src = image
    elementImage.alt = text

    const elementClose = document.createElement('div')
    elementClose.classList.add('modal-close')
    elementClose.textContent = 'X'

    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')

    modalContainer.insertAdjacentElement('beforeend', elementClose)
    modalContainer.insertAdjacentElement('beforeend', elementImage)
    console.log(modalContainer)

    const mainModal = document.createElement('div')
    mainModal.classList.add('modal')
    mainModal.insertAdjacentElement('beforeend', modalContainer)

    showModal(mainModal)
}

const showModal = modal => {
    document.body.insertAdjacentElement('beforeend', modal)

    modal.addEventListener('click', e => {
        console.log(e.target.className)
        if (e.target.className === 'modal-close' || e.target.className === 'modal') {
            modal.remove()
        }
    })
}