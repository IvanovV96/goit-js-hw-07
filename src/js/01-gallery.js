import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
function renderGallery(images) {
    const markupArr = []
    images.forEach(img => {
        const template = `<div class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
          />
        </a>
      </div>`
      markupArr.push(template)
    })
    gallery.insertAdjacentHTML('beforeend', markupArr.join(''))
}

renderGallery(galleryItems)

gallery.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.nodeName !== 'IMG') {
        return
    }
   const instance = basicLightbox.create(`
   <img src="${e.target.dataset.source}" width="800" height="600">
   `)
    instance.show()
    function closeEscape(e) {
        if(e.code === 'Escape') {
            instance.close()
        }
    }
    document.addEventListener('keydown', closeEscape)
})







