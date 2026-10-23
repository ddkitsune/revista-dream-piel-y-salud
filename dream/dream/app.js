// ==========================================================================
// REVISTA DREAM PIEL Y SALUD - CORE INTERACTIVE ENGINE
// Estado global, navegación unificada, carrito de compras y reproductores
// ==========================================================================

const DreamState = {
    cart: JSON.parse(localStorage.getItem('dream_cart') || '[]'),
    user: JSON.parse(localStorage.getItem('dream_user') || 'null'),
    savedArticles: JSON.parse(localStorage.getItem('dream_saved_articles') || '[]'),
    activePodcast: {
        title: "Episodio 18: La Verdad Detrás de los Exosomas y el Envejecimiento Celular",
        guest: "Dra. Marcela Cadavid & Dirección Médica Dream",
        duration: 2550, // segundos
        currentTime: 255,
        isPlaying: false
    }
};

// Inicializador
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMiniCart();
    initAudioPlayers();
    initCaseSliders();
    initTabs();
});

// 1. Navegación e indicadores
function initNavigation() {
    // Mobile menu toggle si existe
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Actualizar contadores de carrito en cualquier página
    updateCartBadges();
}

// 2. Lógica del Carrito de Compras (Local)
function updateCartBadges() {
    const totalCount = DreamState.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(b => {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'flex' : 'none';
    });
}

function addToCart(product) {
    const existing = DreamState.cart.find(p => p.id === product.id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        DreamState.cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('dream_cart', JSON.stringify(DreamState.cart));
    updateCartBadges();
    showNotification(`Añadido a la cesta: ${product.name}`);
}

function removeFromCart(productId) {
    DreamState.cart = DreamState.cart.filter(p => p.id !== productId);
    localStorage.setItem('dream_cart', JSON.stringify(DreamState.cart));
    updateCartBadges();
    if (typeof renderCartPage === 'function') renderCartPage();
}

function updateCartQty(productId, delta) {
    const item = DreamState.cart.find(p => p.id === productId);
    if (!item) return;
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    localStorage.setItem('dream_cart', JSON.stringify(DreamState.cart));
    updateCartBadges();
    if (typeof renderCartPage === 'function') renderCartPage();
}

// 3. Mini-notificación toast editorial
function showNotification(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#141313] text-white px-5 py-3 rounded-lg shadow-xl text-xs font-medium tracking-wide flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 border border-[#ede7e5]/20';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-[#b86553]"></span><span>${msg}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    });
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 4. Reproductores de Audio y Podcast
function initAudioPlayers() {
    const playBtns = document.querySelectorAll('[data-podcast-toggle]');
    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DreamState.activePodcast.isPlaying = !DreamState.activePodcast.isPlaying;
            const isPlay = DreamState.activePodcast.isPlaying;
            
            // Toggle icon
            btn.innerHTML = isPlay 
                ? `<svg class="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
                : `<svg class="w-6 h-6 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

            const statusLabel = document.querySelector('[data-podcast-status]');
            if (statusLabel) {
                statusLabel.textContent = isPlay ? 'Reproduciendo en directo...' : 'En pausa';
            }
        });
    });
}

// 5. Slider interactivo de Casos "Antes y Después"
function initCaseSliders() {
    const sliders = document.querySelectorAll('.before-after-slider');
    sliders.forEach(container => {
        const afterImg = container.querySelector('.after-image');
        const handle = container.querySelector('.slider-handle');
        const range = container.querySelector('input[type="range"]');
        if (!afterImg || !range) return;

        range.addEventListener('input', (e) => {
            const val = e.target.value;
            afterImg.style.clipPath = `polygon(${val}% 0, 100% 0, 100% 100%, ${val}% 100%)`;
            if (handle) handle.style.left = `${val}%`;
        });
    });
}

// 6. Tabs dinámicos
function initTabs() {
    const tabGroups = document.querySelectorAll('[data-tabs-group]');
    tabGroups.forEach(group => {
        const triggers = group.querySelectorAll('[data-tab-trigger]');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const target = trigger.getAttribute('data-tab-trigger');
                triggers.forEach(t => t.classList.remove('active', 'border-[#b86553]', 'text-[#b86553]', 'bg-[#b86553]', 'text-white'));
                trigger.classList.add('active', 'border-[#b86553]', 'text-[#b86553]');
                
                const contents = group.querySelectorAll('[data-tab-content]');
                contents.forEach(c => {
                    if (c.getAttribute('data-tab-content') === target) {
                        c.classList.remove('hidden');
                    } else {
                        c.classList.add('hidden');
                    }
                });
            });
        });
    });
}

function initMiniCart() {
    // Si el carrito está vacío en la primera visita, precargar 2 productos demo del marketplace
    if (!DreamState.cart || DreamState.cart.length === 0) {
        DreamState.cart = [
            {
                id: 'prod-ferulico',
                name: 'Sérum Liposomal de Ácido Ferúlico 15% + Pantenol',
                lab: 'DERMALAB DREAM',
                price: 68.00,
                quantity: 1,
                image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=300'
            },
            {
                id: 'prod-solar',
                name: 'Fotoprotector Mineral Fluido SPF 50+',
                lab: 'FOTOFINDER PROTECT',
                price: 42.00,
                quantity: 2,
                image: 'https://images.pexels.com/photos/4005041/pexels-photo-4005041.jpeg?auto=compress&cs=tinysrgb&w=300'
            }
        ];
        localStorage.setItem('dream_cart', JSON.stringify(DreamState.cart));
        updateCartBadges();
    }
}
