import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), tsConfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});


