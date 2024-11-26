import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import React from "react";
import Layout from "./routes/Layout/Layout";
import { userLoader, usersLoader, albumLoader, albumsLoader } from "./utils/loaders";
import "./App.css";
import ErrorComponent from "./components/ErrorComponent";
const Albums = React.lazy(() => import("./routes/Albums"));
const Album = React.lazy(() => import("./routes/Album/Album"));
const Users = React.lazy(() => import("./routes/Users"));
const User = React.lazy(() => import("./routes/User"));
const NotFound = React.lazy(() => import("./routes/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <React.Suspense fallback={<>...Loading</>}>
          <Layout />
        </React.Suspense>
      }
    >
      <Route path="/" element={<Users />} loader={usersLoader} errorElement={<ErrorComponent />} />
      <Route path="/users/:id" element={<User />} loader={userLoader} errorElement={<ErrorComponent />} />
      <Route
        path="/albums"
        element={<Albums />}
        loader={albumsLoader}
        errorElement={<ErrorComponent retry={albumsLoader} />}
      />
      <Route
        path="/albums/:id"
        element={<Album />}
        loader={albumLoader}
        errorElement={<ErrorComponent retry={albumLoader} />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
