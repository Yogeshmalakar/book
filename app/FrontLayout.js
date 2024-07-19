import React from 'react';
import FrontFooter from './component/FrontFooter';
import FrontHeader from './component/FrontHeader';

export default function FrontLayout({ children }) {
  return (
    <>
      <FrontHeader />
      {children}
      <FrontFooter />
    </>
  );
}
