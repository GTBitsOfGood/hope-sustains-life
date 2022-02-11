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

const MyApp = ({ Component, pageProps, router, currentUser }) => (
  <>
    <Head>
      <title>Hope Sustains Life</title>
    </Head>
    <div className="App">
      {!(
        router.pathname.includes("admin") ||
        router.pathname.includes("resetpassword")
      ) && <NavBar />}
      <div className="Content">
        <Component {...pageProps} currentUser={currentUser} />
        {!(
          router.pathname.includes("admin") ||
          router.pathname.includes("resetpassword")
        ) && (
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
      if (route === urls.pages.admin.index) {
        if (res) {
          res.writeHead(301, { Location: urls.pages.admin.blogs });
          res.end();
        } else {
          return Router.replace(urls.pages.admin.blogs);
        }
      }
      return {
        ...appProps,
        currentUser: user,
      };
    })
    .catch(() => {
      if (
        route.startsWith(urls.pages.admin.index) &&
        route !== urls.pages.admin.index
      ) {
        if (res) {
          res.writeHead(301, { Location: urls.pages.admin.index });
          res.end();
        } else {
          return Router.replace(urls.pages.admin.index);
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
