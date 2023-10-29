import { galleryItems } from './gallery-items.js';
// Change code below this line
const listImages = document.querySelector(".gallery");


function creatImagesList(images) {
    const markup = images.map(({ original, preview, description }) => {
            return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
        })
        .join(''); 
    
    listImages.innerHTML = markup;
}

creatImagesList(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})

console.log(galleryItems);
