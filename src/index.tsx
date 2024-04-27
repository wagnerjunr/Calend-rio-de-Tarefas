import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Calendar from './Pages/Calendar/Calendar';

import { ChakraProvider } from '@chakra-ui/react'
import { TaskContextProvider } from './Context/TaskContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "calendar",
      element: <Calendar />
    }
  ]
}])
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <TaskContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </TaskContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
