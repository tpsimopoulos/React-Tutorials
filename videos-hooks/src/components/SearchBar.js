import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <input
                        type='text'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}>
                    </input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;