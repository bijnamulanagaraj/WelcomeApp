import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  subscribeButton = () => {
    let buttonText

    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      buttonText = 'Subscribe'
    } else {
      buttonText = 'Subscribed'
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="caption">Thank you!Happy Learning</p>
        <button className="button" type="button" onClick={this.subscribeButton}>
          Subcribe
        </button>
      </div>
    )
  }
}
export default Welcome
