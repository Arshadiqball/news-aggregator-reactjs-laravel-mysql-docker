import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { isAuthenticated } from './assets/utils/helper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from "uuid"
import { router } from "./config/config"
import { UserProvider } from './context/UserContext'

// Lazy-loaded components
const Header = lazy(() => import("./views/Home/Header"))
const Sections = lazy(() => import("./views/Home/Sections"))
const CategoryNews = lazy(() => import("./views/CategoryNews/CategoryNews"))
const Search = lazy(() => import("./views/Search/Search"))
const Profile = lazy(() => import("./views/Profile/Profile"))
const Login = lazy(() => import("./views/Login/Login"))
const Register = lazy(() => import("./views/Register/Register"))
const Footer = lazy(() => import("./views/Home/Footer"))

function RouteComponent() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<center><div className="spinner-border button__spinner" role="status">
                    <span className="sr-only">Loading...</span>
                  </div></center>}>
          {isAuthenticated() && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated() ? (
                  <Sections />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/search/:query"
              element={
                isAuthenticated() ? (
                  <Search />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated() ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated() ? (
                  <Navigate to="/" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated() ? (
                  <Navigate to="/" />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path="*"
              element={<Navigate to="/login" />}
            />
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  !isAuthenticated() ? (
                    <Navigate to="/login" />
                  ) : (

                    <CategoryNews
                      key={path.key}
                      newscategory={path.category}
                      country={path.country}
                    />
                  )
                }
              />
            ))}
          </Routes>
          {isAuthenticated() && <Footer />}
          <ToastContainer />
        </Suspense>
      </Router>
    </UserProvider>
  )
}

export default RouteComponent
