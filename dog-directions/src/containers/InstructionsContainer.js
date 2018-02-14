import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      supplies:[],
      directions:[],
      data:null
    }
    //SET UP NEW FUNCT TO TRACK state
    //IN THIS CASE ID CHANGES
    //USE this TO BIND TO INSTANTIANTED OBJECT ITSELF
    //NEED TO USE bind
    this.setNewId = this.setNewId.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
   setNewId(newstate){
     //setState method simply rre-renders DOm
    this.setState({id:newstate})
   }
   fetchData(){
     fetch('/api/v1/favorite_things.json')
     .then(response =>{
       // debugger
       return response.json();
     })
     .then( body =>{
       // debugger
        //console.log(body.directions)

        this.setState({data:body})
        this.setState({activity:body.activity})
        this.setState({supplies:body.supplies})
        this.setState({directions:body.directions})
       })
 };


  render(){
    // **** ALL THE LOGIC HAS TO HAPPEN INSIDE RENDER AND
    //ABOVE RETURN*****
   // console.log(this.state.data)
   // console.log(this.state.id)
   // old way before buton let supplies = this.props.data.supplies
   // old way befroe button let directions = this.props.data.directions
    let supplies = this.state.supplies
    console.log('SUPPLIES: ', this.state.supplies)

    let items = supplies.map(supply => {
      return(
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })
    let directions = this.state.directions
    console.log('DIRECTIONS:',this.state.directions)
    let steps = directions.map(direction => {
      let className;//defined here so no need for this.
      let handleClick = () => {
        this.setSelectedStep(direction.id)
      }
      // let handleClickData = () => {
      //   this.fetchData(direction.data)
      // }
      if(direction.id == this.state.id){
         alert('same')
        className = "selected"
      }
      // For each StepTile we render, we want to check if that direction's id is the same as the id stored in our state. Write a conditional to compare those values, and set the className variable to selected if they are equal.


      return(
        <StepTile
          step={direction.step}
          key={direction.id}
          id={direction.id}
          setSelectedStep={this.setNewId}
          className={className}
        />
      )
    })
    return(
      <div>
        <h1>How To {this.state.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton
          data={this.state.data}
          fetchData={this.fetchData}
         />
      </div>
    )
  }
}

export default InstructionsContainer
;
