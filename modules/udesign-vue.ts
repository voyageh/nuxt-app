import { defineNuxtModule } from "@nuxt/kit";
import Components from "unplugin-vue-components/vite";
import UdesignResolvers from "udesign-vue/resolvers";

export default defineNuxtModule({
  setup(_options, nuxt) {
    nuxt.hook("vite:extendConfig", (config) => {
      config.plugins ||= [];
      config.plugins.push(
        Components({
          dts: "components.d.ts",
          resolvers: [UdesignResolvers()],
        })
      );
    });
  },
});
