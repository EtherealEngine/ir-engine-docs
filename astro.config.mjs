import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro configuration with Starlight integration
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'iR Engine Docs',
      customCss: [
        // Relative path to the custom CSS file
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/EtherealEngine',
      },
      sidebar: [
        {
          label: 'Introduction',
          collapsed: false,
          items: [
            { label: 'About this site', slug: 'guides/introduction/about-this-site' },
            { label: 'What is iR Engine', slug: 'guides/introduction/ir-engine-overview' },
            { label: 'Glossary', slug: 'guides/introduction/glossary' },
          ],
        },
        {
          label: 'Get started',
          collapsed: false,
          items: [
            {
              label: 'The iR Engine Studio',
              collapsed: true,
              items: [
                { label: 'Introduction to Studio', slug: 'guides/get-started/ir-engine-studio/introduction-to-studio' },
                {
                  label: 'Studio interface',
                  collapsed: true,
                  items: [
                    { label: 'Hamburger menu (☰)', slug: 'guides/get-started/ir-engine-studio/studio-interface/hamburger-menu' },
                    { label: 'Viewport panel', slug: 'guides/get-started/ir-engine-studio/studio-interface/viewport-panel' },
                    { label: 'Hierarchy tab', slug: 'guides/get-started/ir-engine-studio/studio-interface/hierarchy-tab' },
                    { label: 'Properties panel', slug: 'guides/get-started/ir-engine-studio/studio-interface/properties-panel' },
                    { label: 'Materials inspector', slug: 'guides/get-started/ir-engine-studio/studio-interface/materials-inspector' },
                    { label: 'File browser panel', slug: 'guides/get-started/ir-engine-studio/studio-interface/file-browser-panel' },
                  ],
                },
                { label: 'Navigation controls', slug: 'guides/get-started/ir-engine-studio/navigation-controls' },
              ],
            },
            {
              label: 'Initial setup',
              collapsed: true,
              items: [
                { label: 'Sign up and login', slug: 'guides/get-started/initial-setup/sign-up-and-login' },
                { label: 'System requirements', slug: 'guides/get-started/initial-setup/system-requirements' },
              ],
            },
            {
              label: 'Creating projects',
              collapsed: true,
              items: [
                { label: 'Understanding Entities', slug: 'guides/get-started/creating-projects/understanding-entities' },
                { label: 'Create a Project', slug: 'guides/get-started/creating-projects/create-a-project' },
              ],
            },
          ],
        },
        {
          label: 'Scene development',
          collapsed: false,
          items: [
            {
              label: 'Building and managing scenes',
              collapsed: true,
              items: [
                { label: 'Scene budget guidelines', slug: 'guides/scene-development/building-and-managing-scenes/scene-budget-guidelines' },
                { label: 'Add scenes to your project', slug: 'guides/scene-development/building-and-managing-scenes/add-scenes-to-your-project' },
              ],
            },
            {
              label: 'Working with assets',
              collapsed: true,
              items: [
                { label: 'Asset types', slug: 'guides/scene-development/working-with-assets/asset-types' },
                { label: 'Import assets and files', slug: 'guides/scene-development/working-with-assets/import-assets-and-files' },
                { label: 'Load assets into scenes', slug: 'guides/scene-development/working-with-assets/load-assets-into-scenes' },
                { label: 'Optimize assets for performance', slug: 'guides/scene-development/working-with-assets/optimize-assets-for-performance' },
              ],
            },
            { label: 'Entities and components', slug: 'guides/scene-development/entities-and-components' },
          ],
        },
        {
          label: 'Publishing',
          collapsed: false,
          items: [
            { label: 'Publish your projects', slug: 'guides/publishing/publish-your-projects' },
          ],
        },
        {
          label: 'Tutorials and examples',
          collapsed: false,
          items: [
            {
              label: 'Build an Ecommerce Store',
              collapsed: true,
              items: [
                { label: 'Configure the Shopify plugin', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/configure-shopify-plugin' },
                { label: 'Build your store: Templates and ambiance', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/build-your-store-templates-and-ambiance' },
                { label: 'Load and place Shopify products', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/load-and-place-shopify-products' },
                { label: 'Add videos to your store', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/add-videos-to-your-store' },
                { label: 'Set up spatial audio', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/set-up-spatial-audio' },
                { label: 'Publish your store', slug: 'guides/tutorials-and-examples/build-an-ecommerce-store/publish-your-store' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
