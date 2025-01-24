(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=t=>`<li class="gallery-card">
   <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  
   <div class="image-info">
      <p class="image-additional-info"><strong>Likes:</strong> ${t.likes}</p>
      <p class="image-additional-info"><strong>Views:</strong> ${t.views}</p>
      <p class="image-additional-info"><strong>Comments:</strong> ${t.comments}</p>
      <p class="image-additional-info"><strong>Downloads:</strong> ${t.downloads}</p>
    </div>
   </li>`,d=t=>{t.preventDefault();const s=t.currentTarget.elements.search.value;fetch(`https://pixabay.com/api/?key=48347976-46935637adedce2affc2ad0dc&q=${s}&image_type=photo&orientation=horizontal$safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const a=o.hits.map(e=>l(e)).join("");c.innerHTML=a}).catch(o=>console.log(o))};n.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
