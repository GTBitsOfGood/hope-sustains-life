import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { ToastContainer } from "react-toastify";
import { getCurrentUser } from "../actions/User";
import urls from "../../utils/urls";
import EmailSubInput from "../components/EmailSubInput";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "focus-visible/dist/focus-visible.min.js";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "normalize.css";
import "../../public/static/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/NavBar/Navbar.css";

const MyApp = ({ Component, pageProps, router, currentUser }) => (
  <>
    <Head>
      <title>Hope Sustains Life</title>
    </Head>
    <div className="App">
      {!router.pathname.includes("admin") && <NavBar />}
      <div className="Content">
        <Component {...pageProps} currentUser={currentUser} />
        {!router.pathname.includes("admin") && (
          <>
            <EmailSubInput />
            <Footer />
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  </>
);

MyApp.getInitialProps = async (appContext) => {
  const { res } = appContext.ctx;

  const appProps = await App.getInitialProps(appContext);

  const cookies = appContext.ctx.req ? appContext.ctx.req.headers.cookie : null;

  const route = appContext.ctx.asPath;

  return getCurrentUser(cookies)
    .then((user) => {
      if (route === "/admin") {
        if (res) {
          res.writeHead(301, { Location: urls.pages.adminHome });
          res.end();
        } else {
          return Router.replace(urls.pages.adminHome);
        }
      }

      return {
        ...appProps,
        currentUser: user,
      };
    })
    .catch(() => {
      if (route.startsWith("/admin") && route !== "/admin") {
        if (res) {
          res.writeHead(301, { Location: urls.pages.admin });
          res.end();
        } else {
          return Router.replace(urls.pages.admin);
        }
      }

      return appProps;
    });
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

MyApp.defaultProps = {
  currentUser: null,
};

export default MyApp;
