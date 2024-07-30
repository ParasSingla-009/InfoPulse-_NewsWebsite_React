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
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div   className="card" style={{width: "18rem"}}>
          <img src={imageUrl}   className="card-img-top" alt="..." />
          <div   className="card-body">
            <h5   className="card-title">{title}</h5>
            <p   className="card-text">{description}
            </p>
            <a href="/newsdetail/"   className="btn btn-sm btn-primary">
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
