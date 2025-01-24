import{i as c,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".loader");function f(){m.classList.remove("visually-hidden")}function d(){m.classList.add("visually-hidden")}const a=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),p=r=>`<li class="gallery-card">
  <a class="gallery-link-image" href="${r.largeImageURL}"> 
      <img
      class="gallery-image"
      src="${r.webformatURL}"
      data-source="${r.largeImageURL}"
      alt="${r.tags}"
    /> </a>

   <div class="image-info">
      <p class="image-additional-info"><strong>Likes:</strong> ${r.likes}</p>
      <p class="image-additional-info"><strong>Views:</strong> ${r.views}</p>
      <p class="image-additional-info"><strong>Comments:</strong> ${r.comments}</p>
      <p class="image-additional-info"><strong>Downloads:</strong> ${r.downloads}</p>
    </div>
   </li>`,n=r=>{r.preventDefault(),f();const s=r.currentTarget.elements.search.value.trim();if(s===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.removeEventListener("submit",n);return}fetch(`https://pixabay.com/api/?key=48347976-46935637adedce2affc2ad0dc&q=${s}&image_type=photo&orientation=horizontal$safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.total===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="",a.reset();return}const i=o.hits.map(e=>p(e)).join("");u.innerHTML=i,d(),a.addEventListener("submit",n),new g(".gallery a",{captionDelay:250})}).catch(o=>{console.error(o),d(),a.addEventListener("submit",n)})};a.addEventListener("submit",n);
//# sourceMappingURL=index.js.map
