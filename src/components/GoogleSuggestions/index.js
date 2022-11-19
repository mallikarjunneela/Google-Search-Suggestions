import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    suggestionsList: initialSuggestionsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteList = id => {
    const {suggestionsList} = this.state
    const filteredSuggestionsList = suggestionsList.filter(
      eachList => eachList.id !== id,
    )
    this.setState({suggestionsList: filteredSuggestionsList})
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google"
        />

        <div className="card-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search Google"
            className="search-google"
          />
          <ul className="list-container">
            {searchResults.map(eachList => (
              <GoogleSuggestions
                onDeleteList={this.onDeleteList}
                suggestionsList={this.eachList}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
