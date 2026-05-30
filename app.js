const products = {
    1: { nameKey: 'product1_name', specsKey: 'product1_specs', descKey: 'product1_desc', img: 'images/plitka.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    2: { nameKey: 'product2_name', specsKey: 'product2_specs', descKey: 'product2_desc', img: 'images/plitkae.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 },
    3: { nameKey: 'product3_name', specsKey: 'product3_specs', descKey: 'product3_desc', img: 'images/plitkaz.jpg', price: '45 ₾', oldPrice: '55 ₾', priceNum: 45 }
};

const translations = {
    ru: {
        city:"📍 Тбилиси", shops:"Магазины", help:"Помощь", contacts:"Контакты",
        search_placeholder:"Поиск плитки...", search_btn:"🔍 Найти", favorites:"Избранное", cart:"Корзина",
        tiles_nav:"Плитка", contacts_nav:"Контакты",
        hero_title:"Премиальная плитка", hero_desc:"Широкий выбор керамической плитки для вашего дома. Доставка по всей Грузии.", hero_btn:"Смотреть товары ↓",
        popular_title:"🔥 Популярные товары",
        product1_name:"Amazon Light Gray", product1_specs:"Размер: 60×120 см • Цвет: светло-серый • Матовая • Производство: Испания", product1_desc:"Элегантная матовая плитка Amazon Light Gray. Идеально подходит для гостиной, спальни и кухни. Устойчива к загрязнениям, легко моется. Придает интерьеру современный и стильный вид.",
        product2_name:"Luna", product2_specs:"Размер: 60×120 см • Цвет: белый • Глянцевая • Производство: Италия", product2_desc:"Роскошная глянцевая плитка Luna. Отражает свет, визуально расширяет пространство. Отлично подходит для ванной комнаты, прихожей и кухонного фартука.",
        product3_name:"Amazon Dark Gray", product3_specs:"Размер: 60×120 см • Цвет: тёмно-серый • Противоскользящая • Производство: Испания", product3_desc:"Стильная плитка Amazon Dark Gray с противоскользящим покрытием R10. Идеальный выбор для пола в прихожей, коридоре и на террасе. Прочная и износостойкая.",
        add_to_cart:"В корзину", details:"Подробнее", added:"Добавлено", add_to_fav:"В избранное", in_fav:"В избранном",
        favorites_title:"Избранное", cart_title:"Корзина", empty_fav:"Пусто", remove:"Удалить", total:"Итого", no_results:"😕 Ничего не найдено",
        footer_desc:"Плитка в Грузии", footer_address:"Тбилиси, ул. Надира Хошараули",
        copyright:"© 2026 EURO A PLUS. Все права защищены.", back_to_shop:"Вернуться в магазин", description_title:"Описание",
        page_title:"Контакты", page_subtitle:"Свяжитесь с нами по любому вопросу",
        address_title:"Адрес", phone_title:"Телефон", email_title:"E-mail", hours_title:"Часы работы", social_title:"Социальные сети",
        help_title:"Помощь", help_subtitle:"Свяжитесь с нами — мы поможем!",
        contact_address:"📍 Nadira Khosharauli Street, Tbilisi, Georgia",
        contact_phone:"+995 555 35 29 93",
        contact_phone2:"+995 555 65 43 21",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"Пн-Пт: 10:00–19:00",
        hours_sat:"Сб: 10:00–16:00",
        hours_sun:"Вс: выходной",
        tiktok:"TikTok"
    },
    ka: {
        city:"📍 თბილისი", shops:"მაღაზიები", help:"დახმარება", contacts:"კონტაქტები",
        search_placeholder:"ფილების ძებნა...", search_btn:"🔍 ძებნა", favorites:"რჩეულები", cart:"კალათა",
        tiles_nav:"ფილები", contacts_nav:"კონტაქტები",
        hero_title:"პრემიუმ ფილები", hero_desc:"კერამიკული ფილების ფართო არჩევანი თქვენი სახლისთვის. მიწოდება მთელ საქართველოში.", hero_btn:"პროდუქციის ნახვა ↓",
        popular_title:"🔥 პოპულარული პროდუქტები",
        product1_name:"Amazon Light Gray", product1_specs:"ზომა: 60×120 სმ • ფერი: ღია ნაცრისფერი • მქრქალი • წარმოება: ესპანეთი", product1_desc:"ელეგანტური მქრქალი ფილა Amazon Light Gray. იდეალურია მისაღები ოთახის, საძინებლისა და სამზარეულოსთვის.",
        product2_name:"Luna", product2_specs:"ზომა: 60×120 სმ • ფერი: თეთრი • პრიალა • წარმოება: იტალია", product2_desc:"მდიდრული პრიალა ფილა Luna. არეკლავს შუქს, აფართოებს სივრცეს.",
        product3_name:"Amazon Dark Gray", product3_specs:"ზომა: 60×120 სმ • ფერი: მუქი ნაცრისფერი • მოცურების საწინააღმდეგო • წარმოება: ესპანეთი", product3_desc:"სტილური ფილა Amazon Dark Gray მოცურების საწინააღმდეგო საფარით R10.",
        add_to_cart:"კალათაში", details:"დეტალურად", added:"დაემატა", add_to_fav:"რჩეულებში", in_fav:"რჩეულებშია",
        favorites_title:"რჩეულები", cart_title:"კალათა", empty_fav:"ცარიელია", remove:"წაშლა", total:"ჯამი", no_results:"😕 ვერაფერი მოიძებნა",
        footer_desc:"ფილები საქართველოში", footer_address:"თბილისი, ნადირა ხოშარაულის ქ.",
        copyright:"© 2026 EURO A PLUS. ყველა უფლება დაცულია.", back_to_shop:"მაღაზიაში დაბრუნება", description_title:"აღწერა",
        page_title:"კონტაქტები", page_subtitle:"დაგვიკავშირდით ნებისმიერი კითხვისთვის",
        address_title:"მისამართი", phone_title:"ტელეფონი", email_title:"ელ. ფოსტა", hours_title:"სამუშაო საათები", social_title:"სოციალური ქსელები",
        help_title:"დახმარება", help_subtitle:"დაგვიკავშირდით — ჩვენ დაგეხმარებით!",
        contact_address:"📍 ნადირა ხოშარაულის ქუჩა, თბილისი, საქართველო",
        contact_phone:"+995 555 35 29 93",
        contact_phone2:"+995 555 65 43 21",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"ორშ-პარ: 10:00–19:00",
        hours_sat:"შაბ: 10:00–16:00",
        hours_sun:"კვ: დასვენება",
        tiktok:"TikTok"
    },
    en: {
        city:"📍 Tbilisi", shops:"Stores", help:"Help", contacts:"Contacts",
        search_placeholder:"Search tiles...", search_btn:"🔍 Search", favorites:"Favorites", cart:"Cart",
        tiles_nav:"Tiles", contacts_nav:"Contacts",
        hero_title:"Premium Tiles", hero_desc:"Wide selection of ceramic tiles for your home. Delivery across Georgia.", hero_btn:"View products ↓",
        popular_title:"🔥 Popular Products",
        product1_name:"Amazon Light Gray", product1_specs:"Size: 60×120 cm • Color: light gray • Matte • Made in Spain", product1_desc:"Elegant matte Amazon Light Gray tile. Perfect for living room, bedroom and kitchen.",
        product2_name:"Luna", product2_specs:"Size: 60×120 cm • Color: white • Glossy • Made in Italy", product2_desc:"Luxurious glossy Luna tile. Reflects light and visually expands the space.",
        product3_name:"Amazon Dark Gray", product3_specs:"Size: 60×120 cm • Color: dark gray • Anti-slip • Made in Spain", product3_desc:"Stylish Amazon Dark Gray tile with anti-slip R10 coating.",
        add_to_cart:"Add to Cart", details:"Details", added:"Added", add_to_fav:"Add to Favorites", in_fav:"In Favorites",
        favorites_title:"Favorites", cart_title:"Cart", empty_fav:"Empty", remove:"Remove", total:"Total", no_results:"😕 Nothing found",
        footer_desc:"Tiles in Georgia", footer_address:"Tbilisi, Nadira Khosharauli St.",
        copyright:"© 2026 EURO A PLUS. All rights reserved.", back_to_shop:"Back to shop", description_title:"Description",
        page_title:"Contacts", page_subtitle:"Contact us with any questions",
        address_title:"Address", phone_title:"Phone", email_title:"Email", hours_title:"Working Hours", social_title:"Social Media",
        help_title:"Help", help_subtitle:"Contact us — we'll help!",
        contact_address:"📍 Nadira Khosharauli Street, Tbilisi, Georgia",
        contact_phone:"+995 555 35 29 93",
        contact_phone2:"+995 555 65 43 21",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"Mon-Fri: 10:00–19:00",
        hours_sat:"Sat: 10:00–16:00",
        hours_sun:"Sun: Closed",
        tiktok:"TikTok"
    },
    tr: {
        city:"📍 Tiflis", shops:"Mağazalar", help:"Yardım", contacts:"İletişim",
        search_placeholder:"Fayans ara...", search_btn:"🔍 Ara", favorites:"Favoriler", cart:"Sepet",
        tiles_nav:"Fayans", contacts_nav:"İletişim",
        hero_title:"Premium Fayans", hero_desc:"Eviniz için geniş seramik fayans seçimi. Gürcistan genelinde teslimat.", hero_btn:"Ürünleri gör ↓",
        popular_title:"🔥 Popüler Ürünler",
        product1_name:"Amazon Light Gray", product1_specs:"Ebat: 60×120 cm • Renk: açık gri • Mat • Üretim: İspanya", product1_desc:"Şık mat Amazon Light Gray fayans. Oturma odası, yatak odası ve mutfak için ideal.",
        product2_name:"Luna", product2_specs:"Ebat: 60×120 cm • Renk: beyaz • Parlak • Üretim: İtalya", product2_desc:"Lüks parlak Luna fayans. Işığı yansıtır, alanı görsel olarak genişletir.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ebat: 60×120 cm • Renk: koyu gri • Kaymaz • Üretim: İspanya", product3_desc:"Kaymaz R10 kaplamalı şık Amazon Dark Gray fayans.",
        add_to_cart:"Sepete Ekle", details:"Detaylar", added:"Eklendi", add_to_fav:"Favorilere Ekle", in_fav:"Favorilerde",
        favorites_title:"Favoriler", cart_title:"Sepet", empty_fav:"Boş", remove:"Kaldır", total:"Toplam", no_results:"😕 Hiçbir şey bulunamadı",
        footer_desc:"Gürcistan'da fayans", footer_address:"Tiflis, Nadira Hoşarauli Caddesi",
        copyright:"© 2026 EURO A PLUS. Tüm hakları saklıdır.", back_to_shop:"Mağazaya dön", description_title:"Açıklama",
        page_title:"İletişim", page_subtitle:"Herhangi bir sorunuz için bize ulaşın",
        address_title:"Adres", phone_title:"Telefon", email_title:"E-posta", hours_title:"Çalışma Saatleri", social_title:"Sosyal Medya",
        help_title:"Yardım", help_subtitle:"Bizimle iletişime geçin — yardımcı olacağız!",
        contact_address:"📍 Nadira Hoşarauli Caddesi, Tiflis, Gürcistan",
        contact_phone:"+995 555 35 29 93",
        contact_phone2:"+995 555 65 43 21",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"Pzt-Cum: 10:00–19:00",
        hours_sat:"Cmt: 10:00–16:00",
        hours_sun:"Paz: Kapalı",
        tiktok:"TikTok"
    },
    az: {
        city:"📍 Tbilisi", shops:"Mağazalar", help:"Kömək", contacts:"Əlaqə",
        search_placeholder:"Kafel axtar...", search_btn:"🔍 Axtar", favorites:"Sevimlilər", cart:"Səbət",
        tiles_nav:"Kafel", contacts_nav:"Əlaqə",
        hero_title:"Premium Kafel", hero_desc:"Eviniz üçün geniş keramik kafel seçimi. Bütün Gürcüstan üzrə çatdırılma.", hero_btn:"Məhsullara bax ↓",
        popular_title:"🔥 Populyar Məhsullar",
        product1_name:"Amazon Light Gray", product1_specs:"Ölçü: 60×120 sm • Rəng: açıq boz • Tutqun • İstehsal: İspaniya", product1_desc:"Zərif tutqun Amazon Light Gray kafel. Qonaq otağı, yataq otağı və mətbəx üçün ideal.",
        product2_name:"Luna", product2_specs:"Ölçü: 60×120 sm • Rəng: ağ • Parlaq • İstehsal: İtaliya", product2_desc:"Dəbdəbəli parlaq Luna kafel. İşığı əks etdirir, məkanı vizual olaraq genişləndirir.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ölçü: 60×120 sm • Rəng: tünd boz • Sürüşməyən • İstehsal: İspaniya", product3_desc:"Sürüşməyən R10 örtüklü stil Amazon Dark Gray kafel.",
        add_to_cart:"Səbətə At", details:"Ətraflı", added:"Əlavə edildi", add_to_fav:"Sevimlilərə Əlavə Et", in_fav:"Sevimlilərdə",
        favorites_title:"Sevimlilər", cart_title:"Səbət", empty_fav:"Boşdur", remove:"Sil", total:"Cəmi", no_results:"😕 Heç nə tapılmadı",
        footer_desc:"Gürcüstanda kafel", footer_address:"Tbilisi, Nadira Xoşarauli küç.",
        copyright:"© 2026 EURO A PLUS. Bütün hüquqlar qorunur.", back_to_shop:"Mağazaya qayıt", description_title:"Təsvir",
        page_title:"Əlaqə", page_subtitle:"Hər hansı sualınız üçün bizimlə əlaqə saxlayın",
        address_title:"Ünvan", phone_title:"Telefon", email_title:"E-poçt", hours_title:"İş Saatları", social_title:"Sosial Media",
        help_title:"Kömək", help_subtitle:"Bizimlə əlaqə saxlayın — kömək edəcəyik!",
        contact_address:"📍 Nadira Xoşarauli küçəsi, Tbilisi, Gürcüstan",
        contact_phone:"+995 555 35 29 93",
        contact_phone2:"+995 555 65 43 21",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"B.e.-Cüm: 10:00–19:00",
        hours_sat:"Şən: 10:00–16:00",
        hours_sun:"Baz: Bağlı",
        tiktok:"TikTok"
    },
    fa: {
        city:"📍 تفلیس", shops:"فروشگاه‌ها", help:"راهنما", contacts:"تماس",
        search_placeholder:"جستجوی کاشی...", search_btn:"🔍 جستجو", favorites:"علاقه‌مندی‌ها", cart:"سبد خرید",
        tiles_nav:"کاشی", contacts_nav:"تماس",
        hero_title:"کاشی درجه یک", hero_desc:"انتخاب گسترده کاشی و سرامیک برای خانه شما. ارسال به سراسر گرجستان.", hero_btn:"مشاهده محصولات ↓",
        popular_title:"🔥 محصولات محبوب",
        product1_name:"Amazon Light Gray", product1_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: خاکستری روشن • مات • ساخت: اسپانیا", product1_desc:"کاشی مات شیک Amazon Light Gray. ایده‌آل برای اتاق نشیمن، اتاق خواب و آشپزخانه.",
        product2_name:"Luna", product2_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: سفید • براق • ساخت: ایتالیا", product2_desc:"کاشی براق لوکس Luna. نور را منعکس می‌کند و فضا را بزرگتر نشان می‌دهد.",
        product3_name:"Amazon Dark Gray", product3_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: خاکستری تیره • ضد لغزش • ساخت: اسپانیا", product3_desc:"کاشی شیک Amazon Dark Gray با پوشش ضد لغزش R10.",
        add_to_cart:"افزودن به سبد", details:"جزئیات", added:"اضافه شد", add_to_fav:"افزودن به علاقه‌مندی‌ها", in_fav:"در علاقه‌مندی‌ها",
        favorites_title:"علاقه‌مندی‌ها", cart_title:"سبد خرید", empty_fav:"خالی", remove:"حذف", total:"مجموع", no_results:"😕 چیزی پیدا نشد",
        footer_desc:"کاشی در گرجستان", footer_address:"تفلیس، خیابان نادیرا خوشاراولی",
        copyright:"© 2026 EURO A PLUS. کلیه حقوق محفوظ است.", back_to_shop:"بازگشت به فروشگاه", description_title:"توضیحات",
        page_title:"تماس", page_subtitle:"برای هر سوالی با ما تماس بگیرید",
        address_title:"آدرس", phone_title:"تلفن", email_title:"ایمیل", hours_title:"ساعات کاری", social_title:"شبکه‌های اجتماعی",
        help_title:"راهنما", help_subtitle:"با ما تماس بگیرید — کمک می‌کنیم!",
        contact_address:"📍 خیابان نادیرا خوشاراولی، تفلیس، گرجستان",
        contact_phone:"+۹۹۵ ۵۵۵ ۳۵ ۲۹ ۹۳",
        contact_phone2:"+۹۹۵ ۵۵۵ ۶۵ ۴۳ ۲۱",
        contact_email:"info@euroaplus.ge",
        hours_mon_fri:"دوشنبه-جمعه: ۱۰:۰۰–۱۹:۰۰",
        hours_sat:"شنبه: ۱۰:۰۰–۱۶:۰۰",
        hours_sun:"یکشنبه: تعطیل",
        tiktok:"تیک‌تاک"
    }
};

let favorites = JSON.parse(localStorage.getItem('euroFavorites') || '[]');
let cart = JSON.parse(localStorage.getItem('euroCart') || '[]');

function getLang() {
    let lang = localStorage.getItem('euroAplusLang');
    if (!lang) lang = 'ru';
    return lang;
}

function t(key) {
    let lang = getLang();
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations['ru'] && translations['ru'][key]) return translations['ru'][key];
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
    document.querySelectorAll('.product-card').forEach(card => {
        const searchText = card.getAttribute('data-search') || '';
        if (q === '' || searchText.toLowerCase().includes(q)) {
            card.style.display = '';
            found++;
        } else {
            card.style.display = 'none';
        }
    });
    const nr = document.getElementById('noResults');
    if (nr) {
        if (found === 0 && q !== '') {
            nr.style.display = 'block';
            nr.textContent = t('no_results');
        } else {
            nr.style.display = 'none';
        }
    }
}

function openModal(type) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const itemsDiv = document.getElementById('modalItems');
    const totalDiv = document.getElementById('modalTotal');
    
    if (!modal || !title || !itemsDiv) return;
    
    title.textContent = type === 'fav' ? t('favorites_title') : t('cart_title');
    itemsDiv.innerHTML = '';
    if (totalDiv) totalDiv.style.display = 'none';
    
    const list = type === 'fav' ? favorites : cart;
    
    if (list.length === 0) {
        itemsDiv.innerHTML = '<div class="modal-empty">' + t('empty_fav') + '</div>';
    } else {
        let total = 0;
        list.forEach(id => {
            const p = products[id];
            if (!p) return;
            total += p.priceNum;
            const div = document.createElement('div');
            div.className = 'modal-item';
            div.innerHTML = `
                <img src="${p.img}" alt="">
                <div class="modal-item-info">
                    <div class="modal-item-name">${t(p.nameKey)}</div>
                    <div class="modal-item-price">${p.price}</div>
                </div>
                <button class="modal-remove-btn" data-id="${id}" data-type="${type}">${t('remove')}</button>
            `;
            itemsDiv.appendChild(div);
        });
        if (type === 'cart' && totalDiv) {
            totalDiv.style.display = 'block';
            totalDiv.textContent = t('total') + ': ' + total + ' ₾';
        }
    }
    
    itemsDiv.querySelectorAll('.modal-remove-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(this.getAttribute('data-id'));
            const rt = this.getAttribute('data-type');
            if (rt === 'fav') {
                favorites = favorites.filter(f => f !== id);
            } else {
                cart = cart.filter(c => c !== id);
            }
            saveState();
            openModal(rt);
        };
    });
    
    modal.classList.add('active');
}

function switchLanguage(lang) {
    localStorage.setItem('euroAplusLang', lang);
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    document.documentElement.lang = lang;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (window.location.pathname.includes('product.html') && productId) {
        loadProductPage();
    }
    if (window.location.pathname.includes('contacts.html')) {
        loadContactsPage();
    }
}

function loadProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id || !products[id]) return;
    
    const p = products[id];
    const nameEl = document.getElementById('productName');
    const specsEl = document.getElementById('productSpecs');
    const priceEl = document.getElementById('productPrice');
    const oldPriceEl = document.getElementById('productOldPrice');
    const descEl = document.getElementById('productDescription');
    const breadcrumbEl = document.getElementById('breadcrumbName');
    const imgEl = document.getElementById('productImg');
    
    if (nameEl) nameEl.textContent = t(p.nameKey);
    if (specsEl) specsEl.textContent = t(p.specsKey);
    if (priceEl) priceEl.textContent = p.price;
    if (oldPriceEl) oldPriceEl.textContent = p.oldPrice;
    if (descEl) descEl.textContent = t(p.descKey);
    if (breadcrumbEl) breadcrumbEl.textContent = t(p.nameKey);
    if (imgEl) imgEl.src = p.img;
    
    document.title = 'EURO A PLUS — ' + t(p.nameKey);
    
    const favBtn = document.getElementById('addToFavBtn');
    if (favBtn) {
        const isFav = favorites.includes(id);
        favBtn.innerHTML = isFav ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav');
        favBtn.onclick = function() {
            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
            } else {
                favorites.push(id);
            }
            saveState();
            favBtn.innerHTML = favorites.includes(id) ? '❤️ ' + t('in_fav') : '🤍 ' + t('add_to_fav');
        };
    }
    
    const cartBtn = document.getElementById('addToCartBtn');
    if (cartBtn) {
        cartBtn.onclick = function() {
            if (!cart.includes(id)) {
                cart.push(id);
                saveState();
                cartBtn.innerHTML = '✅ ' + t('added');
                setTimeout(() => {
                    cartBtn.innerHTML = '🛒 ' + t('add_to_cart');
                }, 1200);
            }
        };
    }
}

function loadContactsPage() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    
    const titleEl = document.getElementById('pageTitle');
    const subtitleEl = document.getElementById('pageSubtitle');
    const addressTitle = document.getElementById('address_title');
    const phoneTitle = document.getElementById('phone_title');
    const emailTitle = document.getElementById('email_title');
    const hoursTitle = document.getElementById('hours_title');
    const socialTitle = document.getElementById('social_title');
    const contactAddress = document.getElementById('contact_address');
    const contactPhone1 = document.getElementById('contact_phone1');
    const contactPhone2 = document.getElementById('contact_phone2');
    const contactEmail = document.getElementById('contact_email');
    const hoursMonFri = document.getElementById('hours_mon_fri');
    const hoursSat = document.getElementById('hours_sat');
    const hoursSun = document.getElementById('hours_sun');
    const tiktokText = document.getElementById('tiktok_text');
    
    if (titleEl) titleEl.textContent = type === 'help' ? t('help_title') : t('page_title');
    if (subtitleEl) subtitleEl.textContent = type === 'help' ? t('help_subtitle') : t('page_subtitle');
    if (addressTitle) addressTitle.textContent = t('address_title');
    if (phoneTitle) phoneTitle.textContent = t('phone_title');
    if (emailTitle) emailTitle.textContent = t('email_title');
    if (hoursTitle) hoursTitle.textContent = t('hours_title');
    if (socialTitle) socialTitle.textContent = t('social_title');
    if (contactAddress) contactAddress.textContent = t('contact_address');
    if (contactPhone1) contactPhone1.textContent = t('contact_phone');
    if (contactPhone2) contactPhone2.textContent = t('contact_phone2');
    if (contactEmail) contactEmail.textContent = t('contact_email');
    if (hoursMonFri) hoursMonFri.textContent = t('hours_mon_fri');
    if (hoursSat) hoursSat.textContent = t('hours_sat');
    if (hoursSun) hoursSun.textContent = t('hours_sun');
    if (tiktokText) tiktokText.textContent = t('tiktok');
    
    document.title = 'EURO A PLUS — ' + (type === 'help' ? t('help_title') : t('page_title'));
}

function attachGlobalEvents() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.oninput = function() { filterProducts(this.value); };
        searchInput.onkeydown = function(e) { if (e.key === 'Enter') filterProducts(this.value); };
    }
    if (searchBtn) {
        searchBtn.onclick = function() { 
            const input = document.getElementById('searchInput');
            if (input) filterProducts(input.value);
        };
    }
    
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
            } else {
                favorites.push(id);
            }
            saveState();
        };
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            if (!cart.includes(id)) {
                cart.push(id);
                saveState();
                const originalText = this.innerHTML;
                this.innerHTML = '✅ ' + t('added');
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 1200);
            }
        };
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = function() {
            switchLanguage(this.getAttribute('data-lang'));
        };
    });
    
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalClose) {
        modalClose.onclick = function() {
            if (modalOverlay) modalOverlay.classList.remove('active');
        };
    }
    if (modalOverlay) {
        modalOverlay.onclick = function(e) {
            if (e.target === this) this.classList.remove('active');
        };
    }
    
    const favIcon = document.getElementById('favIcon');
    const cartIcon = document.getElementById('cartIcon');
    if (favIcon) favIcon.onclick = function() { openModal('fav'); };
    if (cartIcon) cartIcon.onclick = function() { openModal('cart'); };
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.onclick = function() {
            mobileMenu.classList.toggle('active');
        };
    }
    
    document.querySelectorAll('#mobileMenu a, .nav-links a').forEach(link => {
        link.onclick = function() {
            if (mobileMenu) mobileMenu.classList.remove('active');
        };
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('euroAplusLang')) {
        localStorage.setItem('euroAplusLang', 'ru');
    }
    
    switchLanguage(getLang());
    updateBadges();
    updateHeartIcons();
    attachGlobalEvents();
    
    if (window.location.pathname.includes('product.html')) {
        loadProductPage();
    }
    if (window.location.pathname.includes('contacts.html')) {
        loadContactsPage();
    }
    
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });
});