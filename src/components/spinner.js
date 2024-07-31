import React from 'react';
import loading from './loading.gif';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Spinner extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className='text-center'>
            <img src={loading} alt="loading" />
        </div>;
    }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
// #endregion

export default Spinner;