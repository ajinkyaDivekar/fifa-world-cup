import React, { Component } from 'react'

export default class ForwordRef extends Component {
  emailRef = React.createRef();
 onClickButton() {
    this.emailRef.current.focus();
  }
  render() {
    return (
      <div>
      <EmailInput ref={this.emailRef} />
      <button onClick={() => this.onClickButton()}>
        Click me to focus email
      </button>
      </div>
    )
  }
}

const EmailInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} type="email" className="AppEmailInput" />
));




