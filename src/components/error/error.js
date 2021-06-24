import React from 'react';

const SearchError = ({ message }) => {

    return (
        <section className="error fadeIn">
            <section className="slideIn layout">
                <header>
                    <h2>Woah there!</h2>
                </header>
                <p>{message}</p>
                <p>Please try again later.</p>
            </section>
        </section>
    )

}

export default SearchError;