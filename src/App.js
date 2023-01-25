import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { APP_COLORS } from "./constants/colors";
import "./scss/style.scss";
const Home = lazy(() => import("./views/home"));

const loading = (
  <div className="pt-3 text-center">
    <div
      className="sk-spinner sk-spinner-pulse"
      color={APP_COLORS.DARK_GREEN}
    ></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      // <HashRouter>
      //   <Suspense fallback={loading}>
      //     <Routes>
      //       <Route exact path="/login" name="Login Page" element={<Login />} />
      //       <Route exact path="/register" name="Register Page" element={<Register />} />
      //       <Route exact path="/404" name="Page 404" element={<Page404 />} />
      //       <Route exact path="/500" name="Page 500" element={<Page500 />} />
      //       <Route path="*" name="Home" element={<DefaultLayout />} />
      //     </Routes>
      //   </Suspense>
      // </HashRouter>
      <>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={loading}>
                  <Home />
                </Suspense>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            <Route exact path="/404" element={<Page404 />} />
            <Route exact path="/500" element={<Page500 />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
