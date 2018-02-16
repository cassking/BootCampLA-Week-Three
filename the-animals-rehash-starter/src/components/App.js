import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Answer from './Answer'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedId: null

    }

    this.clickAnswer = this.clickAnswer.bind(this)
  }
  clickAnswer(id) {
    //console.log('clicked from inside clickAnswer')
    this.setState( {selectedId:id} )
  }

  render() {
    //define class vars here to reset to null OUTSIDE of map
    let comments=""

    let questionText = this.props.data.question.body
    let questionId = this.props.data.question.id
    let answers = this.props.data.answers.map( (answer) =>{
        let className;
      let clickAnswerHandler = () =>{
        this.clickAnswer(answer.id)
        // console.log('from inside map')
      }
      //for each Id check , check the 'correct' key in data file
      if(answer.id === this.state.selectedId){
        if(answer.correct){
          //from data we know this is true/false
        comments+="You Are Correct! that is favorite animal!"
        className="green"
      } else {
        comments+="sorry, try Again! "
        className="red"
      }
    }
      return(
      <Answer
        key={answer.id}
        id={answer.id}
        answer={answer.body}
        correct={answer.correct}
        clickAnswerHandler={clickAnswerHandler}
        className={className}

      />
      )

    })

    return(
      <div>
        <h1>{questionText}</h1>
        <ul>{answers}</ul>
        {comments}
      </div>


)
}

}

export default App
