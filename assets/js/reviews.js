/* ============================================
   REVIEWS.JS — Gestión de reseñas de productos
   ============================================ */

const Reviews = {
  STORAGE_KEY: "reviews",

  // Obtener todas las reseñas (objeto {productId: [reviews]})
  getAll() {
    const reviews = localStorage.getItem(this.STORAGE_KEY);
    return reviews ? JSON.parse(reviews) : {};
  },

  // Guardar
  _save(reviews) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(reviews));
  },

  // Obtener reseñas de un producto
  getForProduct(productId) {
    const all = this.getAll();
    return all[productId] || [];
  },

  // Agregar reseña
  add({ productId, rating, comment }) {
    const user = Auth.getCurrentUser();
    if (!user) return { success: false, error: "Debes iniciar sesión para reseñar" };

    if (!rating || rating < 1 || rating > 5) {
      return { success: false, error: "Selecciona una calificación de 1 a 5 estrellas" };
    }
    if (!comment || comment.trim().length < 10) {
      return { success: false, error: "El comentario debe tener al menos 10 caracteres" };
    }

    const all = this.getAll();
    if (!all[productId]) all[productId] = [];

    const review = {
      id: "r" + Date.now(),
      productId,
      userId: user.id,
      userName: user.name,
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString()
    };

    all[productId].unshift(review);
    this._save(all);
    return { success: true, review };
  },

  // Verificar si el usuario ya reseñó este producto
  hasReviewed(productId, userId = null) {
    const uid = userId || (Auth.getCurrentUser()?.id);
    if (!uid) return false;
    const reviews = this.getForProduct(productId);
    return reviews.some(r => r.userId === uid);
  },

  // Verificar si el usuario compró el producto (puede reseñarlo)
  userHasPurchased(productId, userId = null) {
    const uid = userId || (Auth.getCurrentUser()?.id);
    if (!uid) return false;
    const orders = Orders.getUserOrders(uid);
    return orders.some(o => o.items.some(i => i.productId === productId));
  },

  // Calcular rating promedio
  getAverage(productId) {
    const reviews = this.getForProduct(productId);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    return sum / reviews.length;
  },

  // Distribribución por estrellas
  getDistribution(productId) {
    const reviews = this.getForProduct(productId);
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(r => dist[r.rating]++);
    return dist;
  }
};

window.Reviews = Reviews;
