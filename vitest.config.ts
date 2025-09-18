import { defineConfig } from "vitest/config";
export default defineConfig({
    test: {
        watch: false,
        silent: "passed-only",
        include: ["./tests/**/*.test.ts"],
    },
});
// ["**/*.{test,spec}.?(c|m)[jt]s?(x)"];
