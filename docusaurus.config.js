module.exports = {
  title: 'Edward Tran Front-end Blog',
  tagline: 'From Zero to Hero on Front-end Career Path',
  url: 'https://azfrontend.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'edwardtran97', // Usually your GitHub org/user name.
  projectName: 'frontend-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EDWARD TRAN',
      logo: {
        alt: 'Edward Tran logo',
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
          href: 'https://github.com/edwardtran97/frontend-blog',
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
              label: 'HTML & CSS',
              to: 'docs/doc1',
            },

            {
              label: 'Javascript',
              to: 'docs/js-overview',
            },

            {
              label: 'Git',
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
              href: 'https://t.me/edwardtran97',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/edwardtran97/',
            },
          ],
        },
        {
          title: 'Developers Community',
          items: [
            {
              label: 'Easy Frontend',
              href: 'https://www.ezfrontend.com/',
            },
            {
              label: 'Evondev',
              href: 'https://evondev.com/',
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
