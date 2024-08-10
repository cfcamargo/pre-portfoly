// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [{ path: '@/components', pathPrefix:false }],
  css: ['@/assets/css/tailwind.css', '@/assets/css/hamburguer.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    '@nuxtjs/color-mode',
    '@nuxt/image',
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: ''
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})