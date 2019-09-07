import React from "react";
import Listing from "../../ui/listing";
import { getMovieSearch } from "../../../api/search";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import Pagination from "../../ui/pagination";

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
    // the search term in props represents current query term
    getMovieSearch(
      this.props.latestSearchTerm,
      this.storeSearchResults,
      activePage
    );
  };

  render() {
    return (
      <>
        <Header>
          Showing search results for{" "}
          <span style={{ color: "orange" }}>
            "{this.props.latestSearchTerm}"
          </span>
        </Header>
        <Segment textAlign="center" basic>
          <Pagination
            activePage={this.state.activePage}
            handlePaginationChange={(e, { activePage }) =>
              this.fetchMoviesFromPage(activePage)
            }
            totalPages={this.state.totalPages}
          />
          <Listing
            {...this.state}
            fetchMoviesFromPage={this.fetchMoviesFromPage}
          />
          <Pagination
            activePage={this.state.activePage}
            handlePaginationChange={(e, { activePage }) =>
              this.fetchMoviesFromPage(activePage)
            }
            totalPages={this.state.totalPages}
          />
        </Segment>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Update the movie results when search Query is changed.
    // The redux props have the latest data from searchbar so check the state against it
    if (this.state.latestSearchTerm !== this.props.latestSearchTerm) {
      this.setState({ latestSearchTerm: this.props.latestSearchTerm });
      this.fetchMoviesFromPage(DEFAULTACTIVEPAGE);
    }
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchResults);
