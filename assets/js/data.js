/* ============================================
   DATA.JS — Datos mockeados de la tienda
   ============================================ */

const STORE = {
  name: "Atelier Boutique",
  tagline: "Moda con alma, estilo atemporal",
  description: "Somos una boutique chilena dedicada a ofrecer moda exclusiva, sostenible y de calidad para toda la familia.",
  email: "contacto@atelierboutique.cl",
  phone: "+56 2 2895 4321",
  whatsapp: "+56 9 9876 5432",
  address: "Av. Alonso de Córdova 4560, Vitacura, Santiago",
  schedule: [
    { day: "Lunes a Viernes", hours: "10:00 - 20:00" },
    { day: "Sábado", hours: "10:00 - 21:00" },
    { day: "Domingo", hours: "11:00 - 18:00" }
  ],
  social: {
    instagram: "https://instagram.com/atelierboutique",
    facebook: "https://facebook.com/atelierboutique",
    tiktok: "https://tiktok.com/@atelierboutique"
  }
};

const CATEGORIES = [
  {
    id: "mujer",
    name: "Mujer",
    description: "Elegancia contemporánea",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop"
  },
  {
    id: "hombre",
    name: "Hombre",
    description: "Estilo urbano y sofisticado",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80&auto=format&fit=crop"
  },
  {
    id: "ninos",
    name: "Niños",
    description: "Diversión con estilo",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80&auto=format&fit=crop"
  },
  {
    id: "accesorios",
    name: "Accesorios",
    description: "Detalles que definen",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80&auto=format&fit=crop"
  }
];

const PRODUCTS = [
  // MUJER (4)
  {
    id: "w001",
    name: "Vestido Midi de Seda",
    category: "mujer",
    price: 89990,
    oldPrice: 119990,
    description: "Vestido midi elaborado en seda natural con caída suave. Diseño atemporal con escote en V y manga corta, perfecto para ocasiones especiales. Corte favorecedor que realza la silueta.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#0a0a0a" },
      { name: "Borgoña", hex: "#722f37" },
      { name: "Crema", hex: "#f5e6d3" }
    ],
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 12,
    rating: 4.8,
    reviewsCount: 24,
    featured: true,
    isNew: false
  },
  {
    id: "w002",
    name: "Blazer Oversize Camel",
    category: "mujer",
    price: 64990,
    description: "Blazer de corte oversize en tono camel clásico. Confeccionado en mezcla de lana y cashmere. Ideal para looks profesionales o casuales elegantes.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Gris", hex: "#6b6b6b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632149877166-f75d49000351?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 8,
    rating: 4.6,
    reviewsCount: 18,
    featured: true,
    isNew: true
  },
  {
    id: "w003",
    name: "Jeans Mom Fit Vintage",
    category: "mujer",
    price: 39990,
    description: "Jeans mom fit de tiro alto en denim 100% algodón con lavados vintage. Corte cómodo y favorecedor que regresa con fuerza esta temporada.",
    sizes: ["24", "26", "28", "30", "32"],
    colors: [
      { name: "Azul Claro", hex: "#7a9cc6" },
      { name: "Azul Oscuro", hex: "#2c3e50" }
    ],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 20,
    rating: 4.7,
    reviewsCount: 42,
    featured: false,
    isNew: false
  },
  {
    id: "w004",
    name: "Blusa de Encaje Boho",
    category: "mujer",
    price: 34990,
    oldPrice: 49990,
    description: "Blusa romántica con detalles de encaje y bordados artesanales. Manga abullonada y corte fluido que aporta un toque bohemio y femenino.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Blanco", hex: "#ffffff" },
      { name: "Crudo", hex: "#f5e6d3" }
    ],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 15,
    rating: 4.5,
    reviewsCount: 16,
    featured: false,
    isNew: false
  },

  // HOMBRE (4)
  {
    id: "m001",
    name: "Chaqueta de Cuero Premium",
    category: "hombre",
    price: 149990,
    oldPrice: 189990,
    description: "Chaqueta de cuero genuino estilo biker. Forro interior de seda, cierres metálicos de calidad. Una pieza icónica que dura toda la vida.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Negro", hex: "#0a0a0a" },
      { name: "Marrón", hex: "#5c3a21" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 6,
    rating: 4.9,
    reviewsCount: 31,
    featured: true,
    isNew: false
  },
  {
    id: "m002",
    name: "Polera Pima Algodón",
    category: "hombre",
    price: 24990,
    description: "Polera básica en algodón pima peruano de primera calidad. Costuras reforzadas y corte regular. El básico perfecto para el día a día.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blanco", hex: "#ffffff" },
      { name: "Negro", hex: "#0a0a0a" },
      { name: "Marino", hex: "#1e3a5f" },
      { name: "Beige", hex: "#d4b896" }
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 50,
    rating: 4.7,
    reviewsCount: 89,
    featured: true,
    isNew: false
  },
  {
    id: "m003",
    name: "Pantalón Chino Slim",
    category: "hombre",
    price: 44990,
    description: "Pantalón chino de corte slim en gabardina de algodón elastizado. Versátil y cómodo, perfecto para la oficina o eventos casuales.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Beige", hex: "#d4b896" },
      { name: "Verde Olivo", hex: "#556b2f" },
      { name: "Azul Marino", hex: "#1e3a5f" }
    ],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 22,
    rating: 4.6,
    reviewsCount: 27,
    featured: false,
    isNew: true
  },
  {
    id: "m004",
    name: "Suéter Lana Merino",
    category: "hombre",
    price: 59990,
    oldPrice: 79990,
    description: "Suéter de lana merino extrafina con cuello redondo. Suave, cálido y elegante. Una inversión en calidad para los meses fríos.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Gris Oscuro", hex: "#3a3a3a" },
      { name: "Camel", hex: "#c19a6b" },
      { name: "Burdeos", hex: "#722f37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 14,
    rating: 4.8,
    reviewsCount: 35,
    featured: false,
    isNew: false
  },

  // NIÑOS (4)
  {
    id: "k001",
    name: "Conjunto Infantil Algodón Orgánico",
    category: "ninos",
    price: 19990,
    description: "Conjunto de polera y pantalón corto en algodón orgánico certificado. Suave con la piel de los más pequeños. Estampado divertido.",
    sizes: ["2", "4", "6", "8", "10"],
    colors: [
      { name: "Mostaza", hex: "#d4a017" },
      { name: "Verde Menta", hex: "#98d8c8" },
      { name: "Rosa Palo", hex: "#f4c2c2" }
    ],
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 25,
    rating: 4.9,
    reviewsCount: 56,
    featured: true,
    isNew: false
  },
  {
    id: "k002",
    name: "Vestido Niña con Volados",
    category: "ninos",
    price: 24990,
    description: "Vestido encantador con volados y bordados delicados. Tela suave y fresca ideal para el verano. Lavable a máquina.",
    sizes: ["2", "4", "6", "8", "10"],
    colors: [
      { name: "Blanco Estampado", hex: "#f5e6d3" },
      { name: "Rosa", hex: "#f4c2c2" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579102074562-6f70cbb56990?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 18,
    rating: 4.7,
    reviewsCount: 28,
    featured: false,
    isNew: true
  },
  {
    id: "k003",
    name: "Polerón con Capucha Niño",
    category: "ninos",
    price: 22990,
    oldPrice: 29990,
    description: "Polerón abrigado con capucha y bolsillo canguro. Felpa perchada interior para mayor calidez. Perfecto para el recreo y los días fríos.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: [
      { name: "Gris", hex: "#808080" },
      { name: "Azul Rey", hex: "#1e3a8a" },
      { name: "Rojo", hex: "#c1121f" }
    ],
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1649006612249-6d32f5c2c429?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 30,
    rating: 4.6,
    reviewsCount: 41,
    featured: false,
    isNew: false
  },
  {
    id: "k004",
    name: "Pantalón Jeans Niño",
    category: "ninos",
    price: 17990,
    description: "Jeans resistentes con refuerzo en rodillas. Corte regular y elasticidad que permite movilidad. Pensados para durar.",
    sizes: ["2", "4", "6", "8", "10", "12"],
    colors: [
      { name: "Azul", hex: "#1e3a5f" },
      { name: "Negro", hex: "#0a0a0a" }
    ],
    images: [
      "https://images.unsplash.com/photo-1588544622467-6df9eef29c7a?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 35,
    rating: 4.5,
    reviewsCount: 22,
    featured: false,
    isNew: false
  },

  // ACCESORIOS (4)
  {
    id: "a001",
    name: "Bolso Tote de Cuero",
    category: "accesorios",
    price: 79990,
    description: "Bolso tote amplio en cuero genuino curtido vegetal. Interior forrado con múltiples bolsillos. Perfecto para el día a día o la oficina.",
    sizes: ["Único"],
    colors: [
      { name: "Marrón Cognac", hex: "#9a4631" },
      { name: "Negro", hex: "#0a0a0a" },
      { name: "Camel", hex: "#c19a6b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 10,
    rating: 4.9,
    reviewsCount: 67,
    featured: true,
    isNew: false
  },
  {
    id: "a002",
    name: "Bufanda de Cachemir",
    category: "accesorios",
    price: 34990,
    oldPrice: 49990,
    description: "Bufanda tejida en cashmere puro. Suave al tacto, cálida y ligera. Un accesorio atemporal que eleva cualquier look.",
    sizes: ["Único"],
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Gris", hex: "#808080" },
      { name: "Burdeos", hex: "#722f37" },
      { name: "Negro", hex: "#0a0a0a" }
    ],
    images: [
      "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 16,
    rating: 4.8,
    reviewsCount: 43,
    featured: false,
    isNew: true
  },
  {
    id: "a003",
    name: "Reloj Minimalista Acero",
    category: "accesorios",
    price: 89990,
    description: "Reloj de pulsera con caja de acero inoxidable, movimiento de cuarzo japonés y malla milanesa. Resistente al agua (3ATM). Caja de regalo incluida.",
    sizes: ["Único"],
    colors: [
      { name: "Acero Plata", hex: "#c0c0c0" },
      { name: "Acero Oro", hex: "#d4af37" },
      { name: "Acero Negro", hex: "#1a1a1a" }
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 8,
    rating: 4.7,
    reviewsCount: 52,
    featured: true,
    isNew: false
  },
  {
    id: "a004",
    name: "Gafas de Sol Polarizadas",
    category: "accesorios",
    price: 49990,
    description: "Gafas de sol con marco de acetato italiano y lentes polarizados con protección UV400. Estilo clásico que no pasa de moda.",
    sizes: ["Único"],
    colors: [
      { name: "Negro Mate", hex: "#0a0a0a" },
      { name: "Carey", hex: "#7b3f00" }
    ],
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=85&auto=format&fit=crop"
    ],
    stock: 20,
    rating: 4.6,
    reviewsCount: 38,
    featured: false,
    isNew: false
  }
];

const TEAM = [
  {
    id: 1,
    name: "Isidora Montt",
    role: "Fundadora & Directora Creativa",
    bio: "Diseñadora textil con más de 15 años de experiencia en moda sostenible. Isidora dio vida a Atelier Boutique tras trabajar en las casas de moda más prestigiosas de Europa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Matías Vargas",
    role: "Director Comercial",
    bio: "Apasionado por conectar marcas con personas. Matías lidera la estrategia comercial y las relaciones con nuestros clientes y proveedores nacionales e internacionales.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Camila Espinoza",
    role: "Head of Design",
    bio: "Camila transforma tendencias en piezas únicas. Su visión estética equilibra la moda contemporánea con la atemporalidad que nos caracteriza.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Diego Rojas",
    role: "Customer Experience",
    bio: "Diego se asegura de que cada visita a Atelier sea memorable. Su equipo está siempre disponible para ayudarte a encontrar lo que necesitas.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Carolina P.",
    text: "La calidad de las telas y la atención al detalle son incomparables. Mis compras aquí siempre son un acierto.",
    rating: 5
  },
  {
    name: "Andrés L.",
    text: "Encontré el regalo perfecto para mi esposa. El packaging impecable y la asesoría fueron de primera.",
    rating: 5
  },
  {
    name: "Francisca M.",
    text: "Adoro la curaduría de la tienda. Cada prenda tiene una historia y se nota la calidad desde el primer uso.",
    rating: 5
  }
];

const FAQS = [
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria y Webpay. También puedes pagar en efectivo en nuestra tienda física."
  },
  {
    question: "¿Cuánto demora el envío?",
    answer: "Los envíos a Santiago demoran entre 24 y 48 horas hábiles en opción estándar. A regiones, entre 3 y 5 días hábiles. También ofrecemos envío express el mismo día en Santiago para pedidos realizados antes de las 14:00."
  },
  {
    question: "¿Puedo devolver un producto?",
    answer: "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar sin uso, con etiquetas y en su empaque original. El reembolso se procesa en un plazo máximo de 10 días hábiles."
  },
  {
    question: "¿Realizan cambios de talla?",
    answer: "Por supuesto. El primer cambio de talla es gratuito dentro de los 30 días. Solo debes contactarnos por WhatsApp o email y coordinar la recogida de tu pedido."
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer: "Sí, enviamos a toda Latinoamérica y otros destinos. Los costos y plazos varían según el país. Contáctanos para una cotización personalizada."
  },
  {
    question: "¿Tienen tienda física?",
    answer: "Sí, nuestra boutique está ubicada en Av. Alonso de Córdova 4560, Vitacura, Santiago. Atendemos de lunes a domingo en horario comercial."
  },
  {
    question: "¿Cómo puedo saber mi talla?",
    answer: "En cada producto encontrarás una guía de tallas específica. Si tienes dudas, nuestro equipo de atención al cliente puede asesorarte por WhatsApp con tus medidas."
  },
  {
    question: "¿Ofrecen descuentos por volumen?",
    answer: "Sí, tenemos condiciones especiales para compras corporativas y mayoristas. Escríbenos a ventas@atelierboutique.cl con tu requerimiento."
  }
];

const SHIPPING_OPTIONS = [
  {
    id: "estandar",
    name: "Envío Estándar",
    description: "3-5 días hábiles",
    price: 3990,
    free: true
  },
  {
    id: "express",
    name: "Envío Express",
    description: "24-48 horas hábiles",
    price: 7990
  },
  {
    id: "mismo-dia",
    name: "Envío Same Day (solo Santiago)",
    description: "Recibe hoy antes de las 22:00",
    price: 12990
  }
];

const PAYMENT_METHODS = [
  {
    id: "tarjeta",
    name: "Tarjeta de Crédito/Débito",
    description: "Visa, Mastercard, AmEx - Hasta 6 cuotas sin interés",
    icon: "credit-card"
  },
  {
    id: "transferencia",
    name: "Transferencia Bancaria",
    description: "BancoEstado, Santander, BCI - Confirmación en 24h",
    icon: "bank"
  },
  {
    id: "webpay",
    name: "Webpay",
    description: "Paga rápido y seguro con tu banco",
    icon: "wallet"
  }
];

const ORDER_STATUS_FLOW = [
  { key: "pendiente", label: "Pedido Recibido", description: "Hemos recibido tu pedido" },
  { key: "procesando", label: "En Preparación", description: "Preparando tus productos" },
  { key: "enviado", label: "Enviado", description: "En camino a tu dirección" },
  { key: "entregado", label: "Entregado", description: "¡Disfruta tu compra!" }
];

// Reviews por defecto para productos
const DEFAULT_REVIEWS = {
  "w001": [
    { id: "r1", productId: "w001", userId: "u10", userName: "Constanza R.", rating: 5, comment: "La tela es increíble, súper suave y la caída es perfecta. Lo recibí en 2 días. Recomendadísimo.", createdAt: "2026-08-12T10:30:00" },
    { id: "r2", productId: "w001", userId: "u11", userName: "Pilar M.", rating: 4, comment: "Muy lindo, aunque esperaba un poco más de largo. Igual lo amo.", createdAt: "2026-08-25T15:45:00" }
  ],
  "m001": [
    { id: "r3", productId: "m001", userId: "u12", userName: "Sebastián O.", rating: 5, comment: "Increíble calidad. La chaqueta llegó en un empaque espectacular, como un regalo. Vale cada peso.", createdAt: "2026-09-01T09:15:00" }
  ],
  "a001": [
    { id: "r4", productId: "a001", userId: "u13", userName: "María José V.", rating: 5, comment: "El bolso es tal cual las fotos. Piel de muy buena calidad y los herrajes se ven resistentes. Una inversión.", createdAt: "2026-08-20T12:00:00" },
    { id: "r5", productId: "a001", userId: "u14", userName: "Lorena G.", rating: 5, comment: "Llevo dos meses usándolo a diario y está como nuevo. Excelente compra.", createdAt: "2026-09-10T16:20:00" }
  ]
};

// Usuario demo precargado
const DEMO_USER = {
  id: "demo",
  name: "Usuario Demo",
  email: "demo@atelier.cl",
  password: "123456",
  phone: "+56 9 8765 4321",
  address: {
    street: "Av. Apoquindo 4000",
    city: "Santiago",
    region: "Región Metropolitana",
    zip: "7550000"
  },
  createdAt: "2026-01-15T10:00:00"
};

// Pedidos demo para el usuario demo
const DEMO_ORDERS = [
  {
    id: "ATL-2026-0001",
    userId: "demo",
    items: [
      { productId: "w002", name: "Blazer Oversize Camel", qty: 1, size: "M", color: "Camel", price: 64990, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&q=80" }
    ],
    shipping: {
      address: "Av. Apoquindo 4000",
      city: "Santiago",
      region: "Región Metropolitana",
      zip: "7550000",
      type: "express",
      typeName: "Envío Express",
      cost: 7990
    },
    payment: { method: "tarjeta", methodName: "Tarjeta de Crédito", last4: "4242" },
    subtotal: 64990,
    shippingCost: 7990,
    total: 72980,
    status: "entregado",
    createdAt: "2026-08-15T14:30:00"
  },
  {
    id: "ATL-2026-0002",
    userId: "demo",
    items: [
      { productId: "a002", name: "Bufanda de Cachemir", qty: 1, size: "Único", color: "Camel", price: 34990, image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=200&q=80" },
      { productId: "k003", name: "Polerón con Capucha Niño", qty: 1, size: "8", color: "Azul Rey", price: 22990, image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=200&q=80" }
    ],
    shipping: {
      address: "Av. Apoquindo 4000",
      city: "Santiago",
      region: "Región Metropolitana",
      zip: "7550000",
      type: "estandar",
      typeName: "Envío Estándar",
      cost: 0
    },
    payment: { method: "webpay", methodName: "Webpay" },
    subtotal: 57980,
    shippingCost: 0,
    total: 57980,
    status: "enviado",
    createdAt: "2026-09-18T11:15:00"
  }
];

// Inicialización de localStorage con datos demo
function initMockData() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([DEMO_USER]));
  }
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(DEMO_ORDERS));
  }
  if (!localStorage.getItem("reviews")) {
    localStorage.setItem("reviews", JSON.stringify(DEFAULT_REVIEWS));
  }
}

// Exportar para uso global
window.STORE = STORE;
window.CATEGORIES = CATEGORIES;
window.PRODUCTS = PRODUCTS;
window.TEAM = TEAM;
window.TESTIMONIALS = TESTIMONIALS;
window.FAQS = FAQS;
window.SHIPPING_OPTIONS = SHIPPING_OPTIONS;
window.PAYMENT_METHODS = PAYMENT_METHODS;
window.ORDER_STATUS_FLOW = ORDER_STATUS_FLOW;
window.initMockData = initMockData;
