// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
      'Open+Sans': [400, 600],
      'DM+Mono': [400],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Curso N8N ao Vivo — Automatize WhatsApp e Vendas | Faz que Vende',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Aprenda N8N do zero em 4 aulas ao vivo aos sábados com Nattan Lima. Automatize WhatsApp, CRM e vendas. Turma limitada — Abril 2026. R$997,50.',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Curso N8N ao Vivo — Automatize WhatsApp e Vendas | Faz que Vende',
        },
        {
          property: 'og:description',
          content:
            'Aprenda N8N do zero em 4 aulas ao vivo aos sábados com Nattan Lima. Automatize WhatsApp, CRM e vendas. Turma limitada — Abril 2026. R$997,50.',
        },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://n8n.fazqvende.com.br' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#020617' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  nitro: {
    preset: 'static',
  },

  runtimeConfig: {
    public: {
      checkoutUrl: process.env.NUXT_PUBLIC_CHECKOUT_URL || 'https://kiwify.app/LINK-AQUI',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999',
    },
  },
})
