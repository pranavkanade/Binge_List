import React from "react";
import App, { Container } from "next/app";
import Head from "../src/generic/head";
import Layout from "../src/components/layout/layout";

class BLApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default BLApp;
