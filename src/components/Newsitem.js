import React from "react";
// import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

/**
 *
 */
class Newsitem extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {};
  //   }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              positio: "absolute",
              right: 0,
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://yt3.googleusercontent.com/xEt8fpZ5Du7kpctZvy2Ts9MLyMyvEWGlXucRgdeQwht2GbxsBTNrIdmUa1_0RtdghfNDJzIa=s900-c-k-c0x00ffffff-no-rj"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Newsitem.propTypes = propTypes;
Newsitem.defaultProps = defaultProps;
// #endregion

export default Newsitem;
