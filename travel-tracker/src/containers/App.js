import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Destination from './Destination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemId:null,
      destinationUpdatedList:[],
      striked:[]
    }
    this.destinationClick = this.destinationClick.bind(this)
  }

  destinationClick(id) {
    let striked = this.state.striked
    let concatStriked = striked.concat(id)
    this.setState({selectedItemId: id })
    this.setState({striked:concatStriked})
  }
  render() {

    let selectedItemId = this.state.selectedItemId;
    let destinationUpdatedList = this.state.striked
    let destinationList = this.props.data.places.map((destination) => {
      let className = ''
      let destinationClick = () => {
        this.destinationClick(destination.id);
      }
      let selectedText = '';
        if (destinationUpdatedList.includes(destination.id)) {
          selectedText= " deleted item "
          className+='linethru'

        }
      return (
        <Destination
          key={destination.id}
          id={destination.id}
          name={destination.name}
          selectedText={selectedText}
          className={className}
          destinationClick={destinationClick}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <ul>{destinationList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
