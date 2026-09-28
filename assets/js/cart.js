/* ============================================
   CART.JS — Gestión del carrito de compras
   ============================================ */

const Cart = {
  STORAGE_KEY: "cart",

  // Obtener todo el carrito
  getAll() {
    const cart = localStorage.getItem(this.STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  // Guardar carrito
  _save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this._updateCartBadge();
    window.dispatchEvent(new Event("cart-updated"));
  },

  // Agregar producto al carrito
  add(productId, qty = 1, size = null, color = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return { success: false, error: "Producto no encontrado" };

    const items = this.getAll();
    // Buscar si ya existe el mismo producto con mismo talle y color
    const existing = items.find(item =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
    );

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        productId,
        qty,
        size: size || product.sizes[0],
        color: color || product.colors[0].name,
        colorHex: (product.colors.find(c => c.name === color) || product.colors[0]).hex,
        addedAt: new Date().toISOString()
      });
    }

    this._save(items);
    return { success: true };
  },

  // Actualizar cantidad
  updateQty(index, qty) {
    const items = this.getAll();
    if (index < 0 || index >= items.length) return { success: false };
    if (qty < 1) {
      return this.remove(index);
    }
    items[index].qty = qty;
    this._save(items);
    return { success: true };
  },

  // Eliminar item
  remove(index) {
    const items = this.getAll();
    if (index < 0 || index >= items.length) return { success: false };
    items.splice(index, 1);
    this._save(items);
    return { success: true };
  },

  // Vaciar carrito
  clear() {
    this._save([]);
  },

  // Obtener items con info completa del producto
  getDetailedItems() {
    const items = this.getAll();
    return items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return product ? { ...item, product } : null;
    }).filter(Boolean);
  },

  // Contar items
  count() {
    return this.getAll().reduce((sum, item) => sum + item.qty, 0);
  },

  // Subtotal del carrito
  subtotal() {
    return this.getDetailedItems().reduce((sum, item) => {
      return sum + (item.product.price * item.qty);
    }, 0);
  },

  // Total (con envío)
  total(shippingCost = 0) {
    return this.subtotal() + shippingCost;
  },

  // Actualizar badge del carrito en navbar
  _updateCartBadge() {
    const badges = document.querySelectorAll(".cart-badge");
    const count = this.count();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? "flex" : "none";
    });
  },

  // Inicializar listener para actualizar badge en todas las páginas
  init() {
    this._updateCartBadge();
    window.addEventListener("storage", (e) => {
      if (e.key === this.STORAGE_KEY) this._updateCartBadge();
    });
  }
};

window.Cart = Cart;
