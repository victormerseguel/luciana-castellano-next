import React from "react";
import PropTypes from "prop-types";

const YTVideo = ({ patch }) => (
  <div style={styles.container}>
    <iframe
      style={styles.iframe}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${patch}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Potencializando Futuros - Caminhos Potentes"
      autoPlay={true}
      frameBorder={0}
    />
  </div>
);

YTVideo.propTypes = {
  patch: PropTypes.string.isRequired,
};

const styles = {
  container: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0,
  },
  iframe: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
};

export default YTVideo;
