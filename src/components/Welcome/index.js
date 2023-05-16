// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    value: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  getButtonText = () => {
    const {value} = this.state

    return value ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
