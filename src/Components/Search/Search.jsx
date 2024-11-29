import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultContainer from '../SearchResult/SearchResult';
import './Search.css';

const Search = () => {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [travelMode, setTravelMode] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formattedDate = date? date.split('-').reverse().join('-'):''; 

            
            const response = await fetch(`http://localhost:3000/destinations?city=${destination.toUpperCase()}&dateOfTravel=${formattedDate}&travelMethod=${travelMode}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch destinations');
            }

            const data = await response.json();
            if (data.length === 0) {
                setError('No destinations found for your search criteria.');
            } else {
                setSearchResults(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-data" id="search-section">
            <h3>Where do you want to go?</h3>
            <SearchBar
                destination={destination}
                setDestination={setDestination}
                date={date}
                setDate={setDate}
                travelMode={travelMode}
                setTravelMode={setTravelMode}
                handleSubmit={handleSubmit}
            />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <SearchResultContainer results={searchResults} />
            )}
        </div>
    );
};

export default Search;
