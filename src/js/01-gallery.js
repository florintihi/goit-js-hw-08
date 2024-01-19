// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const liImage = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"  />
   </a>
</li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', liImage);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
