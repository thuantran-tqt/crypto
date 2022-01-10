module.exports = {
  title: "Edward Tran's Crypto Blog",
  tagline: 'From Zero to Hero on Crypto Journey Investment',
  url: 'https://azfrontend.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'edwardtran97', // Usually your GitHub org/user name.
  projectName: 'crypto', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CRYPTO BLOG',
      logo: {
        alt: 'Crypto Blog logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/edwardtran97/crypto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Trải nghiệm đầu tư',
              to: 'docs/doc1',
            },

            {
              label: 'Bài học đầu tư',
              to: 'docs/js-overview',
            },

            {
              label: 'Phân tích',
              to: 'docs/git-blog',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/edwardtran97',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/edwardtran0902',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/edwardtran97/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/edwardtran0902',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: "Bao's Invest",
              href: 'https://t.me/BAO_Invest',
            },
            {
              label: 'Thuan Capital',
              href: 'https://t.me/ThuanCapital',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edward Tran. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
