import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <div>
          <form>
            <input 
              type="text" name="name" placeholder="Votre nom"
              value={this.state.name}
              onChange={e=>this.setState({ name:e.target.value})}
            />
            <input 
              type="email" name="email" placeholder="Votre email"
              value={this.state.email}
              onChange={e=>this.setState({ email:e.target.value})}
            />
            <textarea 
              name="message" placeholder="Votre message"
              onChange={e=>this.setState({ message:e.target.value})}
              value={this.state.message}
            >
            </textarea>
            <input 
              className="submit"
              type="submit" 
              onClick={e=>this.handleFormSubmit(e)} 
              value="Submit"
            />
          </form>
        </div>
      </div>
    )
  }

}

export default Form;