import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
function showLoader() {
  loader.classList.remove('visually-hidden');
}

function hideLoader() {
  loader.classList.add('visually-hidden');
}

const searchFormEl = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.js-gallery');

import { createGalleryCardTemplate } from './render-function';
import { fetchPhotosByUserQuery } from './pixabay-api';

const onSearchFormSubmit = event => {
  event.preventDefault();

  showLoader();

  const searchFormValue = event.currentTarget.elements.search.value.trim();
  if (searchFormValue === '') {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    searchFormEl.removeEventListener('submit', onSearchFormSubmit);
    return;
  }

  fetchPhotosByUserQuery(searchFormValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryList.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      galleryList.innerHTML = galleryTemplate;

      hideLoader();
      searchFormEl.reset();
      lightbox.refresh();

      new SimpleLightbox('.gallery a', {
        captionDelay: 250,
      });
      searchFormEl.addEventListener('submit', onSearchFormSubmit);
      showLoader();
    })
    .catch(err => {
      console.error(err);
      hideLoader();
      searchFormEl.addEventListener('submit', onSearchFormSubmit);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
