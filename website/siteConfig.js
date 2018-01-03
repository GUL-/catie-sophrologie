/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Catie Sophrologie - Votre inspiration bien-être, à une inspiration de là.' /* title for your website */,
  tagline: 'Votre inspiration bien-être, à une inspiration de là.',
  url: 'https://www.catie-sophrologie.fr/' /* your website url */,
  baseUrl: '/website/' /* base url for your project */,
  projectName: 'catie-sophrologie',
  headerLinks: [
    {blog: true, label: 'Blog'}
  ],
  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#4058d5',
    secondaryColor: '#4961ff',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
  'Copyright © ' +
  new Date().getFullYear() +
  ' Catie Sophrologie',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'dracula',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  twitter: 'SophroCat',
  facebookAppId: 'catie.sophrologue',
  gaTrackingId: '123'
};

module.exports = siteConfig;
