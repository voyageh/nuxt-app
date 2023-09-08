// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
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
