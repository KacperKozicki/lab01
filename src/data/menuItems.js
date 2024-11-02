import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';
import Lab3 from '../pages/Lab3';
import Lab4Add from '../pages/Lab4Add';

export const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",  
    urlPattern: "/lab2/:id?",
    element: <Lab2 />,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",  
    urlPattern: "/lab3",
    element: <Lab3 />,
  },
  {
    id: 6,
    label: "Add Car",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <Lab4Add />,
  }
];
