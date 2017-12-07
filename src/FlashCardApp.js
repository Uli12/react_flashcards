import React, { Component } from 'react';
import FlashCardList from './FlashCardList';
import FlashCardForm from './FlashCardForm';
import logo from './logo.svg';
import './App.css';


class FlashCardApp extends Component {
  state = { flashCards: [
    { id: 1, front: 'Front 1', back: 'Back 1'},
    { id: 2, front: 'Front 2', back: 'Back 2'},
    { id: 3, front: 'Front 3', back: 'Back 3'},
    { id: 4, front: 'Front 4', back: 'Back 4'},
    { id: 5, front: 'Front 5', back: 'Back 5'},
    { id: 6, front: 'Front 6', back: 'Back 6'},
  ] }

  deleteFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter(card => card.id !== id);
    this.setState({ flashCards })
  }

  addFlashCard = (flashCard) =>{
    this.setState({ flashCards: [...this.state.flashCards, flashCard] });
  }
  

  render() {
    return (
      <div>
        <h1>Flash Card App</h1>
        <FlashCardList 
        flashCards={this.state.flashCards}
        someProp='value of prop'
        deleteCard={this.deleteFlashCard}
        />
        <FlashCardForm addCard={this.addFlashCard} />
      </div>
    )
  }
}

export default FlashCardApp;
