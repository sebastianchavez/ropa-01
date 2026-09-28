/* ============================================
   AUTH.JS — Gestión de autenticación (mock)
   ============================================ */

const Auth = {
  // Obtener todos los usuarios
  getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  },

  // Guardar usuarios
  _saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  },

  // Obtener usuario actual (logueado)
  getCurrentUser() {
    const session = localStorage.getItem("currentUser");
    return session ? JSON.parse(session) : null;
  },

  // Registrar nuevo usuario
  register({ name, email, password, phone }) {
    const users = this.getUsers();

    // Validar email único
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "Este email ya está registrado" };
    }

    // Validar password
    if (password.length < 6) {
      return { success: false, error: "La contraseña debe tener al menos 6 caracteres" };
    }

    const newUser = {
      id: "u" + Date.now(),
      name,
      email,
      password, // En producción: hashear
      phone: phone || "",
      address: {},
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    this._saveUsers(users);
    this._setSession(newUser);
    return { success: true, user: newUser };
  },

  // Login
  login(email, password, rememberMe = false) {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, error: "No existe una cuenta con ese email" };
    }
    if (user.password !== password) {
      return { success: false, error: "Contraseña incorrecta" };
    }

    this._setSession(user);
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    }
    return { success: true, user };
  },

  // Cerrar sesión
  logout() {
    localStorage.removeItem("currentUser");
  },

  // Guardar sesión actual
  _setSession(user) {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
  },

  // Actualizar perfil
  updateProfile(updates) {
    const users = this.getUsers();
    const current = this.getCurrentUser();
    if (!current) return { success: false, error: "No hay sesión activa" };

    const idx = users.findIndex(u => u.id === current.id);
    if (idx === -1) return { success: false, error: "Usuario no encontrado" };

    users[idx] = { ...users[idx], ...updates };
    this._saveUsers(users);
    this._setSession(users[idx]);
    return { success: true, user: users[idx] };
  },

  // Solicitar recuperación (mock)
  requestPasswordReset(email) {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      // Por seguridad, no revelar si existe o no, pero para el mock devolvemos éxito igual
    }
    // En un caso real: enviar email con token. Aquí simulamos.
    return { success: true };
  }
};

window.Auth = Auth;
