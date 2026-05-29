const products = {
    1: { nameKey: 'product1_name', specsKey: 'product1_specs', descKey: 'product1_desc', img: 'images/plitka.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    2: { nameKey: 'product2_name', specsKey: 'product2_specs', descKey: 'product2_desc', img: 'images/plitkae.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    3: { nameKey: 'product3_name', specsKey: 'product3_specs', descKey: 'product3_desc', img: 'images/plitkaz.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 }
};

const translations = {
    ka: {
        city:"📍 თბილისი", shops:"მაღაზიები", help:"დახმარება", contacts:"კონტაქტები",
        search_placeholder:"ფილების ძებნა...", search_btn:"🔍 ძებნა", favorites:"რჩეულები", cart:"კალათა",
        tiles_nav:"ფილები", contacts_nav:"კონტაქტები",
        hero_title:"პრემიუმ ფილები", hero_desc:"კერამიკული ფილების ფართო არჩევანი თქვენი სახლისთვის. მიწოდება მთელ საქართველოში.", hero_btn:"პროდუქციის ნახვა ↓",
        popular_title:"🔥 პოპულარული პროდუქტები",
        product1_name:"Amazon Light Gray", product1_specs:"ზომა: 60×60 სმ • ფერი: ღია ნაცრისფერი • მქრქალი", product1_desc:"Amazon Light Gray კერამიკული ფილა — იდეალურია თანამედროვე ინტერიერისთვის.",
        product2_name:"Luna", product2_specs:"ზომა: 30×30 სმ • ფერი: თეთრი • პრიალა", product2_desc:"Luna ფილა პრიალა ზედაპირით.",
        product3_name:"Amazon Dark Gray", product3_specs:"ზომა: 60×60 სმ • ფერი: მუქი ნაცრისფერი • მოცურების საწინააღმდეგო", product3_desc:"Amazon Dark Gray მოცურების საწინააღმდეგო საფარით.",
        add_to_cart:"კალათაში", details:"დეტალურად", added:"დაემატა", add_to_fav:"რჩეულებში", in_fav:"რჩეულებშია",
        favorites_title:"რჩეულები", cart_title:"კალათა", empty_fav:"ცარიელია", remove:"წაშლა", total:"ჯამი", no_results:"ვერაფერი მოიძებნა",
        footer_desc:"ფილები საქართველოში", footer_address:"თბილისი, რუსთაველის გამზ., 45", footer_customers:"მომხმარებლებისთვის",
        copyright:"© 2026 EURO A PLUS. ყველა უფლება დაცულია.", back_to_shop:"მაღაზიაში დაბრუნება", description_title:"აღწერა",
        page_title:"კონტაქტები", page_subtitle:"დაგვიკავშირდით ნებისმიერი კითხვისთვის",
        address_title:"მისამართი", phone_title:"ტელეფონი", email_title:"ელ. ფოსტა", hours_title:"სამუშაო საათები", social_title:"სოციალური ქსელები",
        help_title:"დახმარება", help_subtitle:"დაგვიკავშირდით — ჩვენ დაგეხმარებით!"
    },
    ru: {
        city:"📍 Тбилиси", shops:"Магазины", help:"Помощь", contacts:"Контакты",
        search_placeholder:"Поиск плитки...", search_btn:"🔍 Найти", favorites:"Избранное", cart:"Корзина",
        tiles_nav:"Плитки", contacts_nav:"Контакты",
        hero_title:"Плитка премиум-класса", hero_desc:"Широкий выбор керамической плитки для вашего дома. Доставка по всей Грузии.", hero_btn:"Смотреть товары ↓",
        popular_title:"🔥 Популярные товары",
        product1_name:"Amazon Light Gray", product1_specs:"Размер: 60×60 см • Цвет: светло-серый • Матовая", product1_desc:"Керамическая плитка Amazon Light Gray.",
        product2_name:"Luna", product2_specs:"Размер: 30×30 см • Цвет: белый • Глянцевая", product2_desc:"Плитка Luna с глянцевой поверхностью.",
        product3_name:"Amazon Dark Gray", product3_specs:"Размер: 60×60 см • Цвет: тёмно-серый • Противоскользящая", product3_desc:"Плитка Amazon Dark Gray.",
        add_to_cart:"В корзину", details:"Подробнее", added:"Добавлено", add_to_fav:"В избранное", in_fav:"В избранном",
        favorites_title:"Избранное", cart_title:"Корзина", empty_fav:"Пусто", remove:"Удалить", total:"Итого", no_results:"Ничего не найдено",
        footer_desc:"Плитка в Грузии", footer_address:"г. Тбилиси, ул. Руставели, 45", footer_customers:"Покупателям",
        copyright:"© 2026 EURO A PLUS. Все права защищены.", back_to_shop:"Вернуться в магазин", description_title:"Описание",
        page_title:"Контакты", page_subtitle:"Свяжитесь с нами по любому вопросу",
        address_title:"Адрес", phone_title:"Телефон", email_title:"Эл. почта", hours_title:"Часы работы", social_title:"Социальные сети",
        help_title:"Помощь", help_subtitle:"Свяжитесь с нами — мы поможем!"
    },
    en: {
        city:"📍 Tbilisi", shops:"Stores", help:"Help", contacts:"Contacts",
        search_placeholder:"Search tiles...", search_btn:"🔍 Search", favorites:"Favorites", cart:"Cart",
        tiles_nav:"Tiles", contacts_nav:"Contacts",
        hero_title:"Premium Tiles", hero_desc:"Wide selection of ceramic tiles for your home. Delivery across Georgia.", hero_btn:"View products ↓",
        popular_title:"🔥 Popular Products",
        product1_name:"Amazon Light Gray", product1_specs:"Size: 60×60 cm • Color: light gray • Matte", product1_desc:"Amazon Light Gray ceramic tile.",
        product2_name:"Luna", product2_specs:"Size: 30×30 cm • Color: white • Glossy", product2_desc:"Luna tile with glossy finish.",
        product3_name:"Amazon Dark Gray", product3_specs:"Size: 60×60 cm • Color: dark gray • Anti-slip", product3_desc:"Amazon Dark Gray tile.",
        add_to_cart:"Add to Cart", details:"Details", added:"Added", add_to_fav:"Add to Favorites", in_fav:"In Favorites",
        favorites_title:"Favorites", cart_title:"Cart", empty_fav:"Empty", remove:"Remove", total:"Total", no_results:"Nothing found",
        footer_desc:"Tiles in Georgia", footer_address:"Tbilisi, Rustaveli Ave, 45", footer_customers:"For Customers",
        copyright:"© 2026 EURO A PLUS. All rights reserved.", back_to_shop:"Back to shop", description_title:"Description",
        page_title:"Contacts", page_subtitle:"Contact us with any questions",
        address_title:"Address", phone_title:"Phone", email_title:"Email", hours_title:"Working Hours", social_title:"Social Media",
        help_title:"Help", help_subtitle:"Contact us — we'll help!"
    },
    tr: {
        city:"📍 Tiflis", shops:"Mağazalar", help:"Yardım", contacts:"İletişim",
        search_placeholder:"Fayans ara...", search_btn:"🔍 Ara", favorites:"Favoriler", cart:"Sepet",
        tiles_nav:"Fayans", contacts_nav:"İletişim",
        hero_title:"Premium Fayans", hero_desc:"Eviniz için geniş seramik fayans seçimi. Gürcistan genelinde teslimat.", hero_btn:"Ürünleri gör ↓",
        popular_title:"🔥 Popüler Ürünler",
        product1_name:"Amazon Light Gray", product1_specs:"Ebat: 60×60 cm • Renk: açık gri • Mat", product1_desc:"Amazon Light Gray seramik fayans.",
        product2_name:"Luna", product2_specs:"Ebat: 30×30 cm • Renk: beyaz • Parlak", product2_desc:"Luna fayans.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ebat: 60×60 cm • Renk: koyu gri • Kaymaz", product3_desc:"Amazon Dark Gray fayans.",
        add_to_cart:"Sepete Ekle", details:"Detaylar", added:"Eklendi", add_to_fav:"Favorilere Ekle", in_fav:"Favorilerde",
        favorites_title:"Favoriler", cart_title:"Sepet", empty_fav:"Boş", remove:"Kaldır", total:"Toplam", no_results:"Hiçbir şey bulunamadı",
        footer_desc:"Gürcistan'da fayans", footer_address:"Tiflis, Rustaveli Cad., 45", footer_customers:"Müşteriler İçin",
        copyright:"© 2026 EURO A PLUS. Tüm hakları saklıdır.", back_to_shop:"Mağazaya dön", description_title:"Açıklama",
        page_title:"İletişim", page_subtitle:"Herhangi bir sorunuz için bize ulaşın",
        address_title:"Adres", phone_title:"Telefon", email_title:"E-posta", hours_title:"Çalışma Saatleri", social_title:"Sosyal Medya",
        help_title:"Yardım", help_subtitle:"Bizimle iletişime geçin — yardımcı olacağız!"
    },
    az: {
        city:"📍 Tbilisi", shops:"Mağazalar", help:"Kömək", contacts:"Əlaqə",
        search_placeholder:"Kafel axtar...", search_btn:"🔍 Axtar", favorites:"Sevimlilər", cart:"Səbət",
        tiles_nav:"Kafel", contacts_nav:"Əlaqə",
        hero_title:"Premium Kafel", hero_desc:"Eviniz üçün geniş keramik kafel seçimi. Bütün Gürcüstan üzrə çatdırılma.", hero_btn:"Məhsullara bax ↓",
        popular_title:"🔥 Populyar Məhsullar",
        product1_name:"Amazon Light Gray", product1_specs:"Ölçü: 60×60 sm • Rəng: açıq boz • Tutqun", product1_desc:"Amazon Light Gray keramik kafel.",
        product2_name:"Luna", product2_specs:"Ölçü: 30×30 sm • Rəng: ağ • Parlaq", product2_desc:"Luna kafel.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ölçü: 60×60 sm • Rəng: tünd boz • Sürüşməyən", product3_desc:"Amazon Dark Gray kafel.",
        add_to_cart:"Səbətə At", details:"Ətraflı", added:"Əlavə edildi", add_to_fav:"Sevimlilərə Əlavə Et", in_fav:"Sevimlilərdə",
        favorites_title:"Sevimlilər", cart_title:"Səbət", empty_fav:"Boşdur", remove:"Sil", total:"Cəmi", no_results:"Heç nə tapılmadı",
        footer_desc:"Gürcüstanda kafel", footer_address:"Tbilisi, Rustaveli pr., 45", footer_customers:"Alıcılar Üçün",
        copyright:"© 2026 EURO A PLUS. Bütün hüquqlar qorunur.", back_to_shop:"Mağazaya qayıt", description_title:"Təsvir",
        page_title:"Əlaqə", page_subtitle:"Hər hansı sualınız üçün bizimlə əlaqə saxlayın",
        address_title:"Ünvan", phone_title:"Telefon", email_title:"E-poçt", hours_title:"İş Saatları", social_title:"Sosial Media",
        help_title:"Kömək", help_subtitle:"Bizimlə əlaqə saxlayın — kömək edəcəyik!"
    },
    fa: {
        city:"📍 تفلیس", shops:"فروشگاه‌ها", help:"راهنما", contacts:"تماس",
        search_placeholder:"جستجوی کاشی...", search_btn:"🔍 جستجو", favorites:"علاقه‌مندی‌ها", cart:"سبد خرید",
        tiles_nav:"کاشی", contacts_nav:"تماس",
        hero_title:"کاشی درجه یک", hero_desc:"انتخاب گسترده کاشی و سرامیک برای خانه شما. ارسال به سراسر گرجستان.", hero_btn:"مشاهده محصولات ↓",
        popular_title:"🔥 محصولات محبوب",
        product1_name:"Amazon Light Gray", product1_specs:"ابعاد: ۶۰×۶۰ سانتی‌متر • رنگ: خاکستری روشن • مات", product1_desc:"کاشی Amazon Light Gray.",
        product2_name:"Luna", product2_specs:"ابعاد: ۳۰×۳۰ سانتی‌متر • رنگ: سفید • براق", product2_desc:"کاشی Luna.",
        product3_name:"Amazon Dark Gray", product3_specs:"ابعاد: ۶۰×۶۰ سانتی‌متر • رنگ: خاکستری تیره • ضد لغزش", product3_desc:"کاشی Amazon Dark Gray.",
        add_to_cart:"افزودن به سبد", details:"جزئیات", added:"اضافه شد", add_to_fav:"افزودن به علاقه‌مندی‌ها", in_fav:"در علاقه‌مندی‌ها",
        favorites_title:"علاقه‌مندی‌ها", cart_title:"سبد خرید", empty_fav:"خالی", remove:"حذف", total:"مجموع", no_results:"چیزی پیدا نشد",
        footer_desc:"کاشی در گرجستان", footer_address:"تفلیس، خیابان روستاولی، ۴۵", footer_customers:"برای مشتریان",
        copyright:"© 2026 EURO A PLUS. کلیه حقوق محفوظ است.", back_to_shop:"بازگشت به فروشگاه", description_title:"توضیحات",
        page_title:"تماس", page_subtitle:"برای هر سوالی با ما تماس بگیرید",
        address_title:"آدرس", phone_title:"تلفن", email_title:"ایمیل", hours_title:"ساعات کاری", social_title:"شبکه‌های اجتماعی",
        help_title:"راهنما", help_subtitle:"با ما تماس بگیرید — کمک می‌کنیم!"
    }
};

let favorites = JSON.parse(localStorage.getItem('euroFavorites') || '[]');
let cart = JSON.parse(localStorage.getItem('euroCart') || '[]');

function getLang() {
    let lang = localStorage.getItem('euroAplusLang');
    if (!lang) lang = 'ka';
    return lang;
}

function t(key) {
    let lang = getLang();
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations['ka'] && translations['ka'][key]) return translations['ka'][key];
    return key;
}

function saveState() {
    localStorage.setItem('euroFavorites', JSON.stringify(favorites));
    localStorage.setItem('euroCart', JSON.stringify(cart));
    updateBadges();
    updateHeartIcons();
}

function updateBadges() {
    const fb = document.getElementById('favBadge');
    const cb = document.getElementById('cartBadge');
    if (fb) fb.textContent = favorites.length || '';
    if (cb) cb.textContent = cart.length || '';
}

function updateHeartIcons() {
    document.querySelectorAll('.heart-icon').forEach(icon => {
        const id = parseInt(icon.getAttribute('data-id'));
        if (id) icon.textContent = favorites.includes(id) ? '❤️' : '🤍';
    });
}

function filterProducts(q) {
    q = q.toLowerCase().trim();
    let found = 0;
    document.querySelectorAll('.product-card[data-search]').forEach(card => {
        if (q === '' || card.getAttribute('data-search').toLowerCase().includes(q)) { card.style.display = ''; found++; }
        else { card.style.display = 'none'; }
    });
    const nr = document.getElementById('noResults');
    if (nr) nr.style.display = found === 0 ? 'block' : 'none';
}

function attachGlobalEvents() {
    const si = document.getElementById('searchInput'), sb = document.getElementById('searchBtn');
    if (si) { si.oninput = function() { filterProducts(this.value); }; si.onkeydown = function(e) { if (e.key === 'Enter') filterProducts(this.value); }; }
    if (sb) { sb.onclick = function() { filterProducts(document.getElementById('searchInput').value); }; }
    document.querySelectorAll('.heart-icon').forEach(icon => { icon.onclick = function(e) { e.stopPropagation(); e.preventDefault(); const id = parseInt(this.getAttribute('data-id')); favorites.includes(id) ? favorites = favorites.filter(f => f !== id) : favorites.push(id); saveState(); }; });
    document.querySelectorAll('.add-to-cart').forEach(btn => { btn.onclick = function(e) { e.stopPropagation(); e.preventDefault(); const id = parseInt(this.getAttribute('data-id')); if (!cart.includes(id)) { cart.push(id); saveState(); this.innerHTML = '✅ ' + t('added'); setTimeout(() => { this.innerHTML = '🛒 ' + t('add_to_cart'); }, 1200); } }; });
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.onclick = function() { switchLanguage(this.getAttribute('data-lang')); }; });
    const mc = document.getElementById('modalClose'); if (mc) mc.onclick = function() { document.getElementById('modalOverlay').classList.remove('active'); };
    const mo = document.getElementById('modalOverlay'); if (mo) mo.onclick = function(e) { if (e.target === this) this.classList.remove('active'); };
    const fi = document.getElementById('favIcon'); if (fi) fi.onclick = function() { openModal('fav'); };
    const ci = document.getElementById('cartIcon'); if (ci) ci.onclick = function() { openModal('cart'); };
    const hb = document.getElementById('hamburgerBtn'); if (hb) hb.onclick = function() { document.getElementById('mobileMenu').classList.toggle('active'); };
    document.querySelectorAll('#mobileMenu a').forEach(link => { link.onclick = function() { document.getElementById('mobileMenu').classList.remove('active'); }; });
}

function openModal(type) {
    const mt = document.getElementById('modalTitle'), mi = document.getElementById('modalItems'), mtl = document.getElementById('modalTotal');
    if (!mt || !mi) return;
    mt.textContent = type === 'fav' ? t('favorites_title') : t('cart_title'); mi.innerHTML = ''; if (mtl) mtl.style.display = 'none';
    const list = type === 'fav' ? favorites : cart;
    if (list.length === 0) { mi.innerHTML = '<div class="modal-empty">' + t('empty_fav') + '</div>'; }
    else { let total = 0; list.forEach(id => { const p = products[id]; if (!p) return; total += p.priceNum; const div = document.createElement('div'); div.className = 'modal-item'; div.innerHTML = '<img src="' + p.img + '" alt=""><div class="modal-item-info"><div class="modal-item-name">' + t(p.nameKey) + '</div><div class="modal-item-price">' + p.price + '</div></div><button class="modal-remove-btn" data-id="' + id + '" data-type="' + type + '">' + t('remove') + '</button>'; mi.appendChild(div); }); if (type === 'cart' && mtl) { mtl.style.display = 'block'; mtl.textContent = t('total') + ': ' + total + ' ₾'; } }
    mi.querySelectorAll('.modal-remove-btn').forEach(btn => { btn.onclick = function() { const id = parseInt(this.getAttribute('data-id')), rt = this.getAttribute('data-type'); if (rt === 'fav') favorites = favorites.filter(f => f !== id); else cart = cart.filter(c => c !== id); saveState(); openModal(rt); }; });
    document.getElementById('modalOverlay').classList.add('active');
}

function switchLanguage(lang) {
    localStorage.setItem('euroAplusLang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => { const key = el.getAttribute('data-lang-key'); if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key]; });
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => { const key = el.getAttribute('data-lang-key-placeholder'); if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key]; });
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.classList.remove('active'); if (btn.getAttribute('data-lang') === lang) btn.classList.add('active'); });
    document.documentElement.lang = lang;
    if (window.location.pathname.includes('product.html')) loadProductPage();
    if (window.location.pathname.includes('contacts.html')) loadContactsPage();
}

function loadProductPage() {
    const params = new URLSearchParams(window.location.search); const id = parseInt(params.get('id'));
    if (!id || !products[id]) return; const p = products[id];
    document.getElementById('productName').textContent = t(p.nameKey);
    document.getElementById('productSpecs').textContent = t(p.specsKey);
    document.getElementById('productPrice').textContent = p.price;
    document.getElementById('productOldPrice').textContent = p.oldPrice;
    document.getElementById('productDescription').textContent = t(p.descKey);
    document.getElementById('breadcrumbName').textContent = t(p.nameKey);
    document.title = 'EURO A PLUS — ' + t(p.nameKey);
    var img = document.getElementById('productImg'); if (img) { img.src = ''; img.src = p.img; }
    const fb = document.getElementById('addToFavBtn');
    if (fb) { fb.textContent = favorites.includes(id) ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav'); fb.onclick = function() { favorites.includes(id) ? favorites = favorites.filter(f => f !== id) : favorites.push(id); saveState(); fb.textContent = favorites.includes(id) ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav'); }; }
    const cb = document.getElementById('addToCartBtn');
    if (cb) { cb.onclick = function() { if (!cart.includes(id)) { cart.push(id); saveState(); cb.innerHTML = '✅ ' + t('added'); setTimeout(() => { cb.innerHTML = '🛒 ' + t('add_to_cart'); }, 1200); } }; }
}

function loadContactsPage() {
    const params = new URLSearchParams(window.location.search); const type = params.get('type');
    document.getElementById('pageTitle').textContent = type === 'help' ? t('help_title') : t('page_title');
    document.getElementById('pageSubtitle').textContent = type === 'help' ? t('help_subtitle') : t('page_subtitle');
    document.getElementById('address_title').textContent = t('address_title');
    document.getElementById('phone_title').textContent = t('phone_title');
    document.getElementById('email_title').textContent = t('email_title');
    document.getElementById('hours_title').textContent = t('hours_title');
    document.getElementById('social_title').textContent = t('social_title');
    document.title = 'EURO A PLUS — ' + t('page_title');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('euroAplusLang')) localStorage.setItem('euroAplusLang', 'ka');
    switchLanguage(getLang());
    updateBadges();
    updateHeartIcons();
    attachGlobalEvents();
    if (window.location.pathname.includes('product.html')) loadProductPage();
    if (window.location.pathname.includes('contacts.html')) loadContactsPage();
    document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', e => e.preventDefault()));
});