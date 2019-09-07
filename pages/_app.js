import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { initializeBLStore } from "../src/redux/store";
import Head from "../src/generic/head";
import Layout from "../src/components/layout/layout";

class BLApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head />
        <Provider store={initializeBLStore()}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    );
  }
}

export default BLApp;
