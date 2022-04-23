import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import { AuthProvider } from 'contexts/auth';
import { VideosProvider } from "contexts/videos";
import Layout from 'components/layout';
import LazyLoaded from './lazy-loaded';
import PrivateRoute from './private-route';
import LoginPage from 'pages/login';
import SignUpPage from 'pages/sign-up';

const CreateVideo = React.lazy(() => import("./pages/create-video"));
const BrowseVideos = React.lazy(() => import("./pages/browse-videos"));
const MyAccount = React.lazy(() => import("./pages/my-account"));

const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
    (child, Provider) => <Provider>{child}</Provider>,
    children
  );
};

const Providers = composeProviders(
  AuthProvider,
  VideosProvider
);

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/create-video" replace />} />
            <Route
              path="/create-video"
              element={
                <PrivateRoute>
                  <LazyLoaded>
                    <CreateVideo />
                  </LazyLoaded>
                </PrivateRoute>
              }
            />
            <Route
              path="/browse"
              element={
                <PrivateRoute>
                  <LazyLoaded>
                    <BrowseVideos />
                  </LazyLoaded>
                </PrivateRoute>
              }
            />
            <Route
              path="/my-account"
              element={
                <PrivateRoute>
                  <LazyLoaded>
                    <MyAccount />
                  </LazyLoaded>
                </PrivateRoute>
              }
            />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
