import React from 'react';


class FlashCardForm extends React.Component {
  state = { id: '', nextId: 1 }
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, nextId } = this.state;
    const flashCard = { id, id: nextId }
    this.setState({ id: '', nextId: nextId + 1 })
    this.props.addFlashCard(flashCard);
  }

  handleChange = (e) => {
    this.setState({ id: e.target.value })
  }

  render() {
    const { id } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={id} onChange={this.handleChange} />
      </form>

    )
  }
}

export default FlashCardform; 