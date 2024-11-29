import React from 'react';

const SearchBar = ({ destination, setDestination, date, setDate, travelMode, setTravelMode, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                
                placeholder="Enter your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <input
                type="date"
               
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select
               
                value={travelMode}
                onChange={(e) => setTravelMode(e.target.value)}
            >
                <option value="" disabled>Choose your way</option>
                <option value="By air">By air</option>
                <option value="By ship">By ship</option>
                <option value="By train">By train</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
