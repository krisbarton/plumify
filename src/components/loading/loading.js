import React from 'react';

import Spinner from '../../assets/icons/spinner.svg';

const Loading = () => {

    return (
        <img src={Spinner} className="loading" alt="loading..." />
    )

}

export default Loading;