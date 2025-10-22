// @ts-check

const config = {
  title: 'NoBS Portal Docs',
  tagline: 'Clear, user-friendly documentation for NoBS Portal',
  favicon: 'img/favicon.ico',

  // Set the production url of your site (GitHub Project Pages for now)
  url: 'https://cheminfo.github.io',
  // Served under /nobs-docs/ while using project pages
  baseUrl: '/nobs-docs/',

  // GitHub pages deployment config.
  organizationName: 'cheminfo',
  projectName: 'nobs-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  plugins: ['@orama/plugin-docusaurus-v3'],
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: 'docs',
            editUrl: 'https://github.com/cheminfo/nobs-docs/tree/main/'
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css')
          }
        }
      )
    ]
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'NoBS Docs',
      logo: {
        alt: 'NoBS Logo',
        src: 'img/logo.png'
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { type: 'search', position: 'right' },
        {
          href: 'https://github.com/cheminfo/nobs-docs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' }
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'NoBS Portal', href: 'https://www.nobsportal.org' }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/cheminfo/nobs-docs' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NoBS Portal documentation contributors. Built with Docusaurus.`
    }
  })
};

module.exports = config;
