// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onplusminus = () => {
    const {isActive} = this.state

    this.setState({isActive: !isActive})
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isActive} = this.state

    return (
      <li className="list">
        <div className="question-container">
          <div className="questions">
            <h1 className="question">{questionText}</h1>
            <button type="button" className="button" onClick={this.onplusminus}>
              {isActive ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
                  alt="plus"
                />
              )}
            </button>
          </div>

          {isActive && (
            <div>
              <hr />
              <p>{answerText}</p>
            </div>
          )}
        </div>
      </li>
    )
  }
}
export default FaqItem
