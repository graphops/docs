// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight'); 
// Override code block theme
const customDarkTheme = { ...darkCodeTheme, plain: {color:"#bfc7d5",backgroundColor: "#243D42"}}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphOps Docs',
  tagline: 'Documentation and resources for Graph Protocol',
  url: 'https://docs.graphops.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'graphops', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/graphops/docs/edit/main/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/graphops/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'GraphOps Logo',
          src: '/img/logo.svg',
          srcDark: '/img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'mips-resources/intro',
            position: 'left',
            label: 'MIPs Resources',
          },
          {
            type: 'doc',
            docId: 'launchpad/intro',
            position: 'left',
            label: 'Launchpad',
          },
          {
            type: 'doc',
            docId: 'gossip-network/intro',
            position: 'left',
            label: 'Gossip Network',
          },
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/graphops/docs',
            label: 'Docs on GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: "GraphOps Logo",
        //   src: '/img/logo.svg',
        //   srcDark: '/img/logo.svg',
        //   width: "30px",
        //   height: "30px",
        //   href: "https://graphops.xyz/"
        // },
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/graphopsxyz',
              },
              {
                label: 'Graph Protocol Discord',
                href: 'https://discord.com/invite/graphprotocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/graphopsxyz/',
              },
            ],
          },
        ],
        copyright: ` `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: customDarkTheme,
        additionalLanguages: ['solidity', 'json5', 'toml'],
      },
      metadata: [ // TODO: Take screenshot for rendering previews
        {property: "og:image", content: "/img/image.png"},
        {property: "og:image:width", content: "1200"},
        {property: "og:image:height", content: "630"}
      ]
    }),
};

module.exports = config;
