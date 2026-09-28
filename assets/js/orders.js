/* ============================================
   ORDERS.JS — Gestión de pedidos
   ============================================ */

const Orders = {
  STORAGE_KEY: "orders",

  // Obtener todos los pedidos
  getAll() {
    const orders = localStorage.getItem(this.STORAGE_KEY);
    return orders ? JSON.parse(orders) : [];
  },

  // Guardar pedidos
  _save(orders) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(orders));
  },

  // Obtener pedidos del usuario actual
  getUserOrders(userId = null) {
    const current = userId || (Auth.getCurrentUser()?.id);
    if (!current) return [];
    return this.getAll().filter(o => o.userId === current);
  },

  // Obtener pedido por ID
  getById(id) {
    return this.getAll().find(o => o.id === id);
  },

  // Crear nuevo pedido desde el carrito
  create({ shipping, payment }) {
    const user = Auth.getCurrentUser();
    if (!user) return { success: false, error: "No hay sesión activa" };

    const items = Cart.getDetailedItems();
    if (items.length === 0) return { success: false, error: "El carrito está vacío" };

    const subtotal = Cart.subtotal();
    const shippingCost = shipping.cost;
    const total = subtotal + shippingCost;

    const order = {
      id: this._generateId(),
      userId: user.id,
      items: items.map(item => ({
        productId: item.productId,
        name: item.product.name,
        qty: item.qty,
        size: item.size,
        color: item.color,
        price: item.product.price,
        image: item.product.images[0]
      })),
      shipping: {
        address: shipping.address,
        city: shipping.city,
        region: shipping.region,
        zip: shipping.zip,
        type: shipping.type,
        typeName: shipping.typeName,
        cost: shippingCost
      },
      payment: {
        method: payment.method,
        methodName: payment.methodName,
        last4: payment.last4 || null
      },
      subtotal,
      shippingCost,
      total,
      status: "procesando",
      createdAt: new Date().toISOString()
    };

    const all = this.getAll();
    all.push(order);
    this._save(all);
    Cart.clear();
    return { success: true, order };
  },

  // Generar ID tipo ATL-2026-XXXX
  _generateId() {
    const orders = this.getAll();
    const year = new Date().getFullYear();
    const sameYear = orders.filter(o => o.id.startsWith("ATL-" + year)).length;
    const num = String(sameYear + 1).padStart(4, "0");
    return `ATL-${year}-${num}`;
  },

  // Obtener estado legible
  getStatusLabel(status) {
    const map = {
      pendiente: "Pendiente",
      procesando: "En preparación",
      enviado: "Enviado",
      entregado: "Entregado",
      cancelado: "Cancelado"
    };
    return map[status] || status;
  },

  // Obtener clase CSS para badge de estado
  getStatusClass(status) {
    return `status-${status}`;
  }
};

window.Orders = Orders;
