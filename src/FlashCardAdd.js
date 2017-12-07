import React from 'react'

class FlashCardAdd extends React.Component {
  state = { flipped: false }

  cardShown = () => {
    const { card: { front, back }, deleteCard } = this.props;
    if (this.state.flipped)
      return <h1 onClick={this.toggleFlipped}>{back}</h1>
    else
      return <h1 onClick={this.toggleFlipped}>{front}</h1>


    onChange(event){
      let newArray = this.state.arr.slice();
      newArray.push("new value");
      this.setState({ arr: newArray })
    }

  }

  toggleFlipped = () => {
    this.setState({ flipped: !this.state.flipped })

  }


  render() {
    const { deleteCard } = this.props;
    const { id } = this.props.card;
    return (
      <div>
        <h1>
          {this.cardShown()}
          <button onClick={() => deleteCard(id)}>Delete</button>
        </h1>
      </div>
    )
  }
}


export default FlashCard;