#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs-extra";
import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Package.json templates for Next.js and Vite
const packageJsonTemplates = {
  NextJS: {
    JavaScript: {
      name: "",
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "next dev --turbopack",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        "@tailwindcss/aspect-ratio": "^0.4.2",
        "@tailwindcss/forms": "^0.5.9",
        clsx: "^2.1.1",
        "react-hook-form": "^7.54.1",
        "react-icons": "^5.4.0",
        sonner: "^1.7.1",
        "tailwind-merge": "^2.5.4",
        "use-immer": "^0.11.0",
        react: "^19.0.0",
        "react-dom": "^19.0.0",
        next: "^15.1.0",
      },
      devDependencies: {
        postcss: "^8",
        tailwindcss: "^3.4.1",
        eslint: "^9",
        "eslint-config-next": "^15.1.0",
        "@eslint/eslintrc": "^3",
      },
    },
  },
  ViteJS: {
    JavaScript: {
      name: "",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "vite build",
        lint: "eslint .",
        preview: "vite preview",
      },
      dependencies: {
        "@tailwindcss/aspect-ratio": "^0.4.2",
        "@tailwindcss/forms": "^0.5.9",
        clsx: "^2.1.1",
        "tailwind-merge": "^2.5.4",
        "react-hook-form": "^7.53.2",
        react: "^18.3.1",
        "react-dom": "^18.3.1",
        "use-immer": "^0.10.0",
        "react-toastify": "^10.0.6",
      },
      devDependencies: {
        "@eslint/js": "^9.11.1",
        "@types/react": "^18.3.10",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.3.2",
        autoprefixer: "^10.4.20",
        eslint: "^9.11.1",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.12",
        globals: "^15.9.0",
        postcss: "^8.4.47",
        tailwindcss: "^3.4.14",
        vite: "^5.4.8",
      },
    },
    TypeScript: {
      name: "",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc -b && vite build",
        lint: "eslint .",
        preview: "vite preview",
      },
      dependencies: {
        "@radix-ui/react-slot": "^1.1.0",
        "@tailwindcss/aspect-ratio": "^0.4.2",
        "@tailwindcss/forms": "^0.5.9",
        "@tanstack/react-router": "^1.87.7",
        "class-variance-authority": "^0.7.1",
        clsx: "^2.1.1",
        "lucide-react": "^0.462.0",
        "next-themes": "^0.4.3",
        react: "^18.3.1",
        "react-dom": "^18.3.1",
        "react-icons": "^5.3.0",
        sonner: "^1.7.0",
        "tailwind-merge": "^2.5.5",
        "tailwindcss-animate": "^1.0.7",
        "use-immer": "^0.10.0",
      },
      devDependencies: {
        "@eslint/js": "^9.15.0",
        "@tanstack/router-devtools": "^1.87.7",
        "@tanstack/router-plugin": "^1.87.7",
        "@types/node": "^22.10.0",
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "@vitejs/plugin-react": "^4.3.4",
        autoprefixer: "^10.4.20",
        eslint: "^9.15.0",
        "eslint-plugin-react-hooks": "^5.0.0",
        "eslint-plugin-react-refresh": "^0.4.14",
        globals: "^15.12.0",
        postcss: "^8.4.49",
        tailwindcss: "^3.4.15",
        typescript: "~5.6.2",
        "typescript-eslint": "^8.15.0",
        vite: "^6.0.1",
      },
    },
  },
};

async function main() {
  const {
    framework,
    language,
    projectName: rawProjectName,
  } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
      default: "my-project",
      required: true,
    },
    {
      type: "list",
      name: "framework",
      message: "Select your framework:",
      choices: ["Vite", "Next"],
      default: "Next",
    },
    {
      type: "list",
      name: "language",
      message: "Select your language:",
      choices: ["JavaScript", "TypeScript"],
      default: "TypeScript",
    },
  ]);

  // Determine the actual project name
  const projectName =
    rawProjectName === "." ? path.basename(process.cwd()) : rawProjectName;

  const templatePath = path.join(
    __dirname,
    "templates",
    `${framework}JS`,
    language
  );
  const targetPath = path.join(
    process.cwd(),
    rawProjectName === "." ? "" : projectName
  );

  try {
    // Copy template files to the new project directory
    await fs.copy(templatePath, targetPath);

    // Rename gitignore-template to .gitignore in the target directory
    await fs.rename(
      path.join(targetPath, "gitignore-template"),
      path.join(targetPath, ".gitignore")
    );

    // Generate package.json dynamically
    const packageJson = {
      ...packageJsonTemplates[`${framework}JS`][language],
      name: projectName,
    };
    const packageJsonPath = path.join(targetPath, "package.json");
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Initialize Git
    execSync("git init", { cwd: targetPath, stdio: "inherit" });

    // Install dependencies
    execSync("npm install", { cwd: targetPath, stdio: "inherit" });

    console.log("Project created successfully ✅.");
  } catch (error) {
    console.error("❌ Error creating project:", error);
  }
}

main();
