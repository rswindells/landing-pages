// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: true,
  app: {
    baseURL: "/landing-pages/",
  },
  experimental: {
    payloadExtraction: true,
  },
  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          colors: {
            "brand-primary-blue": "hsl(233, 26%, 24%)",
            "brand-primary-green": "hsl(136, 65%, 51%)",
            "brand-primary-cyan": "hsl(192, 70%, 51%)",
            "brand-neutral-blue": "hsl(233, 8%, 62%)",
            "brand-neutral-light-blue": "hsl(220, 16%, 96%)",
            "brand-neutral-light-gray": "hsl(0, 0%, 98%)",
            "brand-neutral-white": "hsl(0, 0%, 100%)",
          },
          fontSize: {
            "body-copy": "1.125rem",
          },
          screens: {
            mobile: "375px",
          },
          backgroundImage: {
            "brand-gradient":
              "linear-gradient(160deg, #33D35E 0%, #2AB6D9 100%)",
          },
        },
      },
    },
  },
});
