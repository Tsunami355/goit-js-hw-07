import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");
console.log(listImages);

const imagesMarkup = creatImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML('beforeend', imagesMarkup);
listImages.addEventListener('click', onCardsContainerClick);

function creatImagesListMarkup(images) {
    return images
        .map(({ original, preview, description }) => {
            return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
        })
        .join(''); 
}