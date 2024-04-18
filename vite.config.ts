import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/

//@ts-ignore
const root = resolve(__dirname, "src");

//@ts-ignore
const public_dir = resolve(__dirname, "public");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": resolve(root, "components"),
      "@Styles": resolve(root, "styles"),
      "@PublicImages": resolve(public_dir, "./images"),
      "@Constants": resolve(root, "./constants"),
    },
  },
});
