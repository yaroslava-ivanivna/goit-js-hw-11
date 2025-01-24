const searchFormEl = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imageInfo => {
  return `<li class="gallery-card">
   <img
      class="gallery-image"
      src="${imageInfo.webformatURL}"
      data-source="${imageInfo.largeImageURL}"
      alt="${imageInfo.tags}"
    />
  
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

  const searchFormValue = event.currentTarget.elements.search.value;
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
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      galleryList.innerHTML = galleryTemplate;
    })
    .catch(err => console.log(err));
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);

// <h2 class="likes-title js-likes-title">Likes</h2>
// <p class="likes-info js-likes-info"></p>
// <h2 class="views-title js-views-title">Views</h2>
// <p class="views-info js-views-info"></p>
// <h2 class="comments-title js-comments-title">Coments</h2>
// <p class="comments-info js-comments-info"></p>
// <h2 class="downloads-title js-downloads-title">Downloads</h2>
// <p class="downloads-info js-downloads-info"></p>
