import React from 'React';

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