import React, { Component } from "react";
import { Search, Icon } from "semantic-ui-react";
import { getMovieSearch } from "../../api/search";
import Link from "next/link";
import { connect } from "react-redux";
import { storeLatestSearchResults } from "../../redux/actions";

const MAXRESULTCOUNT = 10;

const LOADINGMESSAGE = "Loading ...";
const DEFAULTSEARCHMESSAGE = "Press Enter to Search ...";
const NORESULTS = "Sorry, no results found!! :(";

const ENTERKEY = "Enter";

class SearchBar extends Component {
  state = {
    isLoading: false,
    searchValue: "",
    results: null,
    searchMessage: DEFAULTSEARCHMESSAGE,
    totalResults: 0,
    rawSearchResult: null
  };

  setIsLoading = () => {
    this.setState({ isLoading: true, searchMessage: LOADINGMESSAGE });
  };
  // There are different instances when we need to show different message
  unsetIsLoadingWithSearchMessage = (searchMsg = DEFAULTSEARCHMESSAGE) => {
    this.setState({
      isLoading: false,
      searchMessage: searchMsg
    });
  };
  // Search the results
  // TODO: Handle when error occurs: Create error handler and pass it to the function
  handleEnterKeyPress = event => {
    // This method checks if enter key was pressed
    if (event.key == ENTERKEY) {
      // console.log("Enter key was pressed");
      this.setIsLoading();
      getMovieSearch(this.state.searchValue, this.storeSearchResults);
    }
  };

  handleSearchTextChange = (event, { value }) => {
    this.setState({ searchValue: value, results: null });
    // console.log("Changed Search : ", value);
    this.unsetIsLoadingWithSearchMessage();
    this.props.setSearchQuery(null);
  };

  formatNStoreResults = results => {
    const formattedResults = results.map(res => ({
      movieid: res.id,
      title: res.title,
      image: `https://image.tmdb.org/t/p/w300${res.poster_path}`,
      rating: `${res.vote_average}/10`
    }));
    // Now that we got the results it's time we stop showing loader
    if (formattedResults == 0) {
      // if no result is found
      this.unsetIsLoadingWithSearchMessage(NORESULTS);
      this.props.setSearchQuery(null);
    } else {
      this.setState({ results: formattedResults });
      this.unsetIsLoadingWithSearchMessage();
      this.props.setSearchQuery(this.state.searchValue);
    }
  };

  storeSearchResults = data => {
    // At a time only show top 10 results from the data. Rest will be used for Show All.
    this.setState({ totalResults: data.total_results, rawSearchResult: data });
    if (data.total_results <= MAXRESULTCOUNT) {
      this.formatNStoreResults(data.results);
    } else {
      this.formatNStoreResults(data.results.slice(0, MAXRESULTCOUNT));
    }
    this.props.storeLatestSearchResults({
      latestSearchTerm: this.state.searchValue,
      searchResults: data.results,
      totalPages: data.total_pages
    });
  };

  searchResultRenderer = ({ movieid, image, rating, title }) => (
    <div>
      <Link key={movieid} href="/movies/[movId]" as={`/movies/${movieid}`}>
        <div>
          {image && (
            <div key="image" className="image">
              <img src={image} />
            </div>
          )}
          <div key="content" className="content">
            {title && <h3>{title}</h3>}
            {rating && (
              <div className="rating">
                <Icon name="star outline" color="yellow" />
                {rating}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );

  render() {
    return (
      <Search
        aligned="centered"
        size="huge"
        fluid
        placeholder="Search Movies ..."
        loading={this.state.isLoading}
        onKeyPress={this.handleEnterKeyPress}
        onSearchChange={this.handleSearchTextChange}
        value={this.state.searchValue}
        results={this.state.results}
        noResultsMessage={this.state.searchMessage}
        resultRenderer={this.searchResultRenderer}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

const mapDispatchToProps = {
  storeLatestSearchResults
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
