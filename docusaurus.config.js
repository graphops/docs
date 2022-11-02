// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");
// Override code block theme
const customDarkTheme = {
  ...darkCodeTheme,
  plain: { color: "#bfc7d5", backgroundColor: "#243D42" },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GraphOps Docs",
  tagline: "Documentation and resources for Graph Protocol",
  url: "https://docs.graphops.xyz/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "graphops", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  // Waiting for docusauras canary to be released for mermaid support: https://docusaurus.io/docs/next/markdown-features/diagrams
  // themes: ['@docusaurus/theme-mermaid'],
  // markdown: {
  //   mermaid: true,
  // },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/graphops/docs/edit/main/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/graphops/docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Documentation",
        logo: {
          alt: "GraphOps Logo",
          src: "/img/logo.svg",
          srcDark: "/img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "mips-resources/intro",
            position: "left",
            label: "MIPs Resources",
          },
          // Commented out while these sections are in progress
          // {
          //   type: 'doc',
          //   docId: 'launchpad/intro',
          //   position: 'left',
          //   label: 'Launchpad',
          // },
          //// Not ready but uncomment to view in dev
          {
            type: "doc",
            docId: "graphcast/intro",
            position: "left",
            label: "Graphcast",
          },
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/graphops/docs",
            label: "Docs on GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
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
            title: "Graph Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/graphprotocol",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/graphprotocol",
              },
              {
                label: "GitHub",
                href: "https://github.com/graphprotocol",
              },
            ],
          },
          {
            title: "Indexer Office Hours",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/TheGraphIOH",
              },
              {
                label: "YouTube Recordings",
                href: "https://www.youtube.com/channel/UCQ7G_cCufIVUdUUUf-jdoVA",
              },
              {
                label: "All Prior Calls & Agendas",
                href: "https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a",
              },
            ],
          },
          {
            title: "GraphOps",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/graphopsxyz",
              },
              {
                label: "GitHub",
                href: "https://github.com/graphops",
              },
              {
                label: "Website",
                href: "https://graphops.xyz",
              },
            ],
          },
        ],
        copyright: ` `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: customDarkTheme,
        additionalLanguages: ["solidity", "json5", "toml"],
      },
      // metadata: [ // TODO: Take screenshot for rendering previews
      //   {property: "og:image", content: "/img/image.png"},
      //   {property: "og:image:width", content: "1200"},
      //   {property: "og:image:height", content: "630"}
      // ]
    }),
};

module.exports = config;
