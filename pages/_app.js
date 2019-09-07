import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { initializeBLStore } from "../src/redux/store";
import Head from "../src/generic/head";
import Layout from "../src/components/layout/layout";

class BLApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head />
        <Provider store={initializeBLStore()}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default BLApp;
