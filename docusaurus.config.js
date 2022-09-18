// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Front-end Cheatsheet",
  tagline:
    " Cheatsheets or popular programming languages, frameworks and development tools based on front-end . They include everything you should know in one single file.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/react-v2.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SAMBIT20", // Usually your GitHub org/user name.
  projectName: "frontend-cheatsheets", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SAMBIT20/frontend-cheatsheets",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/SAMBIT20/frontend-cheatsheets",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Frontend Cheatsheets",
        logo: {
          alt: "Front-end Cheatsheet's",
          src: "img/react-v2.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Cheatsheets",
          },
          {
            href: "https://github.com/SAMBIT20/frontend-cheatsheets",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "React",
                to: "/docs/category/react-cheatsheet",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/frontend",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/sambit_dev",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/SAMBIT20/frontend-cheatsheets",
              },
            ],
          },
        ],
        logo: {
          alt: "Frontend Cheatsheets Logo",
          src: "img/react-v2.png",
          // maxWidth: 128,
          style: { maxWidth: 60, maxHeight: 60 },
        },
        copyright: `Copyright © ${new Date().getFullYear()} Frontend Cheatsheets`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme
      },
    }),
};

module.exports = config;
