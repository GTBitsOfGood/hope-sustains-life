import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { getCurrentUser } from "../actions/User";
import urls from "../../utils/urls";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "focus-visible/dist/focus-visible.min.js";
import "react-quill/dist/quill.snow.css";
import "normalize.css";
import "../../public/static/styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "../components/NavBar/NavBar.css";

const MyApp = ({ Component, pageProps, router, currentUser }) => (
  <>
    <Head>
      <title>Next.js-Starter</title>
    </Head>
    <div className="App">
    <NavBar/>
      <Footer/>
      <div className="Content">
        <Component {...pageProps} currentUser={currentUser} />
      </div>
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
      if (route === "/login") {
        if (res) {
          res.writeHead(301, { Location: urls.pages.app.home });
          res.end();
        } else {
          return Router.replace(urls.pages.app.home);
        }
      }

      return {
        ...appProps,
        currentUser: user,
      };
    })
    .catch(() => {
      if (route.startsWith("/app")) {
        if (res) {
          res.writeHead(301, { Location: urls.pages.index });
          res.end();
        } else {
          return Router.replace(urls.pages.index);
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
