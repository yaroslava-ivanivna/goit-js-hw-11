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

const createGalleryCardTemplate = imageInfo => {
  return `<li class="gallery-card">
  <a class="gallery-link-image" href="${imageInfo.largeImageURL}"> 
      <img
      class="gallery-image"
      src="${imageInfo.webformatURL}"
      data-source="${imageInfo.largeImageURL}"
      alt="${imageInfo.tags}"
    /> </a>

   <div class="image-info">
      <p class="image-additional-info"><strong>Likes:</strong> ${imageInfo.likes}</p>
      <p class="image-additional-info"><strong>Views:</strong> ${imageInfo.views}</p>
      <p class="image-additional-info"><strong>Comments:</strong> ${imageInfo.comments}</p>
      <p class="image-additional-info"><strong>Downloads:</strong> ${imageInfo.downloads}</p>
    </div>
   </li>`;
};

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

  fetch(
    `https://pixabay.com/api/?key=48347976-46935637adedce2affc2ad0dc&q=${searchFormValue}&image_type=photo&orientation=horizontal$safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
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
      searchFormEl.addEventListener('submit', onSearchFormSubmit);

      new SimpleLightbox('.gallery a', {
        captionDelay: 250,
      });
    })
    .catch(err => {
      console.error(err);
      hideLoader();
      searchFormEl.addEventListener('submit', onSearchFormSubmit);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
