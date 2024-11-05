import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./routes/Layout";
import { userLoader, usersLoader, albumLoader, albumsLoader } from "./utils/loaders";
import "./App.css";
import NotFound from "./routes/NotFound";

const Albums = React.lazy(() => import("./routes/Albums"));
const Album = React.lazy(() => import("./routes/Album"));
const Users = React.lazy(() => import("./routes/Users"));
const User = React.lazy(() => import("./routes/User"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Users />} loader={usersLoader} />
      <Route path="/users/:id" element={<User />} loader={userLoader} />
      <Route path="/albums" element={<Albums />} loader={albumsLoader} />
      <Route path="/albums/:id" element={<Album />} loader={albumLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
