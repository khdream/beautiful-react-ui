import React from 'react';
import Sidebar from '../../src/components/Layout/Sidebar';
import CustomLogo from './CustomLogo';

const CustomSidebar = ({ children }) => (
  <Sidebar isOpen showToggle={false} headerLogo={<CustomLogo/>}>
    {children}
  </Sidebar>
);

export default CustomSidebar;
