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


listImages.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    const target = evt.target;
console.log(evt.target)
    if (target.nodeName !== 'IMG') {
        return;
    }

    const largeImgUrl = target.dataset.source;

    const instance = basicLightBox.create(`<img src="${largeImgUrl}" width="800" height="600"/>`);

    instance.show();

}

console.log(galleryItems);

