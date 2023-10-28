import { galleryItems } from './gallery-items.js';
// Change code below this line



const listImages = document.querySelector(".gallery");
console.log(listImages);

const imagesMarkup = creatImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML('beforeend', imagesMarkup);


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

listImages.addEventListener('click', onClick);

function onClick(evn) {
    evn.preventDefault();
    const target = evn.target;

    if (target.nodeName !== 'IMG') {
        return;
    }

    const largeImgUrl = target.dataset.source;

    const instance = basicLightBox.create(`<img src="${largeImgUrl}" width="800" height="600"/>`);

    instance.show();

}

console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
// console.log(instance);
// instance.show();