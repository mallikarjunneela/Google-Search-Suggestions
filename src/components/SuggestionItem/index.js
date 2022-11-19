import './index.css'

const SuggestionItem = props => {
    const {suggestionsList, onDeleteList} = props
    cont {id, suggestion} = suggestionsList

    const onDelete = () => {
        onDeleteList(id)
    }

    return(
        <li className="list-card-container">
        <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem