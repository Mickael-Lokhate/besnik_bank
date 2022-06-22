import React from "react";
import Header from "../components/Header";
import "../styles/global_style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Header />
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
