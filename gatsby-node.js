const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const pages = [
    {
      title: 'Homepage',
      slug: '/'
    },

    {
      title: 'Blog',
      slug: '/blog'
    },
    {
      title: 'Blog Item 1',
      slug: '/blog/item-1'
    },
    {
      title: 'Blog Item 2',
      slug: '/blog/item-2'
    },

    {
      title: 'News',
      slug: '/news'
    },
    {
      title: 'News Item 1',
      slug: '/news/item-1'
    },
    {
      title: 'News Item 2',
      slug: '/news/item-2'
    },

    {
      title: 'Contact',
      slug: '/contact'
    }
  ];

  pages.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve('./src/templates/page.js'),
      context: { title: page.title }
    });
  });
}