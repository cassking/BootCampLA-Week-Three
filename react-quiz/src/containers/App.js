import React from 'react';
import Answer from './Answer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedId:null
    }
    this.quizClick = this.quizClick.bind(this)
  }
  quizClick(id){
    this.setState({selectedId: id})
  }
  render(){
    let comments=" ";
        let classNameComments="";
    let questionText = this.props.data.question.body
    let questionId = this.props.data.question.id
    let answers = this.props.data.answers.map( (answer)=> {

      let answerChecker = answer.correct
      let quizClicker =() =>{
        this.quizClick(answer.id)
      }
      if (answer.id === this.state.selectedId) {
        if (answerChecker === true) {
          comments = "Correct!"
          classNameComments="correct"
        } else {
          comments = "Incorrect"
          classNameComments="incorrect"

        }
      }
      return(
        <Answer
          key={answer.id}
          id={answer.id}
          body={answer.body}
          question_id={answer.question_id}
          correct={answer.correct}
          quizClick={quizClicker}
        />)
    })

    return(
      <div className="container">
        <h1>React Quiz!</h1>
        <h2>{questionText}</h2>
       <ul>{answers}</ul>
       <p className="comments" className={classNameComments}>{comments}</p>
      </div>
    )
  }
}

export default App
