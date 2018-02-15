import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      chosenId: this.props.data.id,
      selected:false
    }
      this.clickButton = this.clickButton.bind(this)
    }

    clickButton() {
      // debugger
      let opposite_of_selected = !this.state.selected
      this.setState({ selected: opposite_of_selected });
      // alert(this.state.selected)
    console.log(event.target)
    }

  render() {
    let className ='answer'
    let classNameButton = 'button'
    //NOTES FOR LATERif id = selected id{
    //then do the if below
  //}
    if(this.state.selected){
      className+=' selected'
      classNameButton+=' green'
    }
    console.log(this.props.data)
    return(
      <div className="container">
        <h1>We Are Here to Help</h1>
        <div className="content">
          <div className="faq-section">
            <div className="question">
              <div onClick={this.clickButton}className={classNameButton}>+</div>
              <h2 className="header">{this.props.data.question}</h2>
            </div>
            <ul className="faq">
          <li>
            <p className={className}>{this.props.data.answer}</p>
            <div className="sexy_line"></div>
        </li>
        </ul>
      </div>
      </div>
      </div>
    )
  }
}

export default App;
