import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { menuItems } from './data/menuItems';
import RootLayout from './layouts/RootLayout';
import AppProvider from './components/AppProvider';
import './index.css';

const App = () => {
  return (
    <AppProvider>
      <RootLayout>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={<item.element.type />} />
          ))}
        </Routes>
      </RootLayout>
    </AppProvider>
  );
};

export default App;
