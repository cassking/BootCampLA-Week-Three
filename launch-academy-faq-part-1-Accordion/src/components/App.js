import React from 'react';
import Question from '../components/Question';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId:null,
      selected:false
    }
      this.clickButton = this.clickButton.bind(this)

    }

    clickButton(id) {
      let opposite_of_selected = !this.state.selected
      this.setState({ selected: opposite_of_selected });
      this.setState({ selectedId: id });
     }

  render() {
    let SelectedIdToUseInMap = this.state.selectedId
    let SelectedStateToUseInMap = this.state.selected
    let questionList = this.props.data.map( (accordionItem) => {
      //DO NOT forget to close the MAP first "(" BELOW!!!
      //remember YOU CANNOT USE this.state.ANYTHING inside a map
      // redeclare any EVENTS
      // REDEclare any this.state stateful vars
      // be sure to declare any classNames at top to not have them MISSING BELOW
      let className ='answer'
      let classNameButton = 'button'
      let clickButton = () => {
        this.clickButton(accordionItem.id);
      }
      if(accordionItem.id === SelectedIdToUseInMap){
          className+=' selected'
      }

      if(  SelectedStateToUseInMap && (accordionItem.id === SelectedIdToUseInMap) ){// basically if true do your thing
         classNameButton+=' green'
         className+=' selected'
       } else {
             className ='answer'
       }

      return (
        <Question
          key={accordionItem.id}
          id={accordionItem.id}
          answer={accordionItem.answer}
          question={accordionItem.question}
          clickButton={clickButton}
          className={className}
          classNameButton={classNameButton}
        />
      )
    })

return(
  <div className="container">
    <h1>We Are Here to Help</h1>
    <div className="content">
      <div className="faq-section">
        {questionList}
      </div>
    </div>
  </div>
)


  }
}

export default App;
