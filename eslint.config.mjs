import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double", { avoidEscape: true }],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "no-console": ["error", { allow: ["info", "error", "warn"] }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "import",
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "import",
        },
        {
          blankLine: "any",
          prev: "import",
          next: "import",
        },
      ],
    },
  }),
  {
    ignores: [".next/", ".next"],
  },
];

export default eslintConfig;
