import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 150 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="150" height="90" />
    <rect x="0" y="100" rx="5" ry="5" width="150" height="20" />
    <rect x="0" y="130" rx="5" ry="5" width="100" height="20" />
    <rect x="0" y="170" rx="5" ry="5" width="70" height="30" />
    <rect x="118" y="168" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default Loader;
