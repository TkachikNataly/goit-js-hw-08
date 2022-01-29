// Add imports above this line
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/common.css';
import '../css/01-gallery.css';

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