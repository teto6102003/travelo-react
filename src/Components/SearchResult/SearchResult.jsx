import React from 'react';
import './SearchResult.css'; 

const SearchResultContainer = ({ results }) => {
    return (
        <div className="search-result-continer">
            {results.length > 0 ? (
                results.map((result) => (
                    <div className="place" key={result.id}>
                        <img
                            alt={result.city}
                            height="400"
                            src={result.photoURL}
                            width="600"
                        />
                        <div className="details">
                            <div className="price">${result.price}</div>
                            <div className="duration">{result.dateOfTravel}</div>
                            <h3>{result.city}</h3>
                            <p>{result.country}</p>
                            <p>{result.hotelDetails.hotelName}</p>
                            <div className="reviews">
                                <i className="fas fa-star"></i> {result.hotelDetails.rating} (25 Reviews)
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResultContainer;
