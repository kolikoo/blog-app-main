import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  const componentsPath = `${srcPath}/components`;
  const pagesPath = `${srcPath}/pages`;
  const assetPath = `${srcPath}/assets`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
        "&": componentsPath,
        "#": pagesPath,
        "!": assetPath,
      },
    },
  };
});
