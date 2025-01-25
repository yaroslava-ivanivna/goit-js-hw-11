import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=r=>`<li class="gallery-card">
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
   </li>`,p=r=>fetch(`https://pixabay.com/api/?key=48347976-46935637adedce2affc2ad0dc&q=${r}&image_type=photo&orientation=horizontal$safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),g=document.querySelector(".loader");function d(){g.classList.remove("visually-hidden")}function u(){g.classList.add("visually-hidden")}const a=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),n=r=>{r.preventDefault(),d();const o=r.currentTarget.elements.search.value.trim();if(o===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.removeEventListener("submit",n);return}p(o).then(s=>{if(s.total===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML="",a.reset();return}const i=s.hits.map(e=>h(e)).join("");m.innerHTML=i,u(),new f(".gallery a",{captionDelay:250}),a.addEventListener("submit",n),d()}).catch(s=>{console.error(s),u(),a.addEventListener("submit",n)})};a.addEventListener("submit",n);
//# sourceMappingURL=index.js.map
