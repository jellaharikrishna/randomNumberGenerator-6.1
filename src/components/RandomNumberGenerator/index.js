import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="descrpition">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="randomNumber">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
