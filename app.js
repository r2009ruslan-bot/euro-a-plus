const products = {
    1: { nameKey: 'product1_name', specsKey: 'product1_specs', descKey: 'product1_desc', img: 'images/plitka.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    2: { nameKey: 'product2_name', specsKey: 'product2_specs', descKey: 'product2_desc', img: 'images/plitkae.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    3: { nameKey: 'product3_name', specsKey: 'product3_specs', descKey: 'product3_desc', img: 'images/plitkaz.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 }
};

const translations = {
    ru: { city:"📍 Тбилиси", shops:"Магазины", help:"Помощь", payment:"Оплата и доставка", contacts:"Контакты", search_placeholder:"Поиск плитки...", search_btn:"🔍 Найти", favorites:"Избранное", cart:"Корзина", tiles_nav:"Плитки", delivery:"Доставка", contacts_nav:"Контакты", cat_tiles:"Плитки", hero_title:"Плитка премиум-класса", hero_desc:"Широкий выбор керамической плитки для вашего дома. Доставка по всей Грузии.", hero_btn:"Смотреть товары ↓", popular_title:"🔥 Популярные товары", product1_name:"Amazon Light Gray", product1_specs:"Размер: 60×60 см • Цвет: светло-серый • Матовая", product1_desc:"Керамическая плитка Amazon Light Gray.", product2_name:"Luna", product2_specs:"Размер: 30×30 см • Цвет: белый • Глянцевая", product2_desc:"Плитка Luna с глянцевой поверхностью.", product3_name:"Amazon Dark Gray", product3_specs:"Размер: 60×60 см • Цвет: тёмно-серый • Противоскользящая", product3_desc:"Плитка Amazon Dark Gray.", add_to_cart:"В корзину", details:"Подробнее", added:"Добавлено", add_to_fav:"В избранное", in_fav:"В избранном", favorites_title:"Избранное", cart_title:"Корзина", empty_fav:"Пусто", remove:"Удалить", total:"Итого", no_results:"Ничего не найдено", footer_desc:"Плитка в Грузии", footer_address:"г. Тбилиси, ул. Руставели, 45", footer_catalog:"Каталог", footer_customers:"Покупателям", returns:"Возврат", copyright:"© 2026 EURO A PLUS.", back_to_shop:"Вернуться в магазин", description_title:"Описание", rights:"Все права защищены." },
    en: { city:"📍 Tbilisi", shops:"Stores", help:"Help", payment:"Payment & Delivery", contacts:"Contacts", search_placeholder:"Search tiles...", search_btn:"🔍 Search", favorites:"Favorites", cart:"Cart", tiles_nav:"Tiles", delivery:"Delivery", contacts_nav:"Contacts", cat_tiles:"Tiles", hero_title:"Premium Tiles", hero_desc:"Wide selection of ceramic tiles.", hero_btn:"View products ↓", popular_title:"🔥 Popular Products", product1_name:"Amazon Light Gray", product1_specs:"Size: 60×60 cm • Light gray • Matte", product1_desc:"Amazon Light Gray ceramic tile.", product2_name:"Luna", product2_specs:"Size: 30×30 cm • White • Glossy", product2_desc:"Luna tile with glossy finish.", product3_name:"Amazon Dark Gray", product3_specs:"Size: 60×60 cm • Dark gray • Anti-slip", product3_desc:"Amazon Dark Gray tile.", add_to_cart:"Add to Cart", details:"Details", added:"Added", add_to_fav:"Add to Favorites", in_fav:"In Favorites", favorites_title:"Favorites", cart_title:"Cart", empty_fav:"Empty", remove:"Remove", total:"Total", no_results:"Nothing found", footer_desc:"Tiles in Georgia", footer_address:"Tbilisi, Rustaveli Ave, 45", footer_catalog:"Catalog", footer_customers:"For Customers", returns:"Returns", copyright:"© 2026 EURO A PLUS.", back_to_shop:"Back to shop", description_title:"Description", rights:"All rights reserved." }
};

let favorites = JSON.parse(localStorage.getItem('euroFavorites') || '[]');
let cart = JSON.parse(localStorage.getItem('euroCart') || '[]');

function getLang() { return localStorage.getItem('euroAplusLang') || 'ru'; }
function t(key) { return (translations[getLang()] || translations['ru'])[key] || key; }

function saveState() { localStorage.setItem('euroFavorites', JSON.stringify(favorites)); localStorage.setItem('euroCart', JSON.stringify(cart)); updateBadges(); updateHeartIcons(); }
function updateBadges() { const fb=document.getElementById('favBadge'), cb=document.getElementById('cartBadge'); if(fb)fb.textContent=favorites.length||''; if(cb)cb.textContent=cart.length||''; }
function updateHeartIcons() { document.querySelectorAll('.heart-icon').forEach(icon=>{ const id=parseInt(icon.getAttribute('data-id')); if(id)icon.textContent=favorites.includes(id)?'❤️':'🤍'; }); }

function filterProducts(q) { q=q.toLowerCase().trim(); let found=0; document.querySelectorAll('.product-card[data-search]').forEach(card=>{ if(q===''||card.getAttribute('data-search').toLowerCase().includes(q)){card.style.display='';found++;}else{card.style.display='none';} }); const nr=document.getElementById('noResults'); if(nr)nr.style.display=found===0?'block':'none'; }

function attachGlobalEvents() {
    const si=document.getElementById('searchInput'), sb=document.getElementById('searchBtn');
    if(si){ si.oninput=function(){filterProducts(this.value);}; si.onkeydown=function(e){if(e.key==='Enter')filterProducts(this.value);}; }
    if(sb){ sb.onclick=function(){filterProducts(document.getElementById('searchInput').value);}; }
    document.querySelectorAll('.heart-icon').forEach(icon=>{ icon.onclick=function(e){e.stopPropagation();e.preventDefault(); const id=parseInt(this.getAttribute('data-id')); favorites.includes(id)?favorites=favorites.filter(f=>f!==id):favorites.push(id); saveState(); }; });
    document.querySelectorAll('.add-to-cart').forEach(btn=>{ btn.onclick=function(e){e.stopPropagation();e.preventDefault(); const id=parseInt(this.getAttribute('data-id')); if(!cart.includes(id)){cart.push(id);saveState();this.innerHTML='✅ '+t('added');setTimeout(()=>{this.innerHTML='🛒 '+t('add_to_cart');},1200);} }; });
    document.querySelectorAll('.lang-btn').forEach(btn=>{ btn.onclick=function(){switchLanguage(this.getAttribute('data-lang'));}; });
    document.getElementById('modalClose').onclick=function(){document.getElementById('modalOverlay').classList.remove('active');};
    document.getElementById('modalOverlay').onclick=function(e){if(e.target===this)this.classList.remove('active');};
    document.getElementById('favIcon').onclick=function(){openModal('fav');};
    document.getElementById('cartIcon').onclick=function(){openModal('cart');};
    const hb=document.getElementById('hamburgerBtn'); if(hb)hb.onclick=function(){document.getElementById('mobileMenu').classList.toggle('active');};
    document.querySelectorAll('#mobileMenu a').forEach(link=>{ link.onclick=function(){document.getElementById('mobileMenu').classList.remove('active');}; });
}

function openModal(type) {
    const mt=document.getElementById('modalTitle'), mi=document.getElementById('modalItems'), mtl=document.getElementById('modalTotal');
    mt.textContent=type==='fav'?t('favorites_title'):t('cart_title'); mi.innerHTML=''; if(mtl)mtl.style.display='none';
    const list=type==='fav'?favorites:cart;
    if(list.length===0){ mi.innerHTML='<div class="modal-empty">'+t('empty_fav')+'</div>'; }
    else { let total=0; list.forEach(id=>{ const p=products[id]; if(!p)return; total+=p.priceNum; const div=document.createElement('div'); div.className='modal-item'; div.innerHTML=`<img src="${p.img}" alt=""><div class="modal-item-info"><div class="modal-item-name">${t(p.nameKey)}</div><div class="modal-item-price">${p.price}</div></div><button class="modal-remove-btn" data-id="${id}" data-type="${type}">${t('remove')}</button>`; mi.appendChild(div); }); if(type==='cart'&&mtl){mtl.style.display='block';mtl.textContent=t('total')+': '+total+' ₾';} }
    mi.querySelectorAll('.modal-remove-btn').forEach(btn=>{ btn.onclick=function(){ const id=parseInt(this.getAttribute('data-id')), rt=this.getAttribute('data-type'); if(rt==='fav')favorites=favorites.filter(f=>f!==id); else cart=cart.filter(c=>c!==id); saveState(); openModal(rt); }; });
    document.getElementById('modalOverlay').classList.add('active');
}

function switchLanguage(lang) { localStorage.setItem('euroAplusLang',lang); document.querySelectorAll('[data-lang-key]').forEach(el=>{ const key=el.getAttribute('data-lang-key'); if(translations[lang]&&translations[lang][key])el.textContent=translations[lang][key]; }); document.querySelectorAll('[data-lang-key-placeholder]').forEach(el=>{ const key=el.getAttribute('data-lang-key-placeholder'); if(translations[lang]&&translations[lang][key])el.placeholder=translations[lang][key]; }); document.querySelectorAll('.lang-btn').forEach(btn=>{ btn.classList.remove('active'); if(btn.getAttribute('data-lang')===lang)btn.classList.add('active'); }); document.documentElement.lang=lang; if(window.location.pathname.includes('product.html'))loadProductPage(); }

function loadProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id || !products[id]) return;
    const p = products[id];
    
    // Название, цена, описание
    document.getElementById('productName').textContent = t(p.nameKey);
    document.getElementById('productSpecs').textContent = t(p.specsKey);
    document.getElementById('productPrice').textContent = p.price;
    document.getElementById('productOldPrice').textContent = p.oldPrice;
    document.getElementById('productDescription').textContent = t(p.descKey);
    document.getElementById('breadcrumbName').textContent = t(p.nameKey);
    document.title = 'EURO A PLUS — ' + t(p.nameKey);
    
    // Фото — сначала очищаем, потом задаём
    var img = document.getElementById('productImg');
    img.src = '';
    img.src = p.img;
    
    // Кнопка Избранное
    const fb = document.getElementById('addToFavBtn');
    if (fb) {
        fb.textContent = favorites.includes(id) ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav');
        fb.onclick = function() {
            favorites.includes(id) ? favorites = favorites.filter(f => f !== id) : favorites.push(id);
            saveState();
            fb.textContent = favorites.includes(id) ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav');
        };
    }
    
    // Кнопка В корзину
    const cb = document.getElementById('addToCartBtn');
    if (cb) {
        cb.onclick = function() {
            if (!cart.includes(id)) {
                cart.push(id);
                saveState();
                cb.innerHTML = '✅ ' + t('added');
                setTimeout(() => { cb.innerHTML = '🛒 ' + t('add_to_cart'); }, 1200);
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', function() {
    switchLanguage(getLang());
    updateBadges();
    updateHeartIcons();
    attachGlobalEvents();
    if (window.location.pathname.includes('product.html')) loadProductPage();
    document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', e => e.preventDefault()));
});