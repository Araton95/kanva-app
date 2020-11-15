/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import "./src/assets/fonts/style.css";
// import "./src/styles/global.css";
import "./node_modules/antd/dist/antd.css";
import "./node_modules/video-react/dist/video-react.css"; // import css
import "./node_modules/rodal/lib/rodal.css";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}