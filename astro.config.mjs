import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Usamos el adaptador oficial de Vercel para despliegues Serverless/Static híbridos en Vercel.
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
