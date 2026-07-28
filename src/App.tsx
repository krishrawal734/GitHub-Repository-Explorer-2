import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import Spinner from "./components/atoms/Spinner";

import ErrorBoundary from "./utils/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));

const Detail = lazy(() => import("./pages/Detail"));

const Wishlist = lazy(() => import("./pages/Wishlist"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/detail/:owner/:repo" element={<Detail />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
