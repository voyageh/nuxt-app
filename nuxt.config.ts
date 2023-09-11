// https://nuxt.com/docs/api/configuration/nuxt-config
const config = process.env;
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: config.NUXT_PUBLIC_PLATFORM_NAME,
    },
  },
  runtimeConfig: {
    public: {
      platformName: "",
      base: "",
    },
  },
  modules: [
    "@element-plus/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/global.scss"],
  imports: {
    dirs: ["store"],
  },
});
