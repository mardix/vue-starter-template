# vue-starter-template

A Vue3/Vite starter template to build website with Tailwind, Pinia, DaisyUI, and Markdown.

Inspired by [Vitesse](https://github.com/antfu/vitesse) ❤

---

## Quick Setup

In a brand new repository

```bash
npx degit mardix/vue-starter-template .

npm install

# or 
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

```

---

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next)

- [Vite](https://github.com/vitejs/vite)

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- 🌍 [I18n ready](./locales)

- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.

- DaisyUI

- Dayjs 

- Lodash 

- Markdown

- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)
  
- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript, of course

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/)
  - [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
  - [TailwindCSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [TailwindCSS Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets 
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [TailwindCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - IDE support for Tailwind CSS
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mardix/vue-starter-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit mardix/vue-starter-template .

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

# or 
npm install

```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Preview in Https

Just run and visit https://localhost

```bash
pnpm build && pnpm run https-preview
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
