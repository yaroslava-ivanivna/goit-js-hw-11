import{i as u,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=r=>`<li class="gallery-card">
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
   </li>`,y=r=>fetch(`https://pixabay.com/api/?key=48347976-46935637adedce2affc2ad0dc&q=${r}&image_type=photo&orientation=horizontal$safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),f=document.querySelector(".loader");function m(){f.classList.remove("visually-hidden")}function n(){f.classList.add("visually-hidden")}const a=document.querySelector(".js-search-form"),g=document.querySelector(".js-gallery");let d;const l=r=>{r.preventDefault(),m();const o=r.currentTarget.elements.search.value.trim();if(o===""){n(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.removeEventListener("submit",l);return}y(o).then(s=>{if(s.total===0){n(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g.innerHTML="",a.reset();return}n();const i=s.hits.map(e=>p(e)).join("");g.innerHTML=i,a.reset(),d?d.refresh():d=new h(".gallery a",{captionsData:"alt",captionDelay:250}),a.addEventListener("submit",l),m()}).catch(s=>{n(),console.error(s),a.addEventListener("submit",l)})};a.addEventListener("submit",l);
//# sourceMappingURL=index.js.map
