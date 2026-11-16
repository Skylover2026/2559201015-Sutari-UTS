const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector(".main-nav");
if(menuButton&&navigation){menuButton.addEventListener("click",()=>{const opened=navigation.classList.toggle("is-open");menuButton.setAttribute("aria-expanded",String(opened));menuButton.textContent=opened?"×":"☰";});}
const searchInput=document.querySelector("#search-product"),categoryFilter=document.querySelector("#category-filter");
const cards=document.querySelectorAll("#catalog-grid .product-card"),count=document.querySelector("#product-count"),empty=document.querySelector("#empty-state");
function filterProducts(){if(!searchInput||!categoryFilter||!cards.length)return;const word=searchInput.value.trim().toLowerCase(),category=categoryFilter.value;let shown=0;cards.forEach(card=>{const match=(card.dataset.name||"").includes(word)&&(category==="all"||card.dataset.category===category);card.hidden=!match;if(match)shown++;});count.textContent=`${shown} ITEMS`;empty.hidden=shown!==0;}
if(searchInput&&categoryFilter){searchInput.addEventListener("input",filterProducts);categoryFilter.addEventListener("change",filterProducts);}
const form=document.querySelector("#contact-form"),feedback=document.querySelector("#form-feedback");
if(form&&feedback){form.addEventListener("submit",event=>{event.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}feedback.textContent="Terima kasih! Formulir berhasil divalidasi (demo).";form.reset();});}
