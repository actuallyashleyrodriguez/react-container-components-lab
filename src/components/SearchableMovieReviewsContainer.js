import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JUAquGOG4rpOBUkAAAx5u5yH9K9R4v2x';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
      searchTerm: '',
      reviews
    }

    fetchRSearch = () =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    handleSearchInputChange = event => 
    this.setState({ searchTerm: event.target.value});

    handleSubmit = event => {
        event.preventdefault();

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id='search-input' type='text' onChange={this.handleSearchInputChange}></input>
                    <button type="submit">Submit</button>
                    {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                     <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}