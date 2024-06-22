import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from './mainLayout';

const ProtectedRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default ProtectedRoute;
