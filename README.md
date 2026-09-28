# Atelier Boutique — Template E-commerce

Template completo de e-commerce para boutique de ropa, listo para usar. Construido con HTML, JavaScript nativo y Tailwind CSS (vía CDN), con datos mockeados y persistencia en localStorage.

## 🚀 Cómo usar

1. Abre `index.html` en tu navegador, o
2. Sirve los archivos con cualquier servidor estático:
   ```bash
   python -m http.server 8000
   # o
   npx serve .
   ```
3. Visita `http://localhost:8000`

## 👤 Cuenta demo

Para probar el flujo completo de compra, usa la cuenta precargada:

- **Email:** `demo@atelier.cl`
- **Contraseña:** `123456`

Incluye 2 pedidos de ejemplo y permite dejar reseñas en los productos comprados.

## 📁 Estructura

```
ropa-01/
├── index.html                      # Landing page
├── pages/
│   ├── nosotros.html               # Sobre la empresa + equipo
│   ├── productos.html              # Catálogo con filtros
│   ├── contacto.html               # Formulario + horarios + mapa
│   ├── detalle-producto.html       # Producto + reseñas
│   ├── carrito.html                # Carrito de compras
│   ├── checkout.html               # Pago (dirección + envío + pago)
│   ├── confirmacion.html           # Compra exitosa + imprimir
│   ├── perfil.html                 # Mi perfil + historial
│   ├── detalle-pedido.html         # Detalle de pedido + timeline
│   ├── resena.html                 # Formulario de reseña con estrellas
│   ├── seguimiento.html            # Rastreo por código
│   ├── faq.html                    # Preguntas frecuentes
│   ├── politicas-privacidad.html
│   ├── terminos.html
│   ├── registro.html
│   ├── login.html
│   └── recuperar-password.html
└── assets/
    ├── css/styles.css              # Estilos boutique (negro + dorado)
    └── js/
        ├── data.js                 # Mock: productos, categorías, equipo, FAQs
        ├── ui.js                   # Navbar, footer, toast, modales, helpers
        ├── auth.js                 # Autenticación con localStorage
        ├── cart.js                 # Estado del carrito
        ├── orders.js               # Gestión de pedidos
        └── reviews.js              # Sistema de reseñas
```

## ✨ Características

### Páginas públicas
- **Inicio**: Hero + categorías + productos destacados + beneficios + testimonios
- **Productos**: Catálogo con filtros (categoría, precio, talle) + ordenamiento
- **Nosotros**: Historia + valores + equipo
- **Contacto**: Formulario + horarios + mapa + datos de contacto
- **FAQ**: 8 preguntas con acordeón + buscador
- **Seguimiento**: Búsqueda por código de pedido con timeline

### Flujo de compra
- **Detalle de producto**: Galería, selector talle/color, cantidad, tabs descripción/envío/reseñas
- **Carrito**: Edición de cantidades, cálculo de envío gratis, resumen
- **Checkout**: 3 pasos (dirección, envío, pago) con tarjeta/transferencia/Webpay
- **Confirmación**: Resumen + botones para imprimir comprobante o ver historial

### Área de usuario
- **Login / Registro / Recuperar contraseña**
- **Perfil**: Edición de datos + historial de pedidos
- **Detalle de pedido**: Items + dirección + timeline de estado
- **Reseñas**: Solo usuarios que compraron el producto pueden reseñar

### Páginas legales
- **Políticas de privacidad** (10 secciones)
- **Términos y condiciones** (13 secciones)

## 🎨 Diseño

- **Paleta:** Negro carbón (#0a0a0a) + Dorado (#c9a961) + Crema (#faf7f2)
- **Tipografía:** Playfair Display (títulos) + Inter (cuerpo)
- **Moneda:** Peso Chileno (CLP) — formato `$45.990`
- **Imágenes:** URLs de Unsplash (sin descarga)
- **Responsive:** Mobile-first con breakpoints `md` y `lg`

## 💾 Persistencia

Toda la información se guarda en `localStorage`:

| Key | Contenido |
|-----|-----------|
| `users` | Array de usuarios registrados |
| `currentUser` | Sesión activa (sin password) |
| `cart` | Items del carrito |
| `orders` | Historial de pedidos |
| `reviews` | Reseñas por producto |

Para "resetear" la app, abre la consola y ejecuta:
```js
localStorage.clear(); location.reload();
```

## 🔧 Personalización rápida

- **Productos:** Edita `assets/js/data.js` → array `PRODUCTS`
- **Categorías:** Edita `assets/js/data.js` → array `CATEGORIES`
- **Datos tienda:** Edita `STORE` en `data.js`
- **Colores:** Modifica `assets/css/styles.css` (`:root`) y la config de Tailwind en cada HTML
- **Moneda:** Cambia el código en `UI.formatCLP()` (es-CL → otro locale)

## 📦 Datos mockeados

- 16 productos (4 por categoría)
- 4 categorías: Mujer, Hombre, Niños, Accesorios
- 4 miembros del equipo
- 8 preguntas frecuentes
- 3 testimonials
- 5 métodos de envío/pago
- Cuenta demo con 2 pedidos de ejemplo
- 4 reseñas precargadas
