import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro configuration with Starlight integration
// https://astro.build/config
export default defineConfig({
  site: 'https://docs.ir.world', // Set your site URL here
  integrations: [
    starlight({
      title: 'iR Engine Documentation',
      description: 'Create realistic immersive experiences directly on the web.',
      logo: {
        dark: '/src/assets/site-logo-white.png',
        light: '/src/assets/site-logo-black.png',
        replacesTitle: true,
      },
      favicon: '/favicon-32x32.png',
      customCss: [
        // Relative path to the custom CSS file
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/EtherealEngine',
      },
      sidebar: [
        {
          label: 'Site navigation',
          slug: 'site-navigation',
        },
        {
          label: 'Introduction',
          collapsed: false,
          items: [
            { label: 'About this site', slug: 'introduction/about-this-site' },
            { label: 'What is iR Engine', slug: 'introduction/ir-engine-overview' },
            { label: 'Glossary', slug: 'introduction/glossary' },
          ],
        },
        {
          label: 'Get started',
          collapsed: false,
          items: [
            {
              label: 'Initial setup',
              collapsed: true,
              items: [
                { label: 'Sign up and login', slug: 'get-started/initial-setup/sign-up-and-login' },
                { label: 'Start a new project', slug: 'get-started/initial-setup/start-a-new-project' },
              ],
            },
            {
              label: 'The iR Engine Studio',
              collapsed: true,
              items: [
                { label: 'Introduction to Studio', slug: 'get-started/ir-engine-studio/introduction-to-studio' },
                {
                  label: 'Studio interface',
                  collapsed: true,
                  items: [
                    { label: 'Hamburger menu (☰)', slug: 'get-started/ir-engine-studio/studio-interface/hamburger-menu' },
                    { label: 'Viewport panel', slug: 'get-started/ir-engine-studio/studio-interface/viewport-panel' },
                    { label: 'Hierarchy tab', slug: 'get-started/ir-engine-studio/studio-interface/hierarchy-tab' },
                    { label: 'Properties panel', slug: 'get-started/ir-engine-studio/studio-interface/properties-panel' },
                    { label: 'Materials inspector', slug: 'get-started/ir-engine-studio/studio-interface/materials-inspector' },
                    { label: 'File browser panel', slug: 'get-started/ir-engine-studio/studio-interface/file-browser-panel' },
                  ],
                },
                { label: 'Navigation controls', slug: 'get-started/ir-engine-studio/navigation-controls' },
              ],
            },
          ],
        },
        {
          label: 'Scene development',
          collapsed: false,
          items: [
            {
              label: 'Build and manage scenes',
              collapsed: true,
              items: [
                { label: 'Add scenes to your project', slug: 'scene-development/building-and-managing-scenes/add-scenes-to-your-project' },
                { label: 'Scene resource guidelines', slug: 'scene-development/building-and-managing-scenes/scene-resource-guidelines' },
              ],
            },
            {
              label: 'Work with assets',
              collapsed: true,
              items: [
                { label: 'Asset types guide', slug: 'scene-development/working-with-assets/asset-types-guide' },
                { label: 'Import files and assets', slug: 'scene-development/working-with-assets/import-files-and-assets' },
                { label: 'Load assets into scenes', slug: 'scene-development/working-with-assets/load-assets-into-scenes' },
                { label: 'Optimize assets for performance', slug: 'scene-development/working-with-assets/optimize-assets-for-performance' },
              ],
            },
          ],
        },
        {
          label: 'Publishing',
          collapsed: false,
          items: [
            { label: 'Publish your projects', slug: 'publishing/publish-your-projects' },
            { label: 'Embed worlds into websites', slug: 'publishing/embed-worlds-into-websites' },
          ],
        },
        {
          label: 'Tutorials and examples',
          collapsed: false,
          items: [
            {
              label: 'Build an Ecommerce store with Shopify integration',
              collapsed: true,
              items: [
                { label: 'Introduction and requirements', slug: 'tutorials-and-examples/build-an-ecommerce-store/introduction-and-prerequisites' },
                { label: 'Configure the Shopify plugin', slug: 'tutorials-and-examples/build-an-ecommerce-store/configure-shopify-plugin' },
                { label: 'Build your store: Templates and ambiance', slug: 'tutorials-and-examples/build-an-ecommerce-store/build-your-store-templates-and-ambiance' },
                { label: 'Load and place Shopify products', slug: 'tutorials-and-examples/build-an-ecommerce-store/load-and-place-shopify-products' },
                { label: 'Add videos to your store', slug: 'tutorials-and-examples/build-an-ecommerce-store/add-videos-to-your-store' },
                { label: 'Set up spatial audio', slug: 'tutorials-and-examples/build-an-ecommerce-store/set-up-spatial-audio' },
                { label: 'Publish your store', slug: 'tutorials-and-examples/build-an-ecommerce-store/publish-your-store' },
              ],
            },
          ],
        },
        {
          label: 'Release notes',
          slug: 'release-notes',
        },
      ],
      components: {
        // Use the custom PageFrame component for layout
        PageFrame: './src/components/CustomPageFrame.astro',
      },
      head: [
        // HTML Meta Tags
        {
          tag: 'title',
          content: 'iR Engine Documentation',
        },
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: 'Create realistic immersive experiences directly on the web.',
          },
        },
        // Open Graph Meta Tags for Facebook
        {
          tag: 'meta',
          attrs: {
            property: 'og:url',
            content: 'https://docs.ir.world/',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'iR Engine Documentation',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Create realistic immersive experiences directly on the web.',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.ir.world/assets/link-preview-background.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'iR Engine - Create realistic immersive experiences directly on the web',
          },
        },
        // Twitter Meta Tags
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:domain',
            content: 'docs.ir.world',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:url',
            content: 'https://docs.ir.world/',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'iR Engine Documentation',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content: 'Create realistic immersive experiences directly on the web.',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://docs.ir.world/assets/link-preview-background.png',
          },
        },
      ],
    }),
  ],
});
