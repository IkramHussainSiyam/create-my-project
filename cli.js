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
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        "@tailwindcss/aspect-ratio": "^0.4.2",
        "@tailwindcss/forms": "^0.5.9",
        clsx: "^2.1.1",
        "react-hook-form": "^7.53.2",
        "react-icons": "^5.3.0",
        sonner: "^1.7.0",
        "tailwind-merge": "^2.5.4",
        "use-immer": "^0.10.0",
        react: "^18",
        "react-dom": "^18",
        next: "14.2.18",
      },
      devDependencies: {
        postcss: "^8",
        tailwindcss: "^3.4.1",
        eslint: "^8",
        "eslint-config-next": "14.2.18",
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
      message: "Choose your framework:",
      choices: ["Vite", "Next"],
      default: "Next",
    },
    {
      type: "list",
      name: "language",
      message: "Choose your language:",
      choices: ["JavaScript"], // TODO: Add "TypeScript" when you include it
      default: "JavaScript",
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
