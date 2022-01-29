// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

// Change code below this line
const galleryContainerRef = document.querySelector('.gallery');
const imagesMarkup = galleryItems.map(({ preview, original, description }) => {
       return `
<a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`
}).join('');
  
galleryContainerRef.insertAdjacentHTML("beforeend", imagesMarkup);

    let gallery = new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 250,
        });
console.log(gallery);