// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import './index.css';
// import App from './App.jsx';
// // import Detaile from './Detaile.jsx';
// import Sofa1 from './Sofa1.jsx';
// import Sofa2 from './Sofa2.jsx';
// import Sofa3 from './Sofa3.jsx';

// // Create the router with defined paths
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   // {
//   //   path: "/product/:productId/:productType",
//   //   element: <Detaile />,
//   // },
//   {
//     path: "/product-details/sofa",  // Unique route for Dining
//     element: <Sofa1 />,
//   },
//   {
//     path: "/product-details/sofa",  // Unique route for Dining
//     element: <Sofa2 />,
//   },
//   {
//     path: "/product-details/sofa",  // Unique route for Kitchen
//     element: <Sofa3 />,
//   },
// ]);

// // Render the app with RouterProvider to handle routing
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
// // import { StrictMode } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// // import './index.css';
// // import App from './App';
// // import SofaDetails from './SofaDetails';

// // const router = createBrowserRouter([
// //   { path: "/", element: <App /> },
// //   { path: "/product-details/sofa/:productId", element: <SofaDetails /> },
// // ]);

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <RouterProvider router={router} />
// //   </StrictMode>
// // );
// index.js or main entry file
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import App from './App';
import SofaDetails from './SofaDetails';
import DiningDetails from './DiningDetails';
import KitchenDetails from './KitchenDetails';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product-details/sofa/:productId", element: <SofaDetails /> }, // Dynamic product details route
  { path: "/product-details/dining/:productId", element: <DiningDetails /> }, // Dynamic product details route
  { path: "/product-details/kitchen/:productId", element: <KitchenDetails /> }, // Dynamic product details route
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
