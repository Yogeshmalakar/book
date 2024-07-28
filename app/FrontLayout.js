import React from 'react';
import FrontFooter from './component/FrontFooter';
import FrontHeader from './component/FrontHeader';
import Mainbox from './component/Mainbox';

export default function FrontLayout({ children }) {
  return (
    <>
      <FrontHeader />
      <Mainbox/>
      {children}
      <FrontFooter />
    </>
  );
}
