import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { menuItems } from './data/menuItems';
import RootLayout from './layouts/RootLayout';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer'; // Assuming this is the path
import './index.css';
import { data } from './data/module-data';

const App = () => {
  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={<item.element.type />} />
          ))}
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
};

export default App;
