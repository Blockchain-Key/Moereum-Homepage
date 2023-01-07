import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  links: [
    { rel: "icon", href: "/logo.png", type: "image/x-icon" },
  ],
  title:"Moereum",
});
