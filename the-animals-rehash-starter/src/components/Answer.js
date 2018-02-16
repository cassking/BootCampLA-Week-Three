import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Answer extends Component {
  //this is also a class
  constructor(props){
    super(props)


  }

  render() {
  return(
    <li className={this.props.className} onClick={this.props.clickAnswerHandler}>
      {this.props.answer}
{this.props.togglecolor}

    </li>
  )


}
}

export default Answer
