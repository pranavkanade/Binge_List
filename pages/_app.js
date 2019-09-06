import React from "react";
import App, { Container } from "next/app";
import Head from "../src/generic/head";

class BLApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default BLApp;
