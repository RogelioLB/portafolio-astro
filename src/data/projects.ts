export interface Project {
  slug: string;
  name: string;
  span: 1 | 2;
  link: string | null;
  linkType: 'live' | 'repo' | null;
  tag: { es: string; en: string };
  role: { es: string; en: string };
  problem: { es: string; en: string };
  summary: { es: string; en: string };
  detail: { es: string; en: string };
  tech: string[];
  keywords: { es: string[]; en: string[] };
}

export const projects: Project[] = [
  {
    slug: 'aurasync',
    name: 'AuraSync',
    span: 2,
    link: null,
    linkType: null,
    tag: { es: 'Sincronización multi-marketplace', en: 'Multi-marketplace sync' },
    role: { es: 'Proyecto interno · Torke Trabaja Contigo', en: 'Internal project · Torke Trabaja Contigo' },
    problem: {
      es: 'Sincronizar inventario y precios entre múltiples marketplaces en tiempo real, sin sobrevender ni depender de procesos manuales.',
      en: 'Keeping inventory and pricing in sync across multiple marketplaces in real time, without overselling or relying on manual processes.',
    },
    summary: {
      es: 'Plataforma para conectar distintos marketplaces y sincronizar precios, inventarios y ventas en tiempo real — si se vende un producto, se descuenta automáticamente en todos los canales conectados.',
      en: 'A platform that connects multiple marketplaces and syncs prices, inventory, and sales in real time — when a product sells on one channel, it is automatically deducted from every connected channel.',
    },
    detail: {
      es: 'Desarrollada como alternativa interna a Ventiapp durante mi trabajo en Torke, para eliminar la dependencia de un proveedor externo y reducir la latencia de sincronización a segundos. El sistema expone webhooks por canal y reconcilia el stock mediante colas para evitar condiciones de carrera cuando dos ventas ocurren casi simultáneamente.',
      en: 'Built as an internal alternative to Ventiapp during my time at Torke, to remove the dependency on a third-party provider and cut sync latency down to seconds. The system exposes per-channel webhooks and reconciles stock through queues to avoid race conditions when two sales happen almost simultaneously.',
    },
    tech: ['Next.js', 'TypeScript', 'Node.js', 'APIs de marketplace'],
    keywords: {
      es: ['sincronización de inventario', 'multi-marketplace', 'integración de APIs de e-commerce'],
      en: ['inventory sync', 'multi-marketplace integration', 'e-commerce API integration'],
    },
  },
  {
    slug: 'nexo-laboral',
    name: 'Nexo Laboral',
    span: 1,
    link: null,
    linkType: null,
    tag: { es: 'Plataforma RRHH', en: 'HR platform' },
    role: { es: 'Proyecto freelance · Chile', en: 'Freelance project · Chile' },
    problem: {
      es: 'Cumplir con la normativa laboral chilena y coordinar a supervisores, trabajadores y contratistas desde una sola plataforma con roles y permisos claros.',
      en: 'Meeting Chilean labor compliance requirements while coordinating supervisors, workers, and contractors from a single platform with clear roles and permissions.',
    },
    summary: {
      es: 'Sistema avanzado de cumplimiento laboral y recursos humanos para el mercado chileno. Implementa roles diferenciados para supervisores, trabajadores y contratistas.',
      en: 'An advanced labor compliance and HR system for the Chilean market, with differentiated roles for supervisors, workers, and contractors.',
    },
    detail: {
      es: 'Cuenta con una sincronización bidireccional y robusta con la API gubernamental de Talana, lo que permite mantener los registros laborales actualizados sin doble captura de información entre sistemas. El sistema centraliza el seguimiento del cumplimiento laboral y reemplaza el trabajo manual que antes se hacía por correo y hojas de cálculo, dando a supervisores y RRHH visibilidad en tiempo real sobre el estado de cada trabajador y contratista.',
      en: 'It features a robust two-way sync with the Talana government API, keeping labor records up to date without duplicate data entry between systems. The platform centralizes compliance tracking and replaces the manual work previously done over email and spreadsheets, giving supervisors and HR real-time visibility into the status of every worker and contractor.',
    },
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Talana API'],
    keywords: {
      es: ['cumplimiento laboral', 'software de RRHH', 'integración API Talana'],
      en: ['labor compliance software', 'HR platform', 'Talana API integration'],
    },
  },
  {
    slug: 'palettesnap',
    name: 'PaletteSnap',
    span: 1,
    link: 'https://github.com/RogelioLB/palettesnap',
    linkType: 'repo',
    tag: { es: 'Open source', en: 'Open source' },
    role: { es: 'Proyecto personal · Open source', en: 'Personal project · Open source' },
    problem: {
      es: 'Extraer y exportar paletas de color utilizables a partir de cualquier imagen, sin instalar herramientas de diseño pesadas.',
      en: 'Extracting and exporting usable color palettes from any image, without installing heavyweight design tools.',
    },
    summary: {
      es: 'Extractor de paletas de colores dominantes a partir de imágenes cargadas. Soporta formatos HEX, RGB y HSL, con traducción automática de nombres de colores a español.',
      en: 'A tool that extracts dominant color palettes from uploaded images. Supports HEX, RGB, and HSL, with automatic color-name translation to Spanish.',
    },
    detail: {
      es: 'Todo el procesamiento ocurre en el navegador mediante Canvas API, sin subir la imagen a ningún servidor. Permite exportar la paleta final como código CSS listo para usar o como imagen PNG limpia. Nació de una necesidad personal — sacar una paleta usable de una captura o foto sin abrir una suite de diseño completa — y terminó convirtiéndose en una pequeña herramienta open source que otros desarrolladores reutilizan.',
      en: 'All processing happens in the browser via the Canvas API — no image is ever uploaded to a server. The final palette can be exported as ready-to-use CSS or a clean PNG image. It started as a personal need — pulling a usable palette out of a screenshot or photo without opening a full design suite — and turned into a small open-source tool that other developers now reuse.',
    },
    tech: ['Astro', 'TailwindCSS', 'TypeScript', 'Canvas API'],
    keywords: {
      es: ['extractor de paleta de colores', 'colores dominantes de una imagen', 'herramienta de diseño open source'],
      en: ['color palette extractor', 'dominant colors from image', 'open source design tool'],
    },
  },
  {
    slug: 'node-yt-converter',
    name: 'node-yt-converter',
    span: 2,
    link: 'https://github.com/RogelioLB/node-yt-converter',
    linkType: 'repo',
    tag: { es: 'Librería NPM · 13 ★', en: 'NPM library · 13 ★' },
    role: { es: 'Proyecto personal · Librería open source', en: 'Personal project · Open source library' },
    problem: {
      es: 'Convertir videos de YouTube a audio o video localmente y de forma programática, sin depender de servicios web de terceros.',
      en: 'Converting YouTube videos to audio or video locally and programmatically, without relying on third-party web services.',
    },
    summary: {
      es: 'Librería publicada en el registro oficial de NPM desarrollada completamente en TypeScript. Permite realizar la conversión rápida de videos de YouTube a archivos de audio MP3 y video MP4.',
      en: 'A library published on the official NPM registry, written entirely in TypeScript. It converts YouTube videos to MP3 audio or MP4 video quickly and locally.',
    },
    detail: {
      es: 'Usa FFmpeg internamente para el transcodificado y expone una API programática simple, pensada para integrarse en bots, scripts de automatización o backends propios. Cuenta con 13 estrellas en GitHub.',
      en: 'It uses FFmpeg internally for transcoding and exposes a simple programmatic API, designed to be embedded in bots, automation scripts, or custom backends. It has 13 stars on GitHub.',
    },
    tech: ['TypeScript', 'Node.js', 'NPM Registry', 'FFmpeg'],
    keywords: {
      es: ['librería npm de conversión de video', 'YouTube a MP3 programático', 'FFmpeg Node.js'],
      en: ['npm video conversion library', 'programmatic YouTube to MP3', 'FFmpeg Node.js'],
    },
  },
  {
    slug: 'alfri',
    name: 'Alfri Chapas y Herrajes',
    span: 2,
    link: 'https://alfri.mx',
    linkType: 'live',
    tag: { es: 'Migración e-commerce', en: 'E-commerce migration' },
    role: { es: 'Proyecto freelance · Cliente en México', en: 'Freelance project · Client in Mexico' },
    problem: {
      es: 'Migrar un catálogo de e-commerce completo desde Shopify a una plataforma propia, sin perder productos, variantes ni imágenes en el proceso.',
      en: 'Migrating a full e-commerce catalog from Shopify to a self-hosted platform without losing products, variants, or images in the process.',
    },
    summary: {
      es: 'Migración completa de la tienda e-commerce de la plataforma Shopify a MedusaJS para un cliente importante en México.',
      en: 'A complete migration of an e-commerce store from Shopify to MedusaJS for a major client in Mexico.',
    },
    detail: {
      es: 'Desarrollo a medida de scripts en Node.js para la migración íntegra de productos, variantes e imágenes a un almacenamiento S3 con MinIO, validando cada lote antes de aplicarlo en producción para evitar pérdida de datos.',
      en: 'Custom Node.js scripts handled the full migration of products, variants, and images into S3 storage via MinIO, validating every batch before applying it to production to prevent data loss.',
    },
    tech: ['MedusaJS', 'Next.js', 'MinIO (S3)', 'PostgreSQL'],
    keywords: {
      es: ['migración de Shopify a MedusaJS', 'migración de e-commerce', 'MinIO S3 Node.js'],
      en: ['Shopify to MedusaJS migration', 'e-commerce migration', 'MinIO S3 Node.js'],
    },
  },
  {
    slug: 'finanzia',
    name: 'FinanzIA',
    span: 1,
    link: 'https://github.com/RogelioLB/finanzIA',
    linkType: 'repo',
    tag: { es: 'App móvil con IA', en: 'AI mobile app' },
    role: { es: 'Proyecto personal · App móvil', en: 'Personal project · Mobile app' },
    problem: {
      es: 'Entender en qué se está gastando el dinero y recibir contexto accionable, no solo una lista plana de transacciones.',
      en: 'Understanding where money is actually going and getting actionable context, not just a flat list of transactions.',
    },
    summary: {
      es: 'Aplicación móvil nativa personal para el control inteligente de finanzas, deudas, suscripciones y tarjetas de crédito.',
      en: 'A personal native mobile app for smart control of finances, debts, subscriptions, and credit cards.',
    },
    detail: {
      es: 'Integra un chat inteligente de soporte financiero alimentado por un modelo de lenguaje (LLM) que analiza el contexto real de los gastos del usuario para responder preguntas concretas. Publicación en Play Store en prueba cerrada. El objetivo fue reemplazar el hábito de anotar todo en una hoja de cálculo con algo que realmente explique los patrones de gasto y avise antes de que se renueve una suscripción, en vez de solo mostrar una lista de movimientos.',
      en: 'It includes an AI chat assistant powered by an LLM that analyzes the user\'s real spending context to answer concrete questions. Published on the Play Store in closed testing. The goal was to replace the habit of tracking everything in a spreadsheet with something that actually explains spending patterns and flags an upcoming subscription renewal, instead of just showing a list of transactions.',
    },
    tech: ['React Native', 'Expo', 'ExpressJS', 'SQLite'],
    keywords: {
      es: ['app de finanzas personales con IA', 'asistente financiero LLM', 'React Native Expo'],
      en: ['AI personal finance app', 'LLM financial assistant', 'React Native Expo'],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
