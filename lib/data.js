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

export default packageJsonTemplates;
