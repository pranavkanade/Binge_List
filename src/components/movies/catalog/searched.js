import React from "react";
import Listing from "./listing";
import { getMovieSearch } from "../../../api/search";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";

const DEFAULTACTIVEPAGE = 1;

class SearchResults extends React.Component {
  state = {
    moviesList: this.props.searchResults,
    latestSearchTerm: this.props.latestSearchTerm,
    totalPages: this.props.totalPages,
    activePage: DEFAULTACTIVEPAGE
  };

  storeSearchResults = data => {
    // At a time only show top 10 results from the data. Rest will be used for Show All.
    this.setState({
      moviesList: data.results,
      totalPages: data.total_pages
    });
  };

  fetchMoviesFromPage = async activePage => {
    this.setState({ activePage });
    // Every time we change the page number the api will be invoked to find the listing on that page
    console.log("Fetching for page : ", activePage);
    getMovieSearch(
      this.state.latestSearchTerm,
      this.storeSearchResults,
      activePage
    );
  };

  render() {
    return (
      <>
        <Header>
          Showing search results for "{this.props.latestSearchTerm}"
        </Header>
        <Segment textAlign="center" basic>
          <Listing
            {...this.state}
            fetchMoviesFromPage={this.fetchMoviesFromPage}
          />
        </Segment>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchResults);
