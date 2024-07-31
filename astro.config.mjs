import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
            { label: 'About this site', link: '/guides/introduction/about-this-site' },
            { label: 'What is iR Engine', link: '/guides/introduction/ir-engine-overview' },
            { label: 'Key terminology', link: '/guides/introduction/key-terminology' },
          ],
        },
        {
          label: 'Get started',
          collapsed: false,
          items: [
            {
              label: 'iR Engine Studio',
              collapsed: true,
              items: [
                { label: 'Introduction to the Studio', link: '/guides/get-started/ir-engine-studio/introduction-to-the-studio' },
                {
                  label: 'Studio interface',
                  collapsed: true,
                  items: [
                    { label: 'Hamburger menu (☰)', link: '/guides/get-started/ir-engine-studio/studio-interface/hamburger-menu' },
                    { label: 'Viewport panel', link: '/guides/get-started/ir-engine-studio/studio-interface/viewport-panel' },
                    { label: 'Hierarchy tab', link: '/guides/get-started/ir-engine-studio/studio-interface/hierarchy-tab' },
                    { label: 'Properties panel', link: '/guides/get-started/ir-engine-studio/studio-interface/properties-panel' },
                    { label: 'Materials inspector', link: '/guides/get-started/ir-engine-studio/studio-interface/materials-inspector' },
                    { label: 'File browser panel', link: '/guides/get-started/ir-engine-studio/studio-interface/file-browser-panel' },
                  ],
                },
                { label: 'Navigation controls', link: '/guides/get-started/ir-engine-studio/navigation-controls' },
              ],
            },
            {
              label: 'Initial setup',
              collapsed: false,
              items: [
                { label: 'Sign up and login', link: '/guides/get-started/initial-setup/sign-up-and-login' },
                { label: 'System requirements', link: '/guides/get-started/initial-setup/system-requirements' },
              ],
            },
            {
              label: 'Creating projects',
              collapsed: true,
              items: [
                { label: 'Understanding Entities', link: '/guides/get-started/creating-projects/understanding-entities' },
                { label: 'Create a Project', link: '/guides/get-started/creating-projects/create-a-project' },
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
                { label: 'Scene budget guidelines', link: '/guides/scene-development/building-and-managing-scenes/scene-budget-guidelines' },
                { label: 'Add scenes to your project', link: '/guides/scene-development/building-and-managing-scenes/add-scenes-to-your-project' },
              ],
            },
            {
              label: 'Working with assets',
              collapsed: true,
              items: [
                { label: 'Asset types', link: '/guides/scene-development/working-with-assets/asset-types' },
                { label: 'Import assets and files', link: '/guides/scene-development/working-with-assets/import-assets-and-files' },
                { label: 'Load assets into scenes', link: '/guides/scene-development/working-with-assets/load-assets-into-scenes' },
                { label: 'Optimize assets for performance', link: '/guides/scene-development/working-with-assets/optimize-assets-for-performance' },
              ],
            },
            { label: 'Entities and components', link: '/guides/scene-development/entities-and-components' },
          ],
        },
        {
          label: 'Publishing',
          collapsed: false,
          items: [
            { label: 'Publish your projects', link: '/guides/publishing/publish-your-projects' },
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
                { label: 'Configure the Shopify plugin', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/configure-shopify-plugin' },
                { label: 'Build your store: Templates and ambiance', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/build-your-store-templates-and-ambiance' },
                { label: 'Load and place Shopify products', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/load-and-place-shopify-products' },
                { label: 'Add videos to your store', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/add-videos-to-your-store' },
                { label: 'Set up spatial audio', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/set-up-spatial-audio' },
				{ label: 'Publish your store', link: '/guides/tutorials-and-examples/build-an-ecommerce-store/publish-your-store' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
