import React from "react";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (event) => {
    console.log("preventing default");
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="signin">
        <h2>Have an account already?</h2>
        <p>Sign in with yoour credentials</p>
        <form onSubmit={this.submitHandler}>
          <input name="email" value={this.state.email} required />
          <label>Email</label>
          <input name="password" value={this.state.password} required />
          <label>Passsword</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignInPage;
