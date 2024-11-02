import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { menuItems } from './data/menuItems';
import RootLayout from './layouts/RootLayout';

const App = () => {
  return (
    <RootLayout>
      <Routes>
        {menuItems.map((item) => (
          <Route key={item.id} path={item.urlPattern} element={<item.element.type />} />
        ))}
      </Routes>
    </RootLayout>
  );
};

export default App;
