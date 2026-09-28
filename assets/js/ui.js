/* ============================================
   UI.JS — Utilidades de UI compartidas
   Navbar, Footer, Toast, Modales, Helpers
   ============================================ */

const UI = {
  // Determinar la ruta base según la ubicación de la página
  basePath: window.location.pathname.includes("/pages/") ? "../" : "./",

  // Formatear precio en CLP
  formatCLP(amount) {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0
    }).format(amount);
  },

  // Formatear fecha
  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-CL", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  },

  // Formatear fecha corta
  formatDateShort(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-CL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  },

  // Generar SVG de estrella (filled/empty/half)
  renderStars(rating = 0, size = 14) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    let html = '<span class="stars" style="font-size:' + size + 'px">';
    for (let i = 0; i < fullStars; i++) html += this._starSvg(true);
    if (hasHalf) html += this._starSvg("half");
    for (let i = 0; i < emptyStars; i++) html += this._starSvg(false);
    html += "</span>";
    return html;
  },

  _starSvg(filled) {
    if (filled === "half") {
      return '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#d4d4d4"/></linearGradient></defs><path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    const fill = filled ? "currentColor" : "#d4d4d4";
    return '<svg class="star" viewBox="0 0 24 24" fill="' + fill + '"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  },

  // Card de producto HTML
  productCardHTML(product) {
    const badge = product.isNew
      ? '<span class="product-badge new">Nuevo</span>'
      : (product.oldPrice ? '<span class="product-badge sale">Oferta</span>' : "");
    const priceHTML = product.oldPrice
      ? '<span class="price-current">' + this.formatCLP(product.price) + '</span><span class="price-old">' + this.formatCLP(product.oldPrice) + '</span>'
      : '<span class="price-current">' + this.formatCLP(product.price) + '</span>';
    return `
      <a href="${this.basePath}pages/detalle-producto.html?id=${product.id}" class="product-card">
        <div class="product-image-wrapper">
          ${badge}
          <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-category">${this._categoryName(product.category)}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            ${this.renderStars(product.rating, 12)}
            <span>(${product.reviewsCount})</span>
          </div>
          <div class="product-price">${priceHTML}</div>
        </div>
      </a>
    `;
  },

  _categoryName(id) {
    const c = CATEGORIES.find(c => c.id === id);
    return c ? c.name : id;
  },

  // === NAVBAR ===
  mountNavbar(activePath = "") {
    const user = Auth.getCurrentUser();
    const cartCount = Cart.count();
    const navbarHTML = `
      <div class="navbar-top">
        Envío gratis sobre $50.000 · Despacho 24-48h en Santiago · Hasta 6 cuotas sin interés
      </div>
      <nav class="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <button id="mobileMenuBtn" class="md:hidden text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
            <a href="${this.basePath}index.html" class="text-2xl font-serif font-bold text-primary tracking-tight">
              ATELIER<span class="text-accent">.</span>
            </a>
            <div class="hidden md:flex items-center gap-8">
              <a href="${this.basePath}index.html" class="nav-link ${activePath === 'home' ? 'active' : ''}">Inicio</a>
              <a href="${this.basePath}pages/productos.html" class="nav-link ${activePath === 'productos' ? 'active' : ''}">Productos</a>
              <a href="${this.basePath}pages/nosotros.html" class="nav-link ${activePath === 'nosotros' ? 'active' : ''}">Nosotros</a>
              <a href="${this.basePath}pages/contacto.html" class="nav-link ${activePath === 'contacto' ? 'active' : ''}">Contacto</a>
              <a href="${this.basePath}pages/faq.html" class="nav-link ${activePath === 'faq' ? 'active' : ''}">FAQ</a>
            </div>
            <div class="flex items-center gap-4">
              <a href="${this.basePath}pages/seguimiento.html" class="text-primary hover:text-accent transition" title="Seguimiento">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </a>
              <a href="${this.basePath}pages/carrito.html" class="text-primary hover:text-accent transition relative" title="Carrito">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
                ${cartCount > 0 ? '<span class="cart-badge">' + cartCount + '</span>' : ''}
              </a>
              <div class="relative" id="userDropdownWrapper">
                <button id="userDropdownBtn" class="text-primary hover:text-accent transition">
                  <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>
                </button>
                <div id="userDropdown" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-border">
                  ${user ? this._userDropdownLoggedIn(user) : this._userDropdownLoggedOut()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mobileMenu" class="hidden md:hidden border-t border-border bg-white">
          <div class="px-4 py-3 flex flex-col gap-3">
            <a href="${this.basePath}index.html" class="nav-link">Inicio</a>
            <a href="${this.basePath}pages/productos.html" class="nav-link">Productos</a>
            <a href="${this.basePath}pages/nosotros.html" class="nav-link">Nosotros</a>
            <a href="${this.basePath}pages/contacto.html" class="nav-link">Contacto</a>
            <a href="${this.basePath}pages/faq.html" class="nav-link">FAQ</a>
            <a href="${this.basePath}pages/seguimiento.html" class="nav-link">Seguimiento</a>
          </div>
        </div>
      </nav>
    `;
    const target = document.getElementById("navbar-root");
    if (target) target.innerHTML = navbarHTML;

    // Listeners
    setTimeout(() => {
      const mobileBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
      }
      const userBtn = document.getElementById("userDropdownBtn");
      const userDrop = document.getElementById("userDropdown");
      if (userBtn && userDrop) {
        userBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          userDrop.classList.toggle("hidden");
        });
        document.addEventListener("click", () => userDrop.classList.add("hidden"));
      }
      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          Auth.logout();
          this.toast("Sesión cerrada", "info");
          setTimeout(() => location.reload(), 600);
        });
      }
    }, 50);
  },

  _userDropdownLoggedIn(user) {
    return `
      <div class="px-4 py-3 border-b border-border">
        <div class="font-medium text-sm">${user.name}</div>
        <div class="text-xs text-text-light truncate">${user.email}</div>
      </div>
      <a href="${this.basePath}pages/perfil.html" class="block px-4 py-2 text-sm hover:bg-cream">Mi perfil</a>
      <a href="${this.basePath}pages/perfil.html#pedidos" class="block px-4 py-2 text-sm hover:bg-cream">Mis pedidos</a>
      <div class="border-t border-border my-1"></div>
      <button id="logoutBtn" class="block w-full text-left px-4 py-2 text-sm text-error hover:bg-cream">Cerrar sesión</button>
    `;
  },

  _userDropdownLoggedOut() {
    return `
      <a href="${this.basePath}pages/login.html" class="block px-4 py-2 text-sm hover:bg-cream">Iniciar sesión</a>
      <a href="${this.basePath}pages/registro.html" class="block px-4 py-2 text-sm hover:bg-cream">Crear cuenta</a>
    `;
  },

  // === FOOTER ===
  mountFooter() {
    const footerHTML = `
      <footer class="footer">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4>Atelier Boutique</h4>
              <p class="text-sm leading-relaxed mb-4">${STORE.description}</p>
              <div class="flex gap-3 mt-4">
                <a href="${STORE.social.instagram}" target="_blank" class="text-white hover:text-accent" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2 0 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58 0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2 0-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.16 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.68.27.27 2.68.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.61 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.36-.2 6.78-2.61 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.61-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a href="${STORE.social.facebook}" target="_blank" class="text-white hover:text-accent" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.23 2.69.23v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z"/></svg>
                </a>
                <a href="${STORE.social.tiktok}" target="_blank" class="text-white hover:text-accent" aria-label="TikTok">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Tienda</h4>
              <a href="${this.basePath}index.html">Inicio</a>
              <a href="${this.basePath}pages/productos.html">Catálogo</a>
              <a href="${this.basePath}pages/nosotros.html">Nosotros</a>
              <a href="${this.basePath}pages/contacto.html">Contacto</a>
            </div>
            <div>
              <h4>Ayuda</h4>
              <a href="${this.basePath}pages/faq.html">Preguntas frecuentes</a>
              <a href="${this.basePath}pages/seguimiento.html">Seguimiento de envío</a>
              <a href="${this.basePath}pages/perfil.html">Mi cuenta</a>
              <a href="#">Cambios y devoluciones</a>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p class="text-sm mb-3">Recibe novedades y descuentos exclusivos.</p>
              <form id="newsletterForm" class="flex gap-2">
                <input type="email" required placeholder="Tu email" class="input flex-1 bg-primary-light text-white border-0 placeholder-gray-400">
                <button type="submit" class="btn btn-accent btn-sm">Suscribir</button>
              </form>
              <div class="mt-6 space-y-1 text-xs text-gray-400">
                <p>${STORE.address}</p>
                <p>${STORE.phone}</p>
              </div>
            </div>
          </div>
          <div class="footer-bottom flex flex-col md:flex-row justify-between items-center gap-2">
            <p>&copy; 2026 ${STORE.name}. Todos los derechos reservados.</p>
            <div class="flex gap-4">
              <a href="${this.basePath}pages/politicas-privacidad.html" class="hover:text-accent">Políticas de privacidad</a>
              <a href="${this.basePath}pages/terminos.html" class="hover:text-accent">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    const target = document.getElementById("footer-root");
    if (target) target.innerHTML = footerHTML;
    setTimeout(() => {
      const form = document.getElementById("newsletterForm");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.toast("¡Suscripción exitosa! Revisa tu email.", "success");
          form.reset();
        });
      }
    }, 50);
  },

  // === TOAST ===
  toast(message, type = "info", duration = 3000) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const icons = {
      success: '<svg width="20" height="20" fill="none" stroke="#2d6a4f" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
      error: '<svg width="20" height="20" fill="none" stroke="#c1121f" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
      info: '<svg width="20" height="20" fill="none" stroke="#c9a961" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>'
    };
    const toast = document.createElement("div");
    toast.className = "toast " + type;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("removing");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // === MODAL ===
  showModal(html) {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop active";
    backdrop.innerHTML = `<div class="modal">${html}</div>`;
    document.body.appendChild(backdrop);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) this.closeModal();
    });
    return backdrop;
  },

  closeModal() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.remove());
  },

  confirmDialog(message, title = "Confirmar") {
    return new Promise((resolve) => {
      const modal = this.showModal(`
        <h3 class="font-serif text-xl mb-3">${title}</h3>
        <p class="text-text-light mb-6">${message}</p>
        <div class="flex gap-3 justify-end">
          <button id="cancelBtn" class="btn btn-outline btn-sm">Cancelar</button>
          <button id="okBtn" class="btn btn-primary btn-sm">Confirmar</button>
        </div>
      `);
      modal.querySelector("#okBtn").addEventListener("click", () => { this.closeModal(); resolve(true); });
      modal.querySelector("#cancelBtn").addEventListener("click", () => { this.closeModal(); resolve(false); });
    });
  },

  // === AUTH GUARD ===
  requireAuth(redirectAfterLogin = null) {
    const user = Auth.getCurrentUser();
    if (!user) {
      this.toast("Debes iniciar sesión para continuar", "info");
      const next = redirectAfterLogin ? "?next=" + encodeURIComponent(redirectAfterLogin) : "";
      setTimeout(() => location.href = `${this.basePath}pages/login.html${next}`, 800);
      return false;
    }
    return true;
  },

  // === Helpers de Query String ===
  getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },

  // Renderizar loader/spinner simple
  spinner() {
    return '<div class="flex justify-center items-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div></div>';
  }
};

window.UI = UI;
