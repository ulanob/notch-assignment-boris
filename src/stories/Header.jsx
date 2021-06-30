import React from 'react';

import './sass/styles.scss';

export const Header = ({ backgroundColor, ...props }) => {
  return (
    <header>
      <a href="https://www.notchordering.com/">
        <img src="https://storage.googleapis.com/chefhero-storage-release/interview/logo.svg" alt="Notch logo" />
      </a>
    </header >
  )
}