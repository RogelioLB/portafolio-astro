export interface SubProject {
  title: { es: string; en: string };
  client: string;
  description: { es: string; en: string };
  tech: string[];
}

export interface ExperienceNode {
  active: boolean;
  role: { es: string; en: string };
  company: string;
  date: { es: string; en: string };
  intro: { es: string; en: string };
  achievements?: { es: string; en: string }[];
  subProjects?: SubProject[];
  tech?: string[];
}

export const experience: ExperienceNode[] = [
  {
    active: true,
    role: { es: 'Freelance Full-Stack Developer', en: 'Freelance Full-Stack Developer' },
    company: 'Clientes en México & Chile',
    date: { es: '2023 – Presente', en: '2023 – Present' },
    intro: {
      es: 'Consultoría y desarrollo de punta a punta: integraciones complejas de backend, inteligencia artificial, pasarelas de pago y despliegues optimizados en servidores VPS.',
      en: 'End-to-end consulting and development: complex backend integrations, AI, payment gateways, and optimized VPS deployments.',
    },
    subProjects: [
      {
        title: { es: 'AI Chatbot e-commerce', en: 'AI e-commerce chatbot' },
        client: 'ProtolyLat',
        description: {
          es: 'Plataforma de chat con LLM conectada a Shopify. Búsqueda semántica de productos y carrito externo sincronizado vía API.',
          en: 'LLM-powered chat platform connected to Shopify. Semantic product search and an external cart synced via API.',
        },
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      },
      {
        title: { es: 'Sync Shopify & Mercado Libre', en: 'Shopify & Mercado Libre sync' },
        client: 'Alfri Chapas',
        description: {
          es: 'Sistema sincrónico para publicar productos de Shopify en Mercado Libre con un botón, usando IA para autorrellenar especificaciones.',
          en: 'A sync system to publish Shopify products to Mercado Libre with one click, using AI to auto-fill specifications.',
        },
        tech: ['C#', 'ASP.NET MVC', 'PostgreSQL', 'Redis'],
      },
      {
        title: { es: 'Chat Widget con IA', en: 'AI chat widget' },
        client: 'VictorManeTattoo (NYC)',
        description: {
          es: 'Widget de chat inteligente en landing page para agendar citas y responder dudas, basado en agente IA de Python.',
          en: 'A smart chat widget on a landing page for booking appointments and answering questions, backed by a Python AI agent.',
        },
        tech: ['Vite', 'React', 'Python', 'OpenAI API'],
      },
      {
        title: { es: 'FinanzIA', en: 'FinanzIA' },
        client: 'Personal',
        description: {
          es: 'App móvil de gastos, suscripciones y deudas asistida por chat de IA contextualizado. En prueba cerrada en Play Store.',
          en: 'A mobile app for spending, subscriptions, and debts assisted by a context-aware AI chat. In closed testing on the Play Store.',
        },
        tech: ['React Native', 'Expo', 'ExpressJS', 'SQLite'],
      },
    ],
  },
  {
    active: false,
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    company: 'TORKE Trabaja Contigo',
    date: { es: '2022 – 2025', en: '2022 – 2025' },
    intro: {
      es: 'Desarrollador principal encargado del soporte, mantenimiento y creación de nuevos productos enlazados al sistema general de ventas y facturación (BMS).',
      en: 'Lead developer responsible for support, maintenance, and new products linked to the general sales and billing system (BMS).',
    },
    achievements: [
      {
        es: '<strong>Optimización de ventas:</strong> integración de la API Ventiapp para sincronizar más de 9,000 productos en marketplaces, incrementando la velocidad de búsqueda de órdenes en un 100%.',
        en: '<strong>Sales optimization:</strong> integrated the Ventiapp API to sync 9,000+ products across marketplaces, increasing order search speed by 100%.',
      },
      {
        es: '<strong>SaaS de reuniones:</strong> plataforma web multi-tenant para minutas y asignación de tareas con roles y permisos granularizados, eliminando fugas de información de Excels compartidos.',
        en: '<strong>Meeting-management SaaS:</strong> a multi-tenant web platform for meeting minutes and task assignment with granular roles and permissions, eliminating information leaks from shared spreadsheets.',
      },
    ],
    tech: ['C#', 'ASP.NET', 'SQL Server', 'Next.js', 'TypeScript', 'Microservicios'],
  },
];
