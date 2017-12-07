import React from 'react';
import FlashCard from './FlashCard';

const displayFlashCards = (cards, deleteCard) => {
  return cards.map(card => {
    return <FlashCard card={card} deleteCard={deleteCard} />
  })
}

const FlashCardList = (props) => {
  return(
    <div>
      { displayFlashCards(props.flashCards, props.deleteCard) }
    </div>
  )}

  export default FlashCardList;

//if you are just returning something then you can use just () and not {}
//(
//    <div>
//      FlashCardList...
//    </div>
//  )

//function foo(number) {
//  console.log(number)
//}
//
//foo(1);

// <div>
// {} 
//</div>
// this {} means run JS inside here, like <% %>

