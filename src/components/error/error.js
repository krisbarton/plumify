import React from 'react';

const SearchError = ({ message }) => {

    return (
        <section>
            <h2>Woah there!</h2>
            <p>{message}</p>
            <p>Please try again later.</p>
        </section>
    )

}

export default SearchError;