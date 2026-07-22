import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import Spinner from "./components/atoms/Spinner";

import ErrorBoundary from "./utils/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));

const Detail = lazy(() => import("./pages/Detail"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/detail/:fullName" element={<Detail />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
