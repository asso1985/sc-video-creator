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
import PrivateRoute from './PrivateRoute';
import LoginPage from 'pages/login';
import CreateVideo from 'pages/create-video';
import BrowseVideos from 'pages/browse-videos';
import MyAccount from 'pages/my-account';
import SignUpPage from 'pages/sign-up';

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
                  <CreateVideo />
                </PrivateRoute>
              }
            />
            <Route
              path="/browse"
              element={
                <PrivateRoute>
                  <BrowseVideos />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-account"
              element={
                <PrivateRoute>
                  <MyAccount />
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
