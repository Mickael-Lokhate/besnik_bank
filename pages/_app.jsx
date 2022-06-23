import React from "react";
import Header from "../components/Header";
import "../styles/global_style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
