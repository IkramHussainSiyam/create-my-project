#!/usr/bin/env node

// TODO (for later): update in `package.json` deps from `react-toastify` to `sonner`.

import { execSync } from "child_process";
import fs from "fs-extra";
import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const {
    framework,
    language,
    projectName: rawProjectName,
  } = await inquirer.prompt([
    { type: "input", name: "projectName", message: "Enter project name:" },
    {
      type: "list",
      name: "framework",
      message: "Choose your framework:",
      choices: ["Vite", "Next"],
    },
    {
      type: "list",
      name: "language",
      message: "Choose your language:",
      choices: ["JavaScript"],
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

    // Update package.json with the project name
    const packageJsonPath = path.join(targetPath, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Initialize Git
    execSync("git init", { cwd: targetPath, stdio: "inherit" });

    // Install dependencies
    execSync("npm install", { cwd: targetPath, stdio: "inherit" });

    console.log("Project created successfully.");
  } catch (error) {
    console.error("Error creating project:", error);
  }
}

main();
